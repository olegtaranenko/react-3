import React, {Component} from 'react';

import AppHeader        from "../app-header";
import SearchPanel      from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList         from "../post-list";
import PostAddForm      from "../post-add-form";
import PostEditForm     from "../post-edit-form";

import './app.css'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: ''
    }
  }

  onEditStart = (id) => {
    console.log(id)
    this.setState({mode: 'edit'})
  };

  onCancelEdit = () => {
    console.log('on cancelEdit');
    this.editStop();
  };

  onSaveEdit = () => {
    console.log('on saveEdit');
    this.editStop();
  };

  editStop = () => {
    this.setState({mode: ''})
  };

  render() {
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
    const {mode} = this.state;

    const form = mode === 'edit' ?
      <PostEditForm
        onCancelEdit={this.onCancelEdit}
        onSaveEdit={this.onSaveEdit}
      /> : <PostAddForm/>;
    return (
      <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList
          posts={data}
          onEditStart={this.onEditStart}
        />
        {form}
      </div>
    )
  }
};
