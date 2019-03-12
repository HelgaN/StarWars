import React from 'react';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi';

import { SwapiServiceConsumer } from '../swapi-sevice-context';

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


const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {   // из SwapiService (Context)
          return (
            <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}>
              <Record field="gender" label="Gedger" />
              <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
          );
      }
    }

</SwapiServiceConsumer>
  );
}

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>

      { ({ getPlanet, getPlanetImage }) => {
        return (
          <ItemDetails
          itemId={itemId}
          getData={getPlanet}
          getImageUrl={getPlanetImage}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
          </ItemDetails>
        );
      }
    }
  </SwapiServiceConsumer>
  );
}

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>

      {
        ({ getStarship, getStarshipImage }) => {
          return (
            <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
              <Record field="costInCredits" label="Cost" />
            </ItemDetails>
          );
        }
      }

  </SwapiServiceConsumer>
  );
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
