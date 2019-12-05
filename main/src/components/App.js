import React           from 'react';
import {Route, Switch} from 'react-router-dom';

import {CoffeePage, GoodsPage, MainPage} from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        {/*<Route path='/' exact component={CoffeePage}/>*/}
        <Route path='/main' exact component={MainPage}/>
        <Route path='/coffee' exact component={CoffeePage}/>
        <Route path='/goods' exact component={GoodsPage}/>
      </Switch>
    </>
  );
}

export default App;
