import React from 'react';

const ShopHero = ({theme = 'coffee'}) => {
  const heroClass = `col-lg-4 offset-2 shop__hero shop__hero-${theme}`;
  const themeTitle = theme === 'coffee' ?  'beans' : theme;
  const heroTitle = `About our ${themeTitle}`;

  return (
    <div className="row justify-content-center">
      <div className={heroClass}>
      </div>
      <div className="col-lg-4">
        <div className="title">{heroTitle}</div>
        <img className="beanslogo" src="./logo/Beans_logo_dark.svg" alt="Beans logo"/>
        <div className="shop__text">
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
          <br/><br/>
          Afraid at highly months do things on at. Situation recommend objection do intention<br/>
          so questions. <br/>
          As greatly removed calling pleased improve an. Last ask him cold feel<br/>
          met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
          is song that held help face.
        </div>
      </div>
    </div>
)
};

export default ShopHero;