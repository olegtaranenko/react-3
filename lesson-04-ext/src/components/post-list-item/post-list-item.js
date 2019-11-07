import React, {Component} from 'react';

import './post-list-item.css'

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like:      false,
      edit:      false,
      edited:    props.label,
      startEdit: ''
    };
  }

  onImportant = () => {
    this.setState(({important}) => ({
      important: !important
    }))
  };

  onLike = () => {
    this.setState(({like}) => ({
      like: !like
    }))
  };

  onEditStart = () => {
    this.setState(({edited}) => {
      return {
        edit:   true,
        startEdit: edited
      }
    });
  };

  onEditChange = (e) => {
    const edited = e.target.value;
    this.setState({edited})
  };

  onEditOk = () => {
    this.setState({
      edit: false,
      startEdit: ''
    });
  };

  onEditCancel = () => {
    this.setState( ({startEdit}) => { return {
      edit: false,
      edited: startEdit
    }})
  };

  render() {
    const {edit, edited, startEdit, important, like} = this.state;

    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) {
      classNames += ' important';
    }

    if (like) {
      classNames += ' like';
    }
    const labelCt = <span
      className="app-list-item-label"
      onClick={this.onLike}
    >
        {startEdit || edited}
      </span>;

    const editCt = <input
      className="form-control "
      type="text"
      value={edited}
      onChange={this.onEditChange}
    />;

    const editButtons = edit ? <>
        <button
          className="btn-ok btn-sm"
          onClick={this.onEditOk}
        >
          <i className="fa fa-check"/>
        </button>
        <button
          className="btn-cancel btn-sm"
          onClick={this.onEditCancel}
        >
          <i className="fa fa-times"/>
        </button>
      </> : <button
        className="btn-edit btn-sm"
        onClick={this.onEditStart}
      >
        <i className="fa fa-edit"/>
      </button>
    ;


    return (
      <div className={classNames}>
        {edit ? editCt : labelCt}
        <div className='d-flex justify-content-center align-items-center'>
          {editButtons}
          <button
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            <i className="fa fa-star"/>
          </button>
          <button className="btn-trash btn-sm">
            <i className="fa fa-trash-o"/>
          </button>
          <i className="fa fa-heart"/>
        </div>
      </div>
    )
  }
}
