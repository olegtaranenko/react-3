import React, {Component} from 'react'

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


export default class SearchPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  };

  render() {
    const {filter, onFilterSelect} = this.props;
    return (
      <SearchBlock>
        <Input
          type="text"
          className="search-import"
          placeholder="Поиск по записям"
          onChange={this.onUpdateSearch}
        />
        <PostStatusFilter
          filter={filter}
          onFilterSelect={onFilterSelect}
        />
      </SearchBlock>
    )
  }
};

