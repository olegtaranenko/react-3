import React, {Component}           from 'react';
import styled          from "styled-components";
import {Button, Input} from 'reactstrap';

const PostForm = styled.form`
  display: flex;
  margin-top: 20px;
  input {
    margin-right: 3px;
  }
`;


export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

  }

  onValueChange = (e) => {
    const value = e.target.value;

    this.setState({
      text: value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {text} = this.state;
    if (text) {
      this.props.onAdd(text);
      this.setState({
        text: ''
      })
    }
  };

  render() {
    return (
      <PostForm
        onSubmit={this.onSubmit}
      >
        <Input
          type="text"
          placeholder="О чем вы думаете сейчас?"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <Button
          type="submit"
        >
          Добавить
        </Button>

      </PostForm>
    )
  }
};