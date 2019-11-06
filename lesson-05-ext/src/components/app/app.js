import React, {Component} from 'react';
import styled from "styled-components";
import nextId from "react-id-generator";

import AppHeader   from "../app-header";
import SearchPanel from "../search-panel";
import PostList    from "../post-list";
import PostAddForm from "../post-add-form";


const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    const {data} = props;

    this.state = {
      data: data.filter(post => post && typeof post === 'object' && post.id && post.label)
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.maxId = 4;
  }

  deleteItem(id) {
    console.log(id);
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      return {
        data: [...before, ...after]
      };
    })
  }

  addItem(body) {
    let id = nextId();
    console.log(id);

    const newItem = {
      label:    body,
      importan: false,
      id:       id
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
      <AppBlock>
        <AppHeader/>
        <SearchPanel/>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </AppBlock>
    )
  }
};
