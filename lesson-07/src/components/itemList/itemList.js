import React, {Component} from 'react';
import './itemList.css';

export default class ItemList extends Component {

/*
  constructor(props) {
    super(props);
  }

*/
  render() {
    // debugger;
    const {characters} = this.props;
    const elements = characters.map(character => {
      return <li className="list-group-item">
        {character.name}
      </li>
    });
    return (
      <ul className="item-list list-group">
        {elements}
      </ul>
    );
  }
}
