import React     from 'react';
import {Link}    from 'react-router-dom';
import {connect} from 'react-redux'
import cartIcon  from './shopping-cart-solid.svg';

import './app-header.scss';

const AppHeader = ({items}) => {
  console.log('AppHeader updated', items);

  const getOrderTotal = () => {
    if (!items || !items.length) {
      return 0;
    }

    let total = 0;
    items.forEach((item) => {
      total += (item.qty || 1) * item.price;
    });
    return total;
  };


  return (
    <header className="header">
      <Link className="header__link" to="/menu/">
        Menu
      </Link>
      <Link className="header__link" to="/cart/">
        <img className="header__cart" src={cartIcon} alt="cart"/>
        Total: {getOrderTotal()} $
      </Link>
    </header>
  )
};

const mapStateToProps = ({items}) => {
  return {
    items
  }
};

export default connect(mapStateToProps)(AppHeader);
