import React        from 'react'
import {connect}    from 'react-redux';
import * as actions from "../actions";


const Todo = ({counter, dec, inc, rnd, rst}) => {
  return (
    <div className="app">
      <div className="app-panel">

        <div className="todo-panel">
          <div className="todo-container">
            <ul className="todo-items">
              <li className="todo-item todo-item_done">Learn React</li>
              <li className="todo-item">React is awesome</li>
              <li className="todo-item">Learn React</li>
              <li className="todo-item">React is awesome</li>
              <li className="todo-item">Learn React</li>
              <li className="todo-item">React is awesome</li>
              <li className="todo-item">Learn React</li>
              <li className="todo-item">React is awesome</li>
              <li className="todo-item">Learn React</li>
              <li className="todo-item">React is awesome</li>
            </ul>
            <div className="todo-footer">
              <input type="text" className="todo-input" placeholder="Enter a new todo item"/>
              <div className="todo-buttons todo-buttons__main">
                <button className="btn btn-hide">Hide completed</button>
                <button className="btn btn-add">Add new</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps, actions)(Todo);