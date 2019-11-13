import React, {Component} from 'react';
import styled             from 'styled-components';
import GotService from "../../services/gotService";
import Spinner      from "../spinner";
import ErrorMessage from "../errorMessage";

const ItemListElement = styled.li`
  cursor: pointer;
`;

const ItemListBody = styled.ul`
  background-color: #ffffff;
`;

export default class ItemList extends Component {

  gotService = new GotService();

  state = {
    characters: [],
    loading: true,
    failed: false
  };

  componentDidMount() {
    this.updateCharacters();
  }

  updateCharacters = () => {
    const {emulateError} = this.props;
    const pageNumber = !emulateError ? Math.floor(Math.random() * 300 + 5) : -1;

    this.gotService.getAllCharacters(pageNumber)
    .then(this.onCharactersLoaded)
    .catch(this.onError);
  };

  onCharactersLoaded = (characters) => {
    return this.setState({
      characters,
      loading: false,
      failed: false
    });
  };

  onError = () => {
    this.setState({
      failed: true,
      loading: false
    });
  };


  render() {
    const {characters, loading, failed} = this.state;
    const errorState = characters && !characters.length || failed;

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = (!loading && errorState) ? ErrorMessage('Items can\'t be not loaded') : null;

    const elements = (!loading && !errorState) ? characters.map((character) => {
      const {key, name} = character;
      return <ItemListElement
        key={key}
        className="list-group-item"
        onClick={() => this.props.onCharSelected(key)}
      >
        {name}
      </ItemListElement>
    }) : null;

    return (
      <ItemListBody className="item-list list-group rounded">
        {spinner}
        {errorMessage}
        {elements}
      </ItemListBody>
    );
  }
}
