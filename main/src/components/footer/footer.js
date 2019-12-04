import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-4">
            <ul className="footer">
              <li className="footer__item">
                <a href="#">
                  <img src="./logo/Logo_black.svg" alt="logo"/>
                </a>
              </li>
              <li className="footer__item">
                <a href="#">Our coffee</a>
              </li>
              <li className="footer__item">
                <a href="#">For your pleasure</a>
              </li>
            </ul>
          </div>
        </div>
        <img className="beanslogo" src="./logo/Beans_logo_dark.svg" alt="Beans logo"/>
      </div>
    </footer>
  )
};

export default Footer;