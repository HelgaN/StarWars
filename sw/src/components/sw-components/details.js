import React from 'react';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return (<ItemDetails
  itemId={itemId}
  getData={getPerson}
  getImageUrl={getPersonImage}>
    <Record field="gender" label="Gedger" />
    <Record field="eyeColor" label="Eye Color" />
  </ItemDetails>
  );
}

const PlanetDetails = ({ itemId }) => {
  return (<ItemDetails
  itemId={itemId}
  getData={getPlanet}
  getImageUrl={getPlanetImage}>
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </ItemDetails>
  );
}

const StarshipDetails = ({ itemId }) => {
  return (<ItemDetails
  itemId={itemId}
  getData={getStarship}
  getImageUrl={getStarshipImage}>
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />
  </ItemDetails>
  );
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
