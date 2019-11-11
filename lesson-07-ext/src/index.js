import React      from 'react';
import ReactDOM   from 'react-dom';
import './index.css';
import App        from './components/app';
import DbProvider from "./services/dbProvider";

const dbProvider = new DbProvider();

ReactDOM.render(<App
  dbProvider={dbProvider}
/>, document.getElementById('root'));
