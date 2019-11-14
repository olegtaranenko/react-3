import React, {Component} from 'react';
import styled             from 'styled-components';
import GotService         from "../../services/gotService";
import {Col, Row}         from "reactstrap";
import ItemList           from "../itemList";
import CharDetails        from "../charDetails";
import ErrorMessage       from "../errorMessage";

const CharDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SelectMissed = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;


export default class BooksPage extends Component {

  gotService = new GotService();

  state = {
    bookDetailId: null,
    error:        false
  };

  onItemSelected = (id) => {
    this.setState({bookDetailId: id});
  };

  componentDidCatch(error, errorInfo) {
    console.log('error');
    this.setState({
      error: true
    })
  }


  render() {

    const {bookDetailId} = this.state;
    const {emulateError} = this.props;

    if (this.state.error) {
      return <ErrorMessage msg='Critical error happens'/>
    }


    return (
      <Row>
        <Col md='6'>
          <ItemList
            emulateError={emulateError}
            getData={this.gotService.getAllBooks}
            onItemSelected={this.onItemSelected}
            renderItem={({name, publisher}) => (<><span>{`${name} (${publisher})`}</span><button>Click me</button> </>)}
          />
        </Col>
        <Col md='6'>
          <CharDetails
            emulateError={emulateError}
            bookId={bookDetailId}
          />
        </Col>
      </Row>
    );
  }
}
