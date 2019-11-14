import React, {Component}   from 'react';
import styled               from 'styled-components';
import GotService           from "../../services/gotService";
import ItemList             from "../itemList";
import CharDetails, {Field} from "../charDetails";
import ErrorMessage         from "../errorMessage";
import RowBlock             from "../rowBlock";

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


export default class CharacterPage extends Component {

  gotService = new GotService();

  state = {
    characterDetailId: null,
    error:             false
  };

  onItemSelected = (id) => {
    this.setState({characterDetailId: id});
  };

  componentDidCatch(error, errorInfo) {
    console.log('error');
    this.setState({
      error: true
    })
  }


  render() {

    const {characterDetailId} = this.state;
    const {emulateError} = this.props;

    if (this.state.error) {
      return <ErrorMessage msg='Critical error happens'/>
    }

    const characters = <ItemList
      emulateError={emulateError}
      getData={this.gotService.getAllCharacters}
      onItemSelected={this.onItemSelected}
      renderItem={({name, gender}) => `${name} (${gender})`}
    />;

    const charDetails = <CharDetails
      emulateError={emulateError}
      characterId={characterDetailId}>
      <Field field='gender' label='Gender'/>
      <Field field='born' label='Born'/>
      <Field field='died' label='Died'/>
      <Field field='culture' label='Culture'/>
    </CharDetails>;

    return (
      <RowBlock
        left={characters}
        right={charDetails}
      />
    )
  }
}