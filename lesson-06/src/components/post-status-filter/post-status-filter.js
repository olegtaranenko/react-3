import React, {Component} from 'react';
// import { Button } from 'reactstrap';


export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'Все'},
      {name: 'like', label: 'Понравилось'}
    ]
  }

  render() {
    const {filter, onFilterSelect} = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const active = name === filter;
      const btnCls = `btn ${(active ? 'btn-info' : 'btn-outline-secondary')}`;
      return (
        <button
          key={name}
          type="button"
          className={btnCls}
          onClick={() => onFilterSelect(name)}>
          {label}
        </button>
      )
    });
    return (
      <div className='btn-group'>
        {buttons}
      </div>
    )
  }
};