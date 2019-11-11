import React, {Component} from 'react';
import style              from './App.module.sass';
import {Nav}              from 'reactstrap';
import Header             from "../header";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.tabs = ['bestsellers', 'coffee', 'goods'];

    this.state = {
      activeTab: 0
    };
    const {dbProvider} = props;
    this.dbProvider = dbProvider;
  }


  render() {
    return (
      <Header/>
    );
  }
}
