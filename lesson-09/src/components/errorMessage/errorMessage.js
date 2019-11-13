import React from 'react'
import styles from './errorMessage.module.sass'
const {error, error_message, error_text} = styles;
const ErrorMessage = ({msg}) => {
  msg = msg || 'Something goes wrong.';
  return (
    <div className={error}>
      <div className={error_message}>
        <span className={error_text}>{msg}</span>
      </div>
    </div>
  )
};

export default ErrorMessage;

