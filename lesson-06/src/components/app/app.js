import React, {Component} from 'react';
import styled from "styled-components";
import Generator from "./id-generator";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostList    from "../post-list";
import PostAddForm from "../post-add-form";

const generator = new Generator({
  maxValue: 1e5,
  // prefix: 'id-'
});

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px
`;

export default class App extends Component {

  constructor(props) {
    super(props);
    const {data} = props;

    this.state = {
      data: data.filter(post => post && typeof post === 'object' && post.id && post.label),
      modal: false
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.runModal = this.runModal.bind(this);
    this.setModal = this.setModal.bind(this);
  }


  runModal(id) {
    console.log('about to delete %s', id);
    this.setModal(true);
    this.setState(({idToDelete}) => {
      return {idToDelete: id}
    })
  }


  deleteItem() {
    let id = this.state.idToDelete;
    console.log('do delete %s', id);
    this.setModal(false);

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
    let id = generator.get();
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

  setModal(visible) {
    this.setState(() => {
      return {modal: visible}
    });
  }

  onToggleImportant = (id) => {
    console.log('important %s', id);
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const oldItem = data[index];
      const newItem = {...oldItem, important: !oldItem.important};

      return {
        data: [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      };
    })
  };

  onToggleLike = (id) => {
    console.log('like %s', id);
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const oldItem = data[index];
      const newItem = {...oldItem, like: !oldItem.like};

      return {
        data: [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      };
    })
  };



  render() {
    const {data} = this.state;
    const liked = data.filter(item => item.like).length;
    const posted = data.length;

    const toggle = () => {
      this.setState(({modal}) => {
        return {modal: !modal}
      });
    };

    return (
       <div>
        <AppBlock>
          <AppHeader
            liked={liked}
            posted={posted}
          />
          <SearchPanel/>
          <PostList
            posts={data}
            onDelete={this.runModal}
            onToggleImportant={this.onToggleImportant}
            onToggleLike={this.onToggleLike}
          />
          <PostAddForm
            onAdd={this.addItem}
          />
        </AppBlock>

        <Modal isOpen={this.state.modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Попытка удалить пост</ModalHeader>
          <ModalBody>Вы точно собираетесь удалить запись?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.deleteItem}>Да!</Button>{' '}
            <Button color="secondary" onClick={toggle}>Отмена</Button>
          </ModalFooter>
        </Modal>

      </div>
    )
  }
};
