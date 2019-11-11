import React, {Component} from 'react';
import {Nav}              from "reactstrap";
import style              from "../app/App.module.sass";
import Section    from "../section";
import DbProvider from "../../services/dbProvider";

export default class Header extends Component{

  render() {
    const db = new DbProvider();
    const sectionContent = db.getSection('bestsellers');
    return(
      <Nav tabs className={style.App}>
        <Section title="Bestsellers" items={sectionContent} className={style.active}/>
        {/*<Section title="Coffee" items={coffee}/>*/}
        {/*<Section title="Goods" items={goods}/>*/}
      </Nav>
    )
  }
}