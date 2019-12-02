import React        from 'react'
import combineReducers from 'redux';
import {connect}    from 'react-redux';
import * as actions from "../actions";

const Todo = ({addTask, hideCompleted, input, inputChanged, items, toggleCompleted, toggleDone}) => {
  const hideOrShow = !hideCompleted ? 'Hide' : 'Show';
  return (
    <div className="app">
      <div className="app-panel">

        <div className="todo-panel">
          <div className="todo-container">
            <ul className="todo-items">
              {
                items.map(({done, name, id}) => {
                  const className = `todo-item${done ? ' todo-item_done' : ''}`;
                  return <li
                    className={className}
                    key={id}
                    onClick={() => toggleDone(id)}
                  >{name}</li>;
                })
              }
            </ul>
            <div className="todo-footer">
              <input
                type="text"
                className="todo-input"
                placeholder="Enter a new todo item"
                onChange={inputChanged}
                value={input}
              />
              <div className="todo-buttons todo-buttons__main">
                <button
                  className="btn btn-hide"
                  onClick={toggleCompleted}
                >{hideOrShow} completed
                </button>
                <button
                  className="btn btn-add"
                  onClick={addTask}
                >Add new
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({items, input, hideCompleted}) => {
  return {
    items,
    input,
    hideCompleted
  }
};

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Todo);