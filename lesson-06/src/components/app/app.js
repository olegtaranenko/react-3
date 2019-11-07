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


  render() {
    const toggle = () => {
      this.setState(({modal}) => {
        return {modal: !modal}
      });
    };

    return (
       <div>
        <AppBlock>
          <AppHeader/>
          <SearchPanel/>
          <PostList
            posts={this.state.data}
            onDelete={this.runModal}
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
