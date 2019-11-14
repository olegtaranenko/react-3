import React, {Component}   from 'react';
import GotService           from "../../services/gotService";
import ItemList             from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
import ErrorMessage         from "../errorMessage";
import RowBlock             from "../rowBlock";

export default class HousesPage extends Component {

  gotService = new GotService();

  state = {
    houseDetailId: null,
    error:         false
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
      return <ErrorMessage msg='Houses: Critical error happens'/>
    }

    const left = <ItemList
      emulateError={emulateError}
      getGotList={this.gotService.getAllHouses}
      onItemSelected={this.onHouseSelected}
      renderItem={({name}) => <span>{name}</span>}
    />;

    const right = <ItemDetails
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
    </ItemDetails>;

    return (
      <RowBlock
        left={left}
        right={right}
      />
    );
  }
}
