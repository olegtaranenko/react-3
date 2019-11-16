import React, {Component}                                                 from 'react';
import {Container}                                                        from 'reactstrap';
import Header                                                             from '../header';
import {BooksItem, BooksPage, CharactersPage, HousesPage, RandomCharPage} from "../pages";
import {BrowserRouter as Router, Route}                                   from 'react-router-dom'

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
      <Router>
        <div className='app'>
        <Container>
          <Header/>
        </Container>
        <Container>
{/*
          <RandomCharPage emulateError={emulateError} onClickRandomError={this.onClickRandomError}/>
          <Route path='/characters' component={CharactersPage}/>
          <Route path='/houses' component={HousesPage}/>
*/}
          <Route path='/' exact component={BooksPage}/>
          {/*<Route path='/books' exact component={BooksPage}/>*/}
          <Route path='/books/' exact component={BooksPage}/>
          <Route path='/books/:id' render={
            ({match}) => {
              const {id} = match.params;
              return <BooksItem bookDetailId={id}/>;
            }
          }/>

        </Container>
        </div>
      </Router>
    );
  }
};
