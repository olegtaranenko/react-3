import React     from 'react';
import ShopHero  from "../shop-hero";
import ShopOffer from "../shop-offer";

const ShopBody = ({theme = 'coffee'}) => {
  return (
    <section className="shop">
      <div className="container">
        <ShopHero theme={theme}/>
        <div className="line"/>
        <ShopOffer theme={theme}/>
      </div>
    </section>
  )
};

export default ShopBody;