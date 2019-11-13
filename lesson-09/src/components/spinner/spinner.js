import React from 'react'
import svg from './Eclipse-1s-64px.svg'


const inlineStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width:  '100%',
  height: 238,
  backgroundColor: '#fff'
};

const Spinner = () => {
  return (
    <div style={inlineStyle}>
      <img src={svg} alt="loading..."/>
    </div>
  )
};

export default Spinner;

