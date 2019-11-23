import React, {Component} from 'react'
import styles             from './notFound.module.sass'
import {withRouter}       from 'react-router-dom';


const {e404, e404_message, e404_text} = styles;

class NotFound extends Component {

  render() {
    const msg = this.props.msg || 'The Requested Page Not Found';
    return <div className={e404}>
      <div className={e404_message}>
        <span className={e404_text}>{msg}</span>
      </div>
      <button className='btn btn-info error_button' onClick={() => {
        this.props.history.push(`/`);
      }}>
        Return to main page
      </button>
    </div>
  }
}

export default withRouter(NotFound);

