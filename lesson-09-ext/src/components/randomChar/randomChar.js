import React, {Component} from 'react';
import styled             from 'styled-components';
import GotService         from "../../services/gotService";
import Spinner            from "../spinner";
import ErrorMessage       from "../errorMessage";

const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.15em
  }
`;

const TermSpan = styled.span`
  font-weight: bold;
`;


export default class RandomChar extends Component {

  gotService = new GotService();

  state = {
    char:    {},
    loading: true,
    failed:  false
  };

  componentDidMount() {
    this.updateCharacter();
    this.timerId = setInterval(this.updateCharacter, 1500);
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  onCharacterLoaded = (char) => {
    this.setState({
      char,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      failed:  true,
      loading: false
    });
  };

  updateCharacter = () => {
    // console.log('update character');
    const {emulateError} = this.props;
    const id = !emulateError ? Math.floor(Math.random() * 240 + 50) : 1e8;

    this.gotService.getCharacter(id)
    .then(this.onCharacterLoaded)
    .catch(this.onError);
  };


  render() {
    // console.log('render');
    const {char, loading, failed} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const error = failed ? <ErrorMessage/> : null;
    const content = !(loading || failed) ? <Content char={char}/> : null;

    return (
      <RandomBlock className="rounded">
        {error}
        {spinner}
        {content}
      </RandomBlock>
    );
  }
}

const Content = ({char}) => {
  const {name, gender, born, died, culture} = char;
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <TermSpan>Gender</TermSpan>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermSpan>Born</TermSpan>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermSpan>Died</TermSpan>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <TermSpan>Culture</TermSpan>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  )
};