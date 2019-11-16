import React, {Component}   from 'react';
import GotService           from "../../services/gotService";
import ItemDetails, {Field} from "../itemDetails";
import {withRouter}         from 'react-router-dom';

const styleBtn = {
  // display: 'flex',
  display:      'inline-block',
  marginBottom: 0,
  minWidth:     '10%',
  outline:      0
};

const styleH4 = {
  // display: 'flex',
  display:      'inline-block',
  marginBottom: 0,
  minWidth:     '90%'
};

class BooksItem extends Component {
  gotService = new GotService();

  render() {
    const flexDiv = {
      display: 'flex',
    };

    const {emulateError, bookDetailId} = this.props;
    const disableCache = Math.random();
    return (
      <div style={flexDiv}>
        <div>
          <img src={`https://source.unsplash.com/300x400/?knight,sword&${disableCache}`} alt='Book image'/>
        </div>
        <ItemDetails
          emulateError={emulateError}
          itemId={bookDetailId}
          getGotItem={this.gotService.getBook}
          renderTitle={item => {
            return <div>
              <button style={styleBtn} className="btn" onClick={() => {
                this.props.history.push('/books')
              }}><i className="fa fa-chevron-left"/></button>
              <h4 style={styleH4}>{item.name}</h4>
            </div>
          }}
          blockStylingCss='book-details-info'

        >
          <Field field='numberOfPages' label='Number of pages'/>
          <Field field='publisher' label='Publisher'/>
          <Field field='released' label='Released at'/>

        </ItemDetails>
      </div>
    )
  }
}


export default withRouter(BooksItem);