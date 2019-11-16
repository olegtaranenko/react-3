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

  constructor(props) {
    super(props);
    this.updateCharacter()
  }

  gotService = new GotService();

  state = {
    char:          {},
    loading:       true,
    failed:        false,
    failedMessage: ''
  };

  onCharacterLoaded = (char) => {
    this.setState({
      char,
      loading: false,
      failed:  false
    });
  };

  onError = (e) => {
    this.setState({
      failed:  {
        message: e.message,
        code:    e.httpStatus
      },
      loading: false
    });
  };

  updateCharacter = () => {
    const {emulateError} = this.props;
    const id = !emulateError ? Math.floor(Math.random() * 240 + 50) : 1e8;

    this.gotService.getCharacter(id)
    .then(this.onCharacterLoaded)
    .catch(this.onError);
  };


  render() {
    const {char, loading, failed} = this.state;
    let error = null;
    let errorBgClass = null;

    if (failed) {
      const {
        message:  failedMessage,
        code: failedCode
      } = failed;

      errorBgClass = `error_${failedCode}`;
      error = <ErrorMessage msg={failedMessage} bgClass={errorBgClass}/>;
    }

    const spinner = loading ? <Spinner/> : null;
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