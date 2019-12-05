import React, {Component} from 'react';
import WithShopService    from "../with-shop-service";
import {connect}          from "react-redux";
import Error              from "../error";
import Spinner            from "../spinner";

import {contentRequested, itemLoaded, shopServiceFailed} from "../../actions";

class ItemBody extends Component {

  componentDidMount() {
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

  render() {
    const {item, loading, failed} = this.props;
    const {name, url, price, description, country} = item;


    if (failed) {
      return <Error exceptionOrMessage={failed}/>;
    }

    if (loading) {
      return <Spinner/>
    }

    return (
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-1 item-detail">
              <img className="" src={url} alt="coffee_item"/>
            </div>
            <div className="col-lg-4">
              <div className="title">About it</div>
              <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo"/>
              <div className="shop__point">
                <span>Country: </span>{country}</div>
              <div className="shop__point">
                <span>Description: </span>
                {description}</div>
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

const mapStateToProps = state => {
  return {
    item:    state.item,
    loading: state.loading,
    failed:  state.failed
  }
};

const mapDispatchToProps = {
  contentRequested,
  itemLoaded,
  shopServiceFailed
};


export default WithShopService()(connect(mapStateToProps, mapDispatchToProps)(ItemBody));
