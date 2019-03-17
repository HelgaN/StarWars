/*
import React from 'react';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi';


const swapiService = new SwapiService();
/*
const {
getPerson,
  getPlanet
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;*/

/* Task 2
const getDetailsByRequestType = ({ itemId }, getData, getImageUrl) => {
    let child;
    if(getData === getPerson) {
      child = [<Record field="gender" label="Gedger" key="gender" />, <Record field="eyeColor" label="Eye Color" key="eyeColor"/>];
    }

    if(getData === getStarship) {
      child = [<Record field="model" label="Model" key="model" />,<Record field="length" label="Length" key="length" />,<Record field="costInCredits" label="Cost" key="cost" />];
    }

    if(getData === getPlanet) {
      child = [<Record field="population" label="Population" key="population" />,<Record field="rotationPeriod" label="Rotation Period" key="rotation" />,<Record field="diameter" label="Diameter" key="diameter" />]
    }

    return (<ItemDetails
    itemId={itemId}
    getData={getData}
    getImageUrl={getImageUrl}>
      {child}
    </ItemDetails>
    );
  };


const PersonDetails = ({itemId}) => getDetailsByRequestType({itemId}, getPerson, getPersonImage);
const PlanetDetails = ({itemId}) => getDetailsByRequestType({itemId}, getPlanet, getPlanetImage);
const StarshipDetails = ({itemId}) => getDetailsByRequestType({itemId}, getStarship, getStarshipImage);
*/

/*
export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};*/
