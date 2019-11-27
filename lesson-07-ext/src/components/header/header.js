import React, {Component} from 'react';
import {Nav}              from "reactstrap";
import style              from "../app/App.module.sass";
import Section            from "../section";
import DbProvider         from "../../services/dbProvider";

export default class Header extends Component {

  render() {
    const db = new DbProvider();
    const {tabs, activeTab, onTabClick} = this.props;

    return (
      <Nav tabs className={style.App}>
        {
          tabs.map((tab, index) => {
            const isActive = index === activeTab;
            const title = tab.charAt(0).toUpperCase() + tab.substr(1);
            return <Section
              items={db.getSection(tab)}
              title={title}
              active={isActive}
              key={index}
              id={index}
              onTabClick={onTabClick}
            />
          })
        }
      </Nav>
    )
  }
}