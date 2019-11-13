import React, {Component} from 'react';
import styled             from 'styled-components';
import GotService         from "../../services/gotService";
import Spinner            from "../spinner";

const CharDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SelectMissed = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;


export default class CharDetails extends Component {

  gotService = new GotService();

  state = {
    character: null,
    loading:   true
  };


  componentDidMount() {
    this.updateCharacter();
  }


  updateCharacter = () => {
    const {characterId} = this.props;

    if (characterId) {
      this.gotService.getCharacter(characterId)
      .then(this.onCharacterLoaded)
      .catch(this.onError);
    }
    // this.foo.bar = 0;
  };


  onCharacterLoaded = (character) => {
    this.setState({
      character,
      loading: false
    });
  };


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.characterId !== this.props.characterId) {
      this.setState({loading: true});
      this.updateCharacter();
    }
  }


  render() {
    if (!this.state.character) {
      return <SelectMissed>Please select a character</SelectMissed>
    }

    const {character: {name, gender, born, died, culture}, loading} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const content = !loading ?
      <>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
        </ul>
      </> : null;

    return (
      <CharDetailsBlock className="rounded">
        {spinner}
        {content}
      </CharDetailsBlock>
    );
  }
}