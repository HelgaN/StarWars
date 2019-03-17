import React from 'react';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi';
/*import { SwapiServiceConsumer } from '../swapi-sevice-context';*/
import { withSwapiService } from '../hoc-helpers';

/*
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
}*/

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
