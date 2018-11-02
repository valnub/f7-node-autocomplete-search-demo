import React from 'react';
import { Page, Block, BlockTitle } from 'framework7-react';

export default class extends React.Component {
  componentDidMount() {
    this.$f7ready((f7app) => {
      const autocomplete = f7app.autocomplete.create({
        inputEl: '#searchfield',
        openIn: 'dropdown',
        source: async function (query, render) {
          const res = await fetch(`//localhost:3001/search/?value=${query}`);
          const matches = await res.json();
          render(matches);
        }
      });

      autocomplete.on('change', (selected) => {
        alert(`You selected ${selected[0]}`);
      });
    });
  }  

  render() {
    return (
      <Page>
        <BlockTitle>Search</BlockTitle>
        <Block strong>
          <input id="searchfield" type="text" placeholder="Country name" />
        </Block>
      </Page>
    );
  }
};
