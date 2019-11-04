import React from 'react';

import './post-list-item.css'

const PostListItem = () => {
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">
        Hello React
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