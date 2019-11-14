import React, {Component}   from 'react';
import styled               from 'styled-components';
import GotService           from "../../services/gotService";
import {Col, Row}           from "reactstrap";
import ItemList             from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
import ErrorMessage         from "../errorMessage";

const CharDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SelectMissed = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`;


export default class HousesPage extends Component {

  gotService = new GotService();

  state = {
    houseDetailId: null,
    error:        false
  };

  onHouseSelected = (id) => {
    this.setState({houseDetailId: id});
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }


  render() {

    const {houseDetailId, error} = this.state;
    const {emulateError} = this.props;

    if (error) {
      return <ErrorMessage msg='Critical error happens'/>
    }


    return (
      <Row>
        <Col md='6'>
          <ItemList
            emulateError={emulateError}
            getGotList={this.gotService.getAllHouses}
            onItemSelected={this.onHouseSelected}
            renderItem={({name}) => <span>{name}</span>}
          />
        </Col>
        <Col md='6'>
          <ItemDetails
            emulateError={emulateError}
            itemId={houseDetailId}
            getGotItem={this.gotService.getHouse}
          >
            <Field field='name' label='Name'/>
            <Field field='region' label='Region'/>
            <Field field='words' label='Words'/>
            <Field field='titles' label='Titles'/>
            <Field field='overlord' label='Overlord'/>
            <Field field='ancestralWeapons' label='Ancestral Weapons'/>
          </ItemDetails>
        </Col>
      </Row>
    );
  }
}
