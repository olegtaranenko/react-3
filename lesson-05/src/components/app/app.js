import React from 'react';

import AppHeader        from "../app-header";
import SearchPanel      from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList         from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'

const App = () => {

  const data = [
    5,
    null,
    {label: 'should not be viewable, missed id'},
    {id: 'missed label'},
    // {label: 'that\'s ok', id: 1234},
    {label: "Going to learn React", important: true, id: 1},
    {label: "That is so good", important: false, id: 2},
    {label: "I need a break...", important: false, id: 3},
  ];
  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </div>
  )
};

export default App