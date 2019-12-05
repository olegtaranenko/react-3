import React, {Component}     from 'react';
import {connect} from 'react-redux';

import Filter          from "../filter";
import Error           from "../error";
import Spinner         from "../spinner";
import WithShopService from "../with-shop-service";

import {contentLoaded, contentRequested, shopServiceFailed} from "../../actions";

class ShopOffer extends Component {

  static defaultProps = {
    theme: 'coffee'
  };

  componentDidMount() {
    const {ShopService, contentRequested, contentLoaded, shopServiceFailed, theme} = this.props;
    contentRequested();

    ShopService.getSection(theme)
    .then(res => contentLoaded(res))
    .catch(err => shopServiceFailed(err));
  }

  gotoProduct = (id) => {
    window.location.href=`/item/${id}`;
  };

  render() {

    const {content, loading, failed, theme} = this.props;

    if (failed) {
      return <Error exceptionOrMessage={failed}/>;
    }

    if (loading) {
      return <Spinner/>
    }

    const filter = theme === 'coffee' ? <Filter/> : null;

    return (
      <>
        {filter}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
              {
                content.map(item => {
                  const {id} = item;
                  return <OfferItem
                    key={id}
                    item={item}
                    onClick={this.gotoProduct}
                  />
                })
              }
            </div>
          </div>
        </div>
      </>
    )
  }
};

const OfferItem = ({item, onClick}) => {
  const {name, url, id, price, country} = item;
  return (
    <div className="shop__item">
      <img
        onClick={() => onClick(id)}
        src={url}
        alt={name}/>
      <div
        onClick={() => onClick(id)}
        className="shop__item-title"
      >
        {name}
      </div>
      <div className="shop__item-country">{country}</div>
      <div className="shop__item-price">{price}</div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    content: state.content,
    loading: state.loading,
    failed:  state.failed
  }
};

const mapDispatchToProps = {
  contentRequested,
  contentLoaded,
  shopServiceFailed
};


export default WithShopService()(connect(mapStateToProps, mapDispatchToProps)(ShopOffer));
