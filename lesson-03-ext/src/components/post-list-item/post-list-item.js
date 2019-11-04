import React from 'react';

import './post-list-item.css'

const PostListItem = (attirbutes) => {
  // debugger;
  const formatted = attirbutes && attirbutes.dt && ((typeof attirbutes.dt === 'string') ? attirbutes.dt :  attirbutes.dt.toLocaleDateString());
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label col-sm-8">
        Hello React
      </span>
      <span className="app-list-item-time">
        {formatted}
      </span>
      <div className='d-flex justify-content-center align-items-center'>
        <button className="btn-star btn-sm">
          <i className="fa fa-star"/>
        </button>
        <button className="btn-trash btn-sm">
          <i className="fa fa-trash-o"/>
        </button>
        <i className="fa fa-heart"/>
      </div>
    </li>
  )
};

export default PostListItem;