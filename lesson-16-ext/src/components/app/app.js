import React                from 'react';
import {CartPage, MainPage} from '../pages';
import AppHeader            from '../app-header';
import {Route, Switch}      from 'react-router-dom';

import Background   from './food-bg.jpg';
import MenuListItem from "../menu-list-item";

const App = () => {

  return (
    <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
      <AppHeader total={50}/>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/menu/' exact component={MainPage}/>
        <Route path='/menu/:id' render={
          ({match}) => {
            const {id} = match.params;
            return <MainPage courseId={id}/>;
          }
        }/>
        <Route path='/cart/' component={CartPage}/>
      </Switch>
    </div>
  )
};

export default App;