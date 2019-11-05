import React from 'react';
import PostListItem from "../post-list-item";

import './post-list.css'

const PostList = ({posts}) => {
  const elements = posts
  .filter(post => post && typeof post === 'object' && post.id && post.label)
  .map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className='list-group-item'>
        <PostListItem {...itemProps}/>
      </li>
    )
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
};

export default PostList;
