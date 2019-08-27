/**
 * App Root
 * ---
 * @module app
 */

import React from 'react';

import DataListEntry from './DataListEntry.js';

// FAQ: Only use for JavaScript-specific classes require styling
// import './App.css';

/** @constructor */
class App extends React.Component {
  /**
   * Get all farm animals
   * @return {Promise.<FarmAnimalList>}
   */
  getFarmAnimals() {
    return fetch('http://api.animal.farm:9000')
      .then( response => {
        if ( response.ok ) {
          return response.json();
        } else {
          // RFE: For a full-fledged project, create an error component
          throw new Error('Something went wrong ...', response );
        }
      })
      .catch( err => { throw err; });
  }

  // HACK: If markup becomes re-usable, consider the following components:
  // - Header
  // - Form
  render() {
    return (
      <>
        <header class="c-intro">
          <h2>Farm Creation</h2>
          <p class="c-intro__major">Add elements to your farm.</p>
        </header>
        <form className="s-form">
          <fieldset class="c-intro">
            <legend>Animal Selection</legend>
            <small class="c-intro__minor">The purpose of your choices here are for us to know and you to find out.</small>
            <DataListEntry tagName="div"
                          className="c-datalist c-field"
                          nameAttr="farm_animal"
                          getData={this.getFarmAnimals} />
          </fieldset>
        </form>
      </>
    );
  }
}

export default App;
