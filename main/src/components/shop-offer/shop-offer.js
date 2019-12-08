import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {withRouter}       from 'react-router-dom';
import Filter             from "../filter";
import Error              from "../error";
import Spinner            from "../spinner";
import WithShopService    from "../with-shop-service";
import {gotoProduct}      from '../../shared-functions';

import {contentLoaded, contentRequested, shopServiceCleanup, shopServiceFailed} from "../../actions";

class ShopOffer extends Component {

  static defaultProps = {
    theme: 'coffee'
  };

  retrieveData() {
    const {ShopService, contentRequested, contentLoaded, shopServiceFailed, theme, filterState} = this.props;
    const {byCountry, bySearch} = filterState;
    let filterBy = '', filterPayload = '';
    if (byCountry && !bySearch) {
      filterBy = 'country';
      filterPayload = byCountry
    } else if (!byCountry && bySearch) {
      filterBy = 'search';
      filterPayload = bySearch;
    }

    const section = theme;
    ShopService.getSection({section, filterBy, filterPayload, contentRequested})
    .then(res => contentLoaded(res))
    .catch(err => shopServiceFailed(err));
  }

  componentDidMount() {
    this.retrieveData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const {byCountry, bySearch} = this.props.filterState;
    const {filterState} = prevProps;
    if (byCountry !== filterState.byCountry || bySearch !== filterState.bySearch) {
      this.retrieveData();
    }
  }

  render() {
    const {content, loading, failed, theme} = this.props;

    if (failed) {
      const errorCt = <Error exceptionOrMessage={failed} component={theme}/>;
      shopServiceFailed(false);
      return errorCt;
    }

    if (loading) {
      return <Spinner/>
    }

    const isClickable = theme === 'coffee';
    const filter = isClickable ? <Filter/> : null;
    const wrapperClass = `shop__wrapper shop-${theme}`;
    return (
      <>
        {filter}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className={wrapperClass}>
              {
                content.map(item => {
                  const {id} = item;
                  return <OfferItem
                    key={id}
                    item={item}
                    onClick={isClickable ? gotoProduct : () => {
                    }}
                  />
                })
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}


const OfferItem = withRouter(({item, onClick, history}) => {
  const {name, url, id, price, country} = item;
  return (
    <div className="shop__item">
      <img
        onClick={() => onClick(id, history)}
        src={url}
        alt={name}/>
      <div
        onClick={() => onClick(id, history)}
        className="shop__item-title"
      >
        {name}
      </div>
      <div className="shop__item-country">{country}</div>
      <div className="shop__item-price">{price}</div>
    </div>
  )
});

const mapStateToProps = ({content, loading, failed, filterCountries, filterState}) => {
  return {
    content,
    loading,
    failed,
    countries: filterCountries,
    filterState
  }
};

const mapDispatchToProps = {
  contentRequested,
  contentLoaded,
  shopServiceFailed,
  shopServiceCleanup
};


export default WithShopService()(connect(mapStateToProps, mapDispatchToProps)(ShopOffer));
