import React, {Component} from 'react';
import WithShopService    from "../with-shop-service";
import {connect}          from 'react-redux';
import Spinner            from "../spinner";
import Error              from "../error";

import {contentLoaded, contentRequested, shopServiceFailed} from "../../actions";

class Best extends Component {

  componentDidMount() {
    const {ShopService, contentRequested, contentLoaded, shopServiceFailed} = this.props;
    contentRequested();

    ShopService.getSection('bestsellers')
    .then(res => contentLoaded(res))
    .catch(err => shopServiceFailed(err));
  }

  gotoProduct = (id) => {
    console.log(id);
    window.location.href=`/item/${id}`;
  };


  render() {
    const {content, loading, failed} = this.props;

    if (failed) {
      return <Error exceptionOrMessage={failed}/>;
    }

    if (loading) {
      return <Spinner/>
    }


    return (
      <section className="best">
        <div className="container">
          <div className="title">Our best</div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="best__wrapper">
                {
                  content.map(item => {
                    const {id} = item;
                    return <BestItem
                      key={id}
                      item={item}
                      onClick={this.gotoProduct}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const BestItem = ({item, onClick}) => {
  const {name, url, id, price} = item;
  return (
    <div className="best__item">
      <img
        onClick={() => onClick(id)}
        src={url}
        alt={name}
      />
      <div
        onClick={() => onClick(id)}
        className="best__item-title"
      >{name}</div>
      <div className="best__item-price">{price}</div>
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


export default WithShopService()(connect(mapStateToProps, mapDispatchToProps)(Best));
