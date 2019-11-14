import React, {Component}    from 'react';
import {Col, Container, Row} from 'reactstrap';
import Header                from '../header';
import RandomChar            from '../randomChar';
import ErrorMessage  from "../errorMessage";
import CharacterPage from "../characterPage";
import BooksPage     from "../booksPage";

export default class App extends Component {
  state = {
    randomVisible: true,
    error:         false
  };


/*
  componentDidCatch(error, errorInfo) {
    console.log('error');
    this.setState({
      error: true
    })
  }
*/

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

  render() {

/*
    if (this.state.error) {
      return <ErrorMessage msg='Critical error happens'/>
    }

*/
    const {randomVisible, emulateError, reloadApp} = this.state;
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
          <CharacterPage emulateError={emulateError}/>

          <BooksPage/>
          {/*<CharacterPage emulateError={emulateError}/>*/}

        </Container>
      </>
    );
  }
};
