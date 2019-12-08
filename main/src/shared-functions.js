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

const buildAnUrl = (url, baseUrl, ...params) => {
  let referrer = `${baseUrl}/${url}`;
  if (params && params.length) {
    referrer += `?${params.join('&')}`
  }
  return referrer;
};


export {
  gotoProduct,
  escapeNewLine,
  escapeNbsp,
  buildAnUrl
}