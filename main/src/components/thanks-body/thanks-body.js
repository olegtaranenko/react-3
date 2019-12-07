import React, {Component}  from 'react';
import {withRouter}       from 'react-router-dom';

class ThanksBody extends Component {

  componentDidCatch(error, errorInfo) {
    console.log('ThanksBody::componentDidCatch');
  }

  render() {
    const MyButton = withRouter(({history}) => (<button
      className="contact-btn thanks-btn__reply"
      type="submit"
      onClick={() => {
        history.push('/contact');
      }}
    >
      Another?
      <img className="thanks-btn__icon" src="/img/reply.png" alt="reply"/>
    </button>));

    return (
      <section className="thanks">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 d-flex justify-content-center flex-column align-items-center text-center">
              <div className="title thanks-title">Tell us about your tastes</div>
              <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo"/>
              <span className="thanks-greeting">Thank you so much <br/>We contact you as soon as posible</span>
              <img className="thanks-breakfast" src="/img/Breakfast.png" alt="breakfast icon"/>
              <MyButton/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ThanksBody;