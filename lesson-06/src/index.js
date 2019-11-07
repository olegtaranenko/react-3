import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/app';

const data = [
  5,
  null,
  {label: 'should not be viewable, missed id'},
  {id: 'missed label'},
  // {label: 'that\'s ok', id: 1234},
  {label: "Going to learn React", important: true, id: 1},
  {label: "That is so good", important: false, id: 2},
  {label: "I need a break...", important: false, id: 3},
];

ReactDOM.render(<App data={data} />, document.getElementById('root'));
