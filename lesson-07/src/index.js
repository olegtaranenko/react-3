import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import GotService from "./services/gotService";
const gotService = new GotService();


gotService.getAllCharacters(27, 6)
.then(characters => {
  ReactDOM.render(<App
    characters={characters}
    detail={characters[0]}
  />, document.getElementById('root'));
});
