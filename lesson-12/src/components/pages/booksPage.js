import React, {Component} from 'react';
import GotService         from "../../services/gotService";
import ItemList           from "../itemList";
import ErrorMessage       from "../errorMessage";
import {withRouter}       from 'react-router-dom';

class BooksPage extends Component {

  gotService = new GotService();

  state = {
    error: false
  };


  componentDidCatch(error, errorInfo) {
    console.log('error');
    this.setState({
      error: true
    })
  }


  render() {
    const {error} = this.state;
    const {emulateError} = this.props;

    if (error) {
      return <ErrorMessage msg='Books: Critical error happens'/>
    }


    return (
      <ItemList
        emulateError={emulateError}
        getGotList={this.gotService.getAllBooks}
        onItemSelected={itemId => {
          this.props.history.push(`/books/${itemId}`);
          // НЕ РАБОТАЕТ!
          // this.props.history.push(itemId) ;
          // РАБОТАЕТ !!!
          // this.props.history.push(itemId+'');
        }}
        renderItem={({name, publisher}) => (<><span>{`${name} (${publisher})`}</span>

        </>)}
      />
    );
  }
}

export default withRouter(BooksPage);