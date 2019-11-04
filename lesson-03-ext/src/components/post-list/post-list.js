import React from 'react';
import PostListItem from "../post-list-item";

import './post-list.css'

const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem dt={(new Date().toLocaleDateString())}/>
      <PostListItem dt={(new Date())}/>
      <PostListItem/>
    </ul>
  )
};

export default PostList;