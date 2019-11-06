import React, {Component} from 'react';

import AppHeader        from "../app-header";
import SearchPanel      from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList         from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        5,
        null,
        {label: 'should not be viewable, missed id'},
        {id: 'missed label'},
        // {label: 'that\'s ok', id: 1234},
        {label: "Going to learn React", important: true, id: 1},
        {label: "That is so good", important: false, id: 2},
        {label: "I need a break...", important: false, id: 3},
      ]

    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.maxId = 4;
  }

  deleteItem(id) {
    console.log(id);
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem && typeof elem === 'object' && elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      return {
        data: [...before, ...after]};
    })
  }

  addItem(body) {
    const newItem = {
      label: body,
      importan: false,
      id: this.maxId++
    };
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  };
  
  

  render() {
    return (
      <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    )
  }
};
