import React           from 'react';
import {Route, Switch} from 'react-router-dom';

import {CoffeePage, ContactPage, GoodsPage, MainPage, ItemPage} from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/main' exact component={MainPage}/>
        <Route path='/coffee' exact component={CoffeePage}/>
        <Route path='/goods/' component={GoodsPage}/>
        <Route path='/contact/' component={ContactPage}/>
        <Route path='/item/:id' render={
          ({match}) => {
            const {id} = match.params;
            return <ItemPage itemId={id}/>;
          }
        }/>
      </Switch>
    </>
  );
}

export default App;
