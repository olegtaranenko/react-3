import React                          from 'react'
import {Navbar, NavbarBrand, NavItem} from 'reactstrap';

const AppHeader = (props) => {
  const {liked, posted} = props;
  const caseLastNum = posted % 10;
  const plural2 = posted >= 5 && posted <=20;
  const singular = !plural2 && caseLastNum === 1;
  const plural1 = !plural2 && caseLastNum >=2 && caseLastNum <= 4;
  const suffix = singular ? 'ь' : (plural1 ? 'и' : 'ей');
  const recordFormat = `запис${suffix}`;

  return (
    <Navbar light>
      <NavbarBrand href="#">
        Oleg Taranenko
      </NavbarBrand>
      <NavItem tag="div">{posted} {recordFormat}, из них понравилось {liked}</NavItem>
    </Navbar>
  )
};

export default AppHeader