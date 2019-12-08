import React, {Component} from 'react';
import WithShopService    from "../with-shop-service";
import {connect}          from 'react-redux';
import {escapeNewLine} from '../../shared-functions'

class Error extends Component {

  render() {
    const {exceptionOrMessage, component, ShopService, lastUrl} = this.props;
    const message = (exceptionOrMessage && exceptionOrMessage.message) || exceptionOrMessage || "Unexpected error. Please call support";
    let sectionClassName = `container error-section`;
    let componentTitle = null;
    if (component) {
      sectionClassName += ` error-section__${component.toLowerCase().replace(/\w+/g, '-').substr(0, 20)}`;
      componentTitle = <span className="blinking error-section__component">We are about to process {component.toUpperCase()} </span>
    }
    let lastUrlMessage = lastUrl ? ` url = "${ShopService.getUrl(lastUrl)}"` : null;
    const explanation = escapeNewLine(`${message}${lastUrlMessage}`);
    return <section className={sectionClassName}>
      {componentTitle}
      <div className="error-greeting">We are really sorry, something cause an unexpected error</div>

      <div className="error-message__container">
        <div className="error-message">The possible reason is:</div>
        <div className="error-message">{explanation}</div>
      </div>
    </section>
  };
}

const mapStateToProps = ({lastUrl}) => {
  return {
    lastUrl
  }
};


export default WithShopService()(connect(mapStateToProps)(Error));
