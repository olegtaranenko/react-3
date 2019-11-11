import React, {Component} from 'react';
import styled             from 'styled-components';
import GotService         from "../../services/gotService";

const ItemListElement = styled.li`
  cursor: pointer;
`;

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.updateCharacters()
  }


  gotService = new GotService();


  state = {
    characters: [],
    loading: false
  };


  updateCharacters = () => {
    const {emulateError} = this.props;
    const pageNumber = !emulateError ? Math.floor(Math.random() * 200 + 35) : -1;

    this.gotService.getAllCharacters(pageNumber, 3)
    .then(this.onCharactersLoaded)
    .catch(this.onError);
  };

  onCharactersLoaded = (characters) => {
    const {onListUpdated} = this.props;

    onListUpdated && characters && characters[0] && onListUpdated(characters[0]);

    return this.setState({
      characters,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      failed: true,
      loading: false
    });
  };



  render() {
    const {characters, loading} = this.state;
    const elements = characters.map(character => {
      return <ItemListElement className="list-group-item">
        {character.name}
      </ItemListElement>
    });

    return (
      <ul className="item-list list-group">
        {elements}
      </ul>
    );
  }
}
