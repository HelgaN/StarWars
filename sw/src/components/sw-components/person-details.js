import React from 'react';
import ItemDetails, { Record } from '../item-details';
/*import { SwapiServiceConsumer } from '../swapi-sevice-context';*/
import { withSwapiService } from '../hoc-helpers';


/*
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
*/

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gedger" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);
