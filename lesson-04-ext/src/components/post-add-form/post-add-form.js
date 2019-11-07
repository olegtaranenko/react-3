import React, {Component} from 'react';

import './post-add-form.css'

export default class PostAddForm extends Component {

  constructor({mode}) {
    super();
    this.state = {
      mode: mode
    }
  }

  render() {
    const mode = this.state.mode;

    return (
      <form className="bottom-panel d-flex">
        <input
          type="text"
          placeholder="О чем вы думаете сейчас?"
          className="form-control new-post-label"
        />
        <button
          type="submit"
          className="btn btn-outline-secondary">
          Добавить
        </button>

      </form>
    )
  }
};
