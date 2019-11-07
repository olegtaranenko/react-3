import React from 'react';

import './post-edit-form.css'

const PostEditForm = ({}) => {
  let formClasses = 'bottom-panel d-flex';
  // if (visible)
  return (
    <form className={formClasses}>
      <input
        type="text"
        // placeholder="О чем вы думаете сейчас?"
        className="form-control new-post-label"
      />
      <button
        type="submit"
        className="btn btn-info">
        Сохранить
      </button>
      <button
        type="submit"
        className="btn btn-outline-secondary">
        Закрыть
      </button>

    </form>
  )
};

export default PostEditForm;