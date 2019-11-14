import React, {Component}   from 'react';
import GotService           from "../../services/gotService";
import ItemList             from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
import ErrorMessage         from "../errorMessage";
import RowBlock             from "../rowBlock";

export default class BooksPage extends Component {

  gotService = new GotService();

  state = {
    bookDetailId: null,
    error:        false
  };

  onBookSelected = (id) => {
    this.setState({bookDetailId: id});
  };

  componentDidCatch(error, errorInfo) {
    console.log('error');
    this.setState({
      error: true
    })
  }


  render() {

    const {bookDetailId, error} = this.state;
    const {emulateError} = this.props;

    if (error) {
      return <ErrorMessage msg='Books: Critical error happens'/>
    }


    const left = <ItemList
      emulateError={emulateError}
      getGotList={this.gotService.getAllBooks}
      onItemSelected={this.onBookSelected}
      renderItem={({name, publisher}) => (<><span>{`${name} (${publisher})`}</span>
        <button>Click me</button>
      </>)}
    />;

    const right = <ItemDetails
      emulateError={emulateError}
      itemId={bookDetailId}
      getGotItem={this.gotService.getBook}
    >
      <Field field='numberOfPages' label='Number of pages'/>
      <Field field='publisher' label='Publisher'/>
      <Field field='released' label='Released at'/>

    </ItemDetails>;
    return (
      <RowBlock
        left={left}
        right={right}
      />
    );
  }
}
