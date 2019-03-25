import React, { Component } from 'react';
import Header from '../header';
import SwapiService from '../../services/swapi';
import DummySwapiService from '../../services/dummy-swapi';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import { SwapiServiceProvider } from '../swapi-sevice-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import './app.css';

export default class App extends Component {

  state = {
    hasError: false,
    swapiService: new SwapiService()
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
               DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      }

    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  };

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }
/*
    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.state.swapiService;

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
*/
    return (
      <SwapiServiceProvider value={this.state.swapiService} >
      <div className="container">
        <Header onServiceChange={this.onServiceChange} />
        <RandomPlanet />

        <PeoplePage />
        <PlanetsPage />
        <StarshipsPage />

      </div>
    </SwapiServiceProvider>
    );
  };
};
