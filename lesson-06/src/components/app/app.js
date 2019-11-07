import React, {Component}                                   from 'react';
import styled                                               from "styled-components";
import Generator                                            from "./id-generator";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

import AppHeader   from "../app-header";
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
      data:        data.filter(post => post && typeof post === 'object' && post.id && post.label),
      deletePopup: false
    };
  }


  aboutToDelete = id => {
    console.log('about to delete %s', id);
    this.showDeletePopup(true);
    this.setState(({idToDelete}) => {
      return {idToDelete: id}
    })
  };


  deleteItem = () => {
    const id = this.state.idToDelete;
    console.log('do delete %s', id);
    this.hideDeletePopup();

    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      return {
        data:       [...before, ...after],
        idToDelete: undefined
      };
    })
  };


  addItem = body => {
    let id = generator.get();
    console.log(id);

    const newItem = {
      label:     body,
      important: false,
      like:      false,
      id:        id
    };

    this.setState(({data}) => {
      const newData = [...data, newItem];
      return {
        data: newData
      }
    });
  };

  showDeletePopup = () => {
    this.setState(() => {
      return {deletePopup: true}
    });
  };
  
  hideDeletePopup = () => {
    this.setState(() => {
      return {deletePopup: false}
    });
  };
  

  toggleBooleanState = (propName, id) => {
    console.log('toggle %s for %s item', propName, id);
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
      const oldItem = data[index];
      const newItem = {...oldItem};

      newItem[propName] = !oldItem[propName];

      return {
        data: [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      };
    })
  };


  onToggleImportant = id => {
    this.toggleBooleanState('important', id)
  };

  onToggleLike = id => {
    this.toggleBooleanState('like', id);
  };


  render() {
    const {data, deletePopup} = this.state;
    const liked = data.filter(item => item.like).length;
    const posted = data.length;

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
            onDelete={this.aboutToDelete}
            onToggleImportant={this.onToggleImportant}
            onToggleLike={this.onToggleLike}
          />
          <PostAddForm
            onAdd={this.addItem}
          />
        </AppBlock>

        <Modal isOpen={deletePopup} toggle={this.hideDeletePopup}>
          <ModalHeader toggle={this.hideDeletePopup}>Требуется Подтверждение</ModalHeader>
          <ModalBody>Вы точно собираетесь удалить запись?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.deleteItem}>Уверен(а)!</Button>{' '}
            <Button color="secondary" onClick={this.hideDeletePopup}>Отмена</Button>
          </ModalFooter>
        </Modal>

      </div>
    )
  }
};
