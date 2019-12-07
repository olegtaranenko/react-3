import React, {Component} from 'react';
import WithShopService    from "../with-shop-service";
import {connect}          from "react-redux";
import Error              from "../error";
import Spinner            from "../spinner";

import {escapeNewLine, escapeNbsp}      from '../shared-functions'

import {contentRequested, itemLoaded, shopServiceFailed, doShowLongDescription} from "../../actions";

class ItemBody extends Component {

  componentDidMount() {
    this.retrieveItem();
  }

  componentDidUpdate(prevProps) {
    const {itemId} = this.props;
    if (itemId !== prevProps.itemId) {
      this.retrieveItem();
    }
  }

  retrieveItem() {
    const {itemId} = this.props;

    if (itemId) {
      const {ShopService, contentRequested, itemLoaded, shopServiceFailed} = this.props;

      contentRequested();
      ShopService.getItem(itemId)
      .then(res => {
        itemLoaded(res)
      })
      .catch(err => shopServiceFailed(err));
    }
  }

  showLongDescription = () => {

    const {doShowLongDescription} = this.props;
    doShowLongDescription(true);
  };

  render() {
    const {item, loading, failed, longDescription} = this.props;
    let {name, url, price, description, country} = item;



    if (failed) {
      return <Error exceptionOrMessage={failed}/>;
    }

    if (loading) {
      return <Spinner/>
    }

    let descriptionCt = null;
    let descriptionClassName = 'shop__point';
    if (description && description.length) {
      if (description.length > 200 && !longDescription) {
        description = description.substr(0, 199) + '...';
        descriptionClassName += ' clickable'
      }
      descriptionCt = escapeNewLine(description);
    }

    name = escapeNbsp(name);

    return (
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-1 item-detail">
              <img className="" src={url} alt="coffee_item"/>
            </div>
            <div className="col-lg-4">
              <div className="title">About "{name}"</div>
              <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo"/>
              <div className="shop__point">
                <span>Country: </span>{country}</div>
              <div
                onClick={() => this.showLongDescription()}
                className={descriptionClassName}
              >
                <span>Description: </span>
                  {descriptionCt}
              </div>
              <div className="shop__point">
                <span>Price: </span>
                <span className="shop__point-price">{price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}



const mapStateToProps = ({item, loading, failed, longDescription}) => {
  return {
    item:    item,
    loading: loading,
    failed:  failed,
    longDescription: longDescription
  }
};

const mapDispatchToProps = {
  contentRequested,
  itemLoaded,
  shopServiceFailed,
  doShowLongDescription
};


export default WithShopService()(connect(mapStateToProps, mapDispatchToProps)(ItemBody));
