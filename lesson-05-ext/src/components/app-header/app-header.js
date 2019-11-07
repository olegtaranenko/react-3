import React  from 'react'
import { Navbar, NavbarBrand, NavItem} from 'reactstrap';

const AppHeader = (props) => {
  return (
    <Navbar light>
      <NavbarBrand href="#">
        Oleg Taranenko
      </NavbarBrand>
      <NavItem tag="div">5 записей, из них понравилось 0</NavItem>
    </Navbar>
  )
};

export default AppHeader