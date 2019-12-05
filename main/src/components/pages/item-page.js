import React    from 'react';
import Banner   from "../banner";
import Footer   from "../footer";
import ItemBody from "../item-body";

const ItemPage = ({itemId}) => {
  return (
    <>
      <Banner/>
      <ItemBody itemId={itemId}/>
      <Footer/>
    </>
  )
};

export default ItemPage;