import React, {Component}    from 'react';
import {Col, Container, Row} from 'reactstrap';
import Header                from '../header';
import RandomChar            from '../randomChar';
import ItemList              from '../itemList';
import CharDetails           from '../charDetails';


export default class App extends Component {
  state = {
    randomVisible: true,
    emulateError: false
  };

  onClickRandom = () => {
    // debugger;
    this.setState(({randomVisible}) => {
      return {
        randomVisible: !randomVisible
      }
    })
  };

  onClickRandomError = () => {
    this.setState(({emulateError}) => {
      return {
        emulateError: !emulateError
      }
    })
  };

  render() {
    const {characters, detail} = this.props;
    const {randomVisible, emulateError} = this.state;
    const button = <button onClick={this.onClickRandom}>Random Character</button>;
    const buttonError = <button onClick={this.onClickRandomError}>Random Error</button>;

    const randomCt = randomVisible ? <Row>
      <Col lg={{size: 5, offset: 0}}>
        <RandomChar emulateError={emulateError}/>
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
                characters={characters}
              />
            </Col>
            <Col md='6'>
              <CharDetails
                character={detail}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
