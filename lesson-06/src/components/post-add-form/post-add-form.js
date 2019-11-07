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
    let value = e.target.value;
    console.log(value);

    this.setState({
      text: value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
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