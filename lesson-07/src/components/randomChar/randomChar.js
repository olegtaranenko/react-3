import React, {Component} from 'react';
import styled from 'styled-components';

const RandomBlock=styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const TermSpan=styled.span`
  font-weight: bold;
`;


export default class RandomChar extends Component {

  render() {

    return (
      <RandomBlock className="rounded">
        <h4>Random Character: John</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <TermSpan>Gender</TermSpan>
            <span>male</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <TermSpan>Born</TermSpan>
            <span>11.03.1039</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <TermSpan>Died</TermSpan>
            <span>13.09.1089</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <TermSpan>Culture</TermSpan>
            <span>Anarchy</span>
          </li>
        </ul>
      </RandomBlock>
    );
  }
}
