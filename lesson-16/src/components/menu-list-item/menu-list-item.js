import React     from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem}) => {
  const {title, price, url, category} = menuItem;
  let categoryIcon = null;
  if (category) {
    const categoryIconClass = `menu__category-icon menu__category_${category}`;
    categoryIcon = <div className={categoryIconClass}/>;
  }
  return (
    <li className="menu__item">
      <div className="menu__title">{title}</div>
      <img className="menu__img" src={url} alt={title}/>
      <div className='menu__category'>Category: <span>{category}</span>{categoryIcon}</div>
      <div className="menu__price">Price: <span>{price}$</span></div>
      <button className="menu__btn">Add to cart</button>
    </li>
  )
};

export default MenuListItem;