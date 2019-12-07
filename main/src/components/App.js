import React           from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFound        from './not-found';

import {CoffeePage, ContactPage, GoodsPage, ItemPage, MainPage, ThanksPage} from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/main' exact component={MainPage}/>
        <Route path='/coffee' exact component={CoffeePage}/>
        <Route path='/goods' exact component={GoodsPage}/>
        <Route path='/contact' exact component={ContactPage}/>
        <Route path='/thanks' exact component={ThanksPage}/>
        <Route path='/item/:id' render={
          ({match}) => {
            const {id} = match.params;
            return <ItemPage itemId={id}/>;
          }
        }/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </>
  );
}

export default App;
