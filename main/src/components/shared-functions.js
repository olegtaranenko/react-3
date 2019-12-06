import React from 'react';

const gotoProduct = (id, history) => {
  history.push( `/item/${id}`);
};

const escapeNewLine = (string) => {
  if (!string) {
    return string;
  }
  return string.split('\n').map((item, index) => {
    return (index === 0) ? item : [<br key={index} />, item]
  })
};


const escapeNbsp = (string) => {
  if (!string) {
    return string;
  }
  return string.replace('&nbsp;', "\u00a0");
};




export {
  gotoProduct,
  escapeNewLine,
  escapeNbsp
}