import React                                     from 'react'
import {connect}                                 from 'react-redux';
import * as actions                              from "../actions";


const Counter = ({counter, dec, inc, rnd, rst}) => {
  return (
    <div className="app">
      <div className="app-container">
        <div className="counter">
          <span id="counter" className="counter__tableaux">{counter}</span>
          <div className="counter-buttons counter-buttons__main">
            <button
              onClick={inc}
              className="btn btn-inc"/>
            <button
              onClick={rnd}
              className="btn btn-rnd"/>
            <button
              onClick={dec}
              className="btn btn-dec"/>
            <button
              onClick={rst}
              className="btn btn-rst"/>
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

export default connect(mapStateToProps, actions)(Counter);