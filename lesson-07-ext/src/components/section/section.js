import React, {Component} from 'react'
// import { Container, Row, Col } from 'reactstrap';
import {NavItem, NavLink} from 'reactstrap';


export default class Section extends Component {
  render() {
    const {title, active, onTabClick, id} = this.props;
    return (
      <NavItem>
        <NavLink href='#' active={active} onClick={() => {onTabClick(id)}
        }>{title}</NavLink>
      </NavItem>
    )
  }
};

