import React from 'react';

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <header>
            <ul className="header">
              <li className="header__item">
                <a href="#">
                  <img src="./logo/Logo.svg" alt="logo"/>
                </a>
              </li>
              <li className="header__item">
                <a href="#">Our coffee</a>
              </li>
              <li className="header__item">
                <a href="#">For your pleasure</a>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </div>
  )
};

export default Header;