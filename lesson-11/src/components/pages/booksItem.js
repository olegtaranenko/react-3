import React, {Component}   from 'react';
import GotService           from "../../services/gotService";
import ItemDetails, {Field} from "../itemDetails";

export default class BooksItem extends Component {
  gotService = new GotService();

  render() {
    const {emulateError, bookDetailId} = this.props;
    return (
      <ItemDetails
        emulateError={emulateError}
        itemId={bookDetailId}
        getGotItem={this.gotService.getBook}
      >
        <Field field='numberOfPages' label='Number of pages'/>
        <Field field='publisher' label='Publisher'/>
        <Field field='released' label='Released at'/>

      </ItemDetails>
    )
  }
}