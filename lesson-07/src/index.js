import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GotService from "./services/gotService";
const gotService = new GotService();

gotService.getAllCharacters(5, 3)
.then(characters => {
  // debugger
  // console.log(charachters);
  ReactDOM.render(<App
    characters={characters}
  />, document.getElementById('root'));
});