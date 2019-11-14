import React, {Component} from 'react';
import styled             from 'styled-components';
import Spinner            from "../spinner";
import ErrorMessage       from "../errorMessage";

const ItemListElement = styled.li`
  cursor: pointer;
`;

const ItemListBody = styled.ul`
  background-color: #ffffff;
`;

export default class ItemList extends Component {

  state = {
    itemList: [],
    loading:  true,
    failed:   false
  };

  componentDidMount() {
    const {getGotList} = this.props;

    getGotList()
    .then(this.onListLoaded)
    .catch(this.onError);
  }

  onListLoaded = (itemList) => {
    return this.setState({
      itemList: itemList,
      loading:    false,
      failed:     false
    });
  };

  onError = () => {
    this.setState({
      failed:  true,
      loading: false
    });
  };


  renderItems = (itemList) => {

    return itemList.map((item) => {
      const {key} = item;
      const label = this.props.renderItem(item);

      return <ItemListElement
        key={key}
        className="list-group-item"
        onClick={() => this.props.onItemSelected(key)}>
        {label}
      </ItemListElement>
    });
  };


  render() {
    const {itemList, loading, failed} = this.state;
    const errorState = (itemList && !itemList.length) || failed;

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = (!loading && errorState) ? ErrorMessage('Items can\'t be not loaded') : null;

    const elements = (!loading && !errorState) ? this.renderItems(itemList) : null;

    return (
      <ItemListBody className="item-list list-group rounded">
        {spinner}
        {errorMessage}
        {elements}
      </ItemListBody>
    );
  }
}
