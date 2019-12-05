import React from 'react';
import {Link}    from 'react-router-dom';

const Navbar = ({theme = 'coffee'}) => {

  const title = theme === 'coffee' ? 'Our Coffee' : 'For your pleasure';

  return (
    <div className="container">
      <div className="row">
        <div>
          <header>
            <ul className="header">
              <li className="header__item">
                <Link to="/">
                  <img src="/logo/Logo.svg" alt="logo"/>
                </Link>
              </li>
              <li className="header__item">
                <Link to="/coffee">Our coffee</Link>
              </li>
              <li className="header__item">
                <Link to="/goods">For your pleasure</Link>
              </li>
              <li className="header__item">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </header>
        </div>
      </div>
      <h1 className="title-big">{title}</h1>
    </div>
  )
};

export default Navbar;