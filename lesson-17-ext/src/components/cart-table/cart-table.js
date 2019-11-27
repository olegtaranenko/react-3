import React, {Component}         from 'react';
import {connect}                  from 'react-redux';
import {cartSave, deleteFromCart} from '../../actions';
import WithRestoService           from "../hoc";
import save                       from './save.svg'

import './cart-table.scss';

class CartTable extends Component {

  cartSave = (items) => {
    const {RestoService} = this.props;

    RestoService.saveCart(items)
    .then(response => response.json())
    .catch(err => console.error(err));
  };

  render() {
    const {items, deleteFromCart} = this.props;

    const saveBt = (items && items.length) ? <img
      onClick={this.cartSave(items)}
      className='cart__save'
      src={save}
      alt="save button"
    /> : null;
    return (
      <>
        <span className="cart__title">Ваш заказ:</span>
        {saveBt}
        <div className="cart__list">
          {
            items.map(item => {
              const {title, price, url, id, qty} = item;
              const qtyCt = (typeof qty === 'number' && qty > 1) ? <div className="cart__item-qty">{qty} x </div> : null;
              return (
                <div className="cart__item" key={id}>
                  <img src={url} className="cart__item-img" alt="Cesar salad"/>
                  <div className="cart__item-info">
                    <div className="cart__item-title">{title}</div>
                    {qtyCt}
                    <div className="cart__item-price">{price}$</div>
                  </div>
                  <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                </div>
              );
            })
          }
        </div>
      </>
    );
  }
}


const mapStateToProps = ({items}) => {
  return {
    items
  }
};

const mapDispatchToProps = {
  deleteFromCart,
  cartSave
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));