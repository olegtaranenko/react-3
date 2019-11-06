import React           from 'react';
import styled          from "styled-components";
import {Button, Input} from 'reactstrap';

const PostForm = styled.div`
  display: flex;
  margin-top: 20px;
  input {
    margin-right: 3px;
  }
`;


const PostAddForm = ({onAdd}) => {
  return (
    <PostForm>
      <Input
        type="text"
        placeholder="О чем вы думаете сейчас?"
      />
      <Button
        type="submit"
        onClick={() => onAdd('Hello')}
      >
        Добавить
      </Button>

    </PostForm>
  )
};

export default PostAddForm;