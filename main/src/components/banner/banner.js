import React  from 'react';
import Navbar from "../navbar";

const Banner = ({theme = 'coffee'}) => {
  let bannerClass = 'banner';

  if (theme !== 'coffee') {
    bannerClass += ` banner__${theme}`;
  }

  return (
    <div className={bannerClass}>
      <Navbar theme={theme}/>
    </div>
  )
};


export default Banner;