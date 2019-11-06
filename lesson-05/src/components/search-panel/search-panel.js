import React from 'react'

import { Input }        from 'reactstrap';
import PostStatusFilter from "../post-status-filter";

import styled from "styled-components";

const SearchBlock = styled.div`
  margin: 1rem 0;
  display: flex
  input {
    margin-right: 3px;
  }
`;


const SearchPanel = () => {
  return (
    <SearchBlock>
      <Input
        type="text"
        className="search-import"
        placeholder="Поиск по записям"
      />
      <PostStatusFilter/>
    </SearchBlock>
  )
};

export default SearchPanel
