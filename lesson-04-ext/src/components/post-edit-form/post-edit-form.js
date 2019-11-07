import React, {Component} from 'react';

// не дублировать из ./post-add-form.css
// import './post-edit-form.css'

export default class PostEditForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id
    }
  }

  render() {
    const {onSaveEdit, onCancelEdit} = this.props;

    return (
      <div className='bottom-panel d-flex'>
        <input
          type="text"
          className="form-control new-post-label"
        />
        <button
          type="submit"
          className="btn btn-info"
          onClick={onSaveEdit}
        >
          Сохранить
        </button>
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={onCancelEdit}
        >
          Закрыть
        </button>

      </div>
    )
  }
};
