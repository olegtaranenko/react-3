import React from 'react';
import './error.sass';

const Error = ({exceptionOrMessage} = {}) => {
  // console.dir(exceptionOrMessage);

  const err = (exceptionOrMessage && exceptionOrMessage.message) || exceptionOrMessage;
  return <div className="error">
    <span>Error: {err}</span>
  </div>
};

export default Error;
