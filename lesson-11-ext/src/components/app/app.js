import React, {Component}                       from 'react';
import {Container}                              from 'reactstrap';
import Header                                   from '../header';
import {BooksItem, BooksPage}                   from "../pages";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound                                 from "../notFound";

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

            <Switch>
              <Route path='/' exact component={BooksPage}/>
              {/*<Route path='/books' exact component={BooksPage}/>*/}
              <Route path='/books/' exact component={BooksPage}/>
              <Route path='/books/:id' render={
                ({match}) => {
                  const {id} = match.params;
                  return <BooksItem bookDetailId={id}/>;
                }
              }/>
              <Route path="*" component={NotFound}/>
            </Switch>

          </Container>
        </div>
        <Switch>
        </Switch>
      </Router>
    );
  }
};
