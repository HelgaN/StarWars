import React, {Component} from 'react';
import SwapiService from '../../services/swapi';
import Loader from '../loader';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: !this.item ? false : true
  };

  componentDidMount = () => {
    this.updateItem();
  }

  componentWillUpdate() {
    this.state.loading = true;
  }

  componentDidUpdate(prevProps) {
    if(this.props.itemId !== prevProps.itemId
    || this.props.getData !== prevProps.getData
    || this.props.getImageUrl !== prevProps.getImageUrl) {  // IF обязательно при обновлении State
      this.updateItem();
      this.state.loading = false;
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if(!itemId) {
      return;
    }

/*    this.swapiService
      .getPerson(itemId)*/
      getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item)
         });
      });
  };

  render() {
    if(!this.state.item) {
      return <span>Select a item from the list</span>;
    }

    const { loading, item, image } = this.state;
    const { name } = item;

    const loader = loading;
    if(loading) return <Loader />;
  /*  const content = !loading ? {itemView} : null;*/

    return (
    <div className="person-details card">
      {loader}
      <img className="person-image" src={image} alt={name}/>
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });            // {item[field]} в Record теперь работает
            })                                                       // ok для реализ filter
          }
        </ul>
      </div>
    </div>)
  }
}
