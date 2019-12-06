import React      from 'react';
import Banner     from "../banner";
import Footer     from "../footer";
import ThanksBody from "../thanks-body";


const ThanksPage = () => {
  const theme = 'contact';
  return (
    <>
      <Banner theme={theme}/>
      <ThanksBody/>
      <Footer/>
    </>
  )
};

export default ThanksPage;