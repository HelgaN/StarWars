import React from 'react';
import ItemList from '../item-list';
import withData, { withSwapiService } from '../hoc-helpers';
/*import SwapiService from '../../services/swapi';*/
/*
const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;
*/
const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (<Wrapped {...props} >
      {fn}
    </Wrapped>);
  }
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(
    withChildFunction(renderName)(
      ItemList)));

const PlanetList = withSwapiService(mapPlanetsMethodsToProps)(
  withData(
    withChildFunction(renderName)(
      ItemList)));


const StarshipList = withSwapiService(mapStarshipsMethodsToProps)(
  withData(
    withChildFunction(renderModelAndName)(
      ItemList)));


// const composition = (x) => f(g(x));  пример композиции в native js

export {
  PersonList,
  PlanetList,
  StarshipList
};
