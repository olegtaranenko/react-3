import React from 'react';
import {Link}    from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <ul className="footer">
              <li className="footer__item">
                <Link to="/">
                  <img src="/logo/Logo_black.svg" alt="logo"/>
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/coffee">Our coffee</Link>
              </li>
              <li className="footer__item">
                <Link to="/goods">For your pleasure</Link>
              </li>
            </ul>
          </div>
        </div>
        <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo"/>
      </div>
    </footer>
  )
};

export default Footer;