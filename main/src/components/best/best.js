import React, {Component} from 'react';
import {withRouter}       from 'react-router-dom';
import WithShopService    from "../with-shop-service";
import {connect}          from 'react-redux';
import Spinner            from "../spinner";
import Error              from "../error";

import {gotoProduct, escapeNbsp}      from '../shared-functions'

import {contentLoaded, contentRequested, shopServiceFailed} from "../../actions";

class Best extends Component {

  componentDidMount() {
    this.retrieveBestsellers();
  }

  componentDidUpdate(prevProps) {
    const {content} = this.props;
    let sameContent = true;
    prevProps.content.some((prevItem, index) => {
      if (prevItem.id !== content[index].id) {
        sameContent = false;
        return true;
      }
    });
    if (!sameContent) {
      this.retrieveBestsellers();
    }
  }


  retrieveBestsellers() {
    const {ShopService, contentRequested, contentLoaded, shopServiceFailed} = this.props;
    contentRequested();

    ShopService.getSection('bestsellers')
    .then(res => contentLoaded(res))
    .catch(err => shopServiceFailed(err));
  }

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
                      onClick={gotoProduct}
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

const BestItem = withRouter(({item, onClick, history}) => {
  let {name, url, id, price} = item;
  name = escapeNbsp(name);

  return (
    <div className="best__item">
      <img
        onClick={() => onClick(id, history)}
        src={url}
        alt={name}
      />
      <div
        onClick={() => onClick(id, history)}
        className="best__item-title"
      >{name}</div>
      <div className="best__item-price">{price}</div>
    </div>
  )
});

const mapStateToProps = ({content, loading, failed}) => {
  return {
    content: content,
    loading: loading,
    failed:  failed
  }
};

const mapDispatchToProps = {
  contentRequested,
  contentLoaded,
  shopServiceFailed
};


export default WithShopService()(connect(mapStateToProps, mapDispatchToProps)(Best));
