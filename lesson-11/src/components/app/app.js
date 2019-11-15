import React, {Component}                                      from 'react';
import {Container}                                             from 'reactstrap';
import Header                                                  from '../header';
import {BooksPage, CharactersPage, HousesPage, RandomCharPage} from "../pages";

export default class App extends Component {

  state = {
    emulateError: false
  };

  onClickRandomError = () => {
    this.setState((state) => {
      const {emulateError} = state;
      return ({emulateError: !emulateError});
    })
  };


  render() {
    const {emulateError} = this.state;
    return (
      <>
        <Container>
          <Header/>
        </Container>
        <Container>
          <RandomCharPage emulateError={emulateError} onClickRandomError={this.onClickRandomError}/>
          <CharactersPage emulateError={emulateError}/>
          <BooksPage/>
          <HousesPage/>
        </Container>
      </>
    );
  }
};
