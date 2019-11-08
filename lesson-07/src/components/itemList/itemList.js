import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components';

const ItemListElement = styled.li`
  cursor: pointer;
`;

export default class ItemList extends Component {
  render() {
    const {characters} = this.props;
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
