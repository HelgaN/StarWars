import React, { Component } from 'react';
import Header from '../header';
import SwapiService from '../../services/swapi';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

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

    return (
      <div className="container">
        <Header />
        <RandomPlanet />

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
              <PersonDetails personId={this.state.selectedPerson} />
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
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
          </div>

      </div>
    );
  };
};
