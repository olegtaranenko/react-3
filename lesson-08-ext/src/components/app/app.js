import React, {Component}    from 'react';
import {Col, Container, Row} from 'reactstrap';
import Header                from '../header';
import RandomChar            from '../randomChar';
import ItemList              from '../itemList';
import CharDetails           from '../charDetails';


export default class App extends Component {
  state = {
    randomVisible: true,
    emulateError: false,
    characterDetail: {}
  };

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

  onListUpdated = (characterDetail) => {
    this.setState((state) => {
      return {...state, characterDetail};
    })
  };

  render() {
    const {randomVisible, emulateError, characterDetail, reloadApp} = this.state;
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
                onListUpdated={this.onListUpdated}
              />
            </Col>
            <Col md='6'>
              <CharDetails
                character={characterDetail}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
