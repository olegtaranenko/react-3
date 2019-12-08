import React from 'react'
import svg from './Eclipse-1s-64px.svg'


const Spinner = () => {
  return (
    <div className="spinner">
      <img src={svg} alt="loading"/>
    </div>
  )
};

export default Spinner;

