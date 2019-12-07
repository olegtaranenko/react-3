import React, {Component} from 'react'
import {withRouter}       from 'react-router-dom';
import Banner             from "../banner";
import Footer             from "../footer";

class NotFound extends Component {

  render() {
    const msg = this.props.msg || 'The Requested Page Not Found';
    return <div className="e404-container">
      <Banner theme="error"/>
      <div className="e404">
        <div className="e404_message">
          <span className="e404_text">{msg}</span>
        </div>
        <button className='btn btn-info error_button' onClick={() => {
          this.props.history.push(`/`);
        }}>
          Return to main page
        </button>
      </div>
      <Footer/>
    </div>
  }
}

export default withRouter(NotFound);

