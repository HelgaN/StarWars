import React, { Component } from 'react';
import Header from '../header';
import SwapiService from '../../services/swapi';
import DummySwapiService from '../../services/dummy-swapi';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import { SwapiServiceProvider } from '../swapi-sevice-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import StarshipDetails from "../sw-components/starship-details";

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Router>
          <div className="container">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />

            <Route path="/" render={() => <h2>Welcom to SPA "StarWars-DB"</h2>} exact />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" exact component={StarshipsPage} />
            <Route path="/starships/:id" render={({match, location, history}) =>
              { const { id } = match.params;
                return <StarshipDetails itemId={id} />}} />

          </div>
        </Router>
      </SwapiServiceProvider>
    );
  };
};
