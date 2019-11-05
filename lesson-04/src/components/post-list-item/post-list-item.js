import React from 'react';

import './post-list-item.css'

const PostListItem = ({label, important = false}) => {
  let classNames = 'app-list-item d-flex justify-content-between';
  if (important) {
    classNames += ' important';
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label">
        {label}
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
    </div>
  )
};

export default PostListItem;