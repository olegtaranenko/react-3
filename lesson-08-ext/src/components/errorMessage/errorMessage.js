import React from 'react'
import './errorMessage.sass'
// import styles from './errorMessage.module.sass'

const ErrorMessage = ({msg, bgClass}) => {
  msg = msg ||  'Something goes wrong';
  // const {error, error_message, error_text} = styles;
  return (
    <div className={`error ${bgClass}`}>
      <div className='error_message'>
        <span className='error_text'>{msg}</span>
      </div>
    </div>
  )
};

export default ErrorMessage;

