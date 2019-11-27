import React, {Component} from 'react';
import styled from 'styled-components';

const CharDetailsBlock=styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SelectError=styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;


export default class CharDetails extends Component {

  render() {
    const {character} = this.props;
    return (
      <CharDetailsBlock className="rounded">
        <h4>{character.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{character.gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{character.born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{character.died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{character.culture}</span>
          </li>
        </ul>
      </CharDetailsBlock>
    );
  }
}