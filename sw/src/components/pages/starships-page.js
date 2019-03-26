import React/*, {Component}*/ from 'react';
/*import Row from '../row';*/
import { StarshipList/*, StarshipDetails*/ } from '../sw-components';
import { withRouter } from 'react-router-dom';
/*
export default class StarshipsPage extends Component {

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
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}/>
    )
  }
};*/

const StarshipsPage = ({ history }) => {
  return (<StarshipList onItemSelected={
    (itemId) => history.push(`/starships/${itemId}`)} />);
};

/* withRouter - HOC. передает match, history, location в StarshipsPage */

export default withRouter(StarshipsPage);
