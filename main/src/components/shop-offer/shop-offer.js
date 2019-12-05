import React  from 'react';
import Filter from "../filter";
const ShopOffer = ({theme = 'coffee'}) => {
  const filter = theme === 'coffee' ? <Filter/> : null;
  return (
    <>
      {filter}
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="shop__wrapper">
            <div className="shop__item">
              <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                   alt="coffee"/>
              <div className="shop__item-title">
                Solimo Coffee Beans 2kg
              </div>
              <div className="shop__item-country">Brazil</div>
              <div className="shop__item-price">10.73$</div>
            </div>
            <div className="shop__item">
              <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                   alt="coffee"/>
              <div className="shop__item-title">
                Presto Coffee Beans 1kg
              </div>
              <div className="shop__item-country">Brazil</div>
              <div className="shop__item-price">15.99$</div>
            </div>
            <div className="shop__item">
              <img src="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg" alt="coffee"/>
              <div className="shop__item-title">
                AROMISTICO Coffee 1kg
              </div>
              <div className="shop__item-country">Brazil</div>
              <div className="shop__item-price">6.99$</div>
            </div>
            <div className="shop__item">
              <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                   alt="coffee"/>
              <div className="shop__item-title">
                Solimo Coffee Beans 2kg
              </div>
              <div className="shop__item-country">Brazil</div>
              <div className="shop__item-price">10.73$</div>
            </div>
            <div className="shop__item">
              <img
                src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756"
                alt="coffee"/>
              <div className="shop__item-title">
                Solimo Coffee Beans 2kg
              </div>
              <div className="shop__item-country">Brazil</div>
              <div className="shop__item-price">10.73$</div>
            </div>
            <div className="shop__item">
              <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                   alt="coffee"/>
              <div className="shop__item-title">
                Solimo Coffee Beans 2kg
              </div>
              <div className="shop__item-country">Brazil</div>
              <div className="shop__item-price">10.73$</div>
            </div>
          </div>
        </div>
      </div>
    </>
)
};

export default ShopOffer;