import React, {Component} from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';
/*
export default class PeoplePage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem
    });
  }

  render() {
    const selectedItem = this.state.selectedItem;

    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}/>
    )
  }
};*/

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;

  return (
    <Row
      left={<PersonList onItemSelected={
        (itemId) => history.push(`/people/${itemId}`)} />}
      right={<PersonDetails itemId={id} />}/>)
};

export default withRouter(PeoplePage);
