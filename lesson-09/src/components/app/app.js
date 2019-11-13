import React, {Component}    from 'react';
import {Col, Container, Row} from 'reactstrap';
import Header                from '../header';
import RandomChar            from '../randomChar';
import ItemList              from '../itemList';
import CharDetails           from '../charDetails';
import ErrorMessage from "../errorMessage";
import Spinner      from "../spinner";

export default class App extends Component {
  state = {
    randomVisible:     true,
    emulateError:      false,
    characterDetailId: null,
    error:             false
  };


  componentDidCatch(error, errorInfo) {
    console.log('error');
    this.setState({
      error: true
    })
  }

  onClickRandom = () => {
    this.setState(({randomVisible}) => {
      return {
        randomVisible: !randomVisible
      }
    })
  };

  onClickRandomError = () => {
    this.setState((state) => {
      const {emulateError} = state;
      return ({...state}, {emulateError: !emulateError});
    })
  };

  onListUpdated = (characterDetailId) => {
    this.setState((state) => {
      return {...state, characterDetailId};
    })
  };

  onCharSelected = (id) => {
    this.setState({characterDetailId: id});
  };


  render() {

    if (this.state.error) {
      return <ErrorMessage msg='Critical error happens'/>
    }

    const {randomVisible, emulateError, characterDetailId, reloadApp} = this.state;
    const button = <button onClick={this.onClickRandom}>Random Character</button>;
    const buttonError = <button onClick={this.onClickRandomError}>Random Error</button>;

    const randomCt = randomVisible ? <Row>
      <Col lg={{size: 5, offset: 0}}>
        <RandomChar emulateError={emulateError} reloadApp={reloadApp}/>
      </Col>
    </Row> : null;

    return (
      <>
        <Container>
          <Header/>
          {button}
          {buttonError}
        </Container>
        <Container>
          {randomCt}
          <Row>
            <Col md='6'>
              <ItemList
                emulateError={emulateError}
                onCharSelected={this.onCharSelected}
              />
            </Col>
            <Col md='6'>
              <CharDetails
                emulateError={emulateError}
                characterId={characterDetailId}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
