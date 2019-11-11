import React, {Component} from 'react'
// import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


export default class Section extends Component{
  render() {
    return (
      <NavItem>
        <NavLink href="#" active>{this.props.title}</NavLink>
      </NavItem>
    )
  }
};
