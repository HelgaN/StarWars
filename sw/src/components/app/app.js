import React, { Component } from 'react';
import Header from '../header';
import SwapiService from '../../services/swapi';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import Row from '../row';

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  };

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (<ItemDetails
    itemId={11}
    getData={getPerson}
    getImageUrl={getPersonImage}>
      <Record field="gender" label="Gedger" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
    );

    const starshipDetails = <ItemDetails
    itemId={5}
    getData={getStarship}
    getImageUrl={getStarshipImage}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>

    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <Row left={personDetails} right={starshipDetails} />

        <PeoplePage />

          <div className="row mb-2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}>
                { (i) => `${i.name} (${i.birthYear})` }
              </ItemList>
            </div>
            <div className="col-md-6">
              <ItemDetails personId={this.state.selectedPerson} />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={(item) => item.name}>
                { (i) => `${i.name} (${i.birthYear})` }
              </ItemList>
            </div>
            <div className="col-md-6">
              <ItemDetails personId={this.state.selectedPerson} />
            </div>
          </div>

      </div>
    );
  };
};
