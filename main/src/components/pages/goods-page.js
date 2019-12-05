import React     from 'react';
import Banner    from "../banner";
import Footer    from "../footer";
import ShopBody  from "../shop-body";

const GoodsPage = () => {
  const theme = 'goods';
  return (
    <>
    <Banner theme={theme}/>
    <ShopBody theme={theme}/>
    <Footer/>
    </>
  )
};

export default GoodsPage;