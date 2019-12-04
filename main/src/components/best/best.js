import React from 'react';

const Best = () => {
  return (
    <section className="best">
      <div className="container">
        <div className="title">Our best</div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="best__wrapper">
              <div className="best__item">
                <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                     alt="coffee"/>
                <div className="best__item-title">
                  Solimo Coffee Beans 2kg
                </div>
                <div className="best__item-price">10.73$</div>
              </div>
              <div className="best__item">
                <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                     alt="coffee"/>
                <div className="best__item-title">
                  Presto Coffee Beans 1kg
                </div>
                <div className="best__item-price">15.99$</div>
              </div>
              <div className="best__item">
                <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                     alt="coffee"/>
                <div className="best__item-title">
                  AROMISTICO Coffee 1kg
                </div>
                <div className="best__item-price">6.99$</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Best;