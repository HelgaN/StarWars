import React, { Component } from 'react';
import SwapiService from '../../services/swapi';
import './random-planet.css';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';


export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},          // не null, чтобы не упала деструктаризация в render
    loading: true,
    error: false
  /*  id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null*/
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });                  // данные обрабатываеются в swapi.js
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });

  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
    .getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError);
  /*  .then((planet) => {
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      });
    });*/
  }

  render() {

    const { planet, loading, error } = this.state;

    const hasData = !(error || loading);

    const errorMess = error ? <ErrorIndicator /> : null;
    const loader = loading ? <Loader /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMess}
        {loader}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
          <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
          <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
          <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
