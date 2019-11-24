import React, {Component} from 'react';
import MyContext          from "./context";

export default class Name extends Component {
  render() {
    return (
      <div className='name'>
        My name is {this.context.name}, age {this.context.age}
      </div>
    )
  }
};

Name.contextType = MyContext;