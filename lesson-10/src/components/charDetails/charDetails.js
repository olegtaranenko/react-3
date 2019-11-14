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

const TermSpan = styled.span`
  font-weight: bold;
`;



const Field = ({character, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <TermSpan>{label}</TermSpan>
      <span>{character[field]}</span>
    </li>
  )
};

export {
  Field
}

export default class CharDetails extends Component {

  gotService = new GotService();

  state = {
    character: null,
    loading:   true
  };

  componentDidCatch(error, errorInfo) {
    console.log('error');
    this.setState({
      error: true
    })
  }


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
    const {character, loading} = this.state;
    if (!character) {
      return <SelectMissed>Please select a character</SelectMissed>
    }

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ?
      <>
        <h4>{character.name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, child => {
              return React.cloneElement(child, {character});
            })
          }

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