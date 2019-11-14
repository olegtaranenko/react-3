import React, {Component}   from 'react';
import GotService           from "../../services/gotService";
import ItemList             from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
import ErrorMessage         from "../errorMessage";
import RowBlock             from "../rowBlock";


export default class CharactersPage extends Component {

  gotService = new GotService();

  state = {
    characterDetailId: null,
    error:             false
  };

  onCharacterSelected = (id) => {
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
      return <ErrorMessage msg='Characters: Critical error happens'/>
    }

    const characters = <ItemList
      emulateError={emulateError}
      getGotList={this.gotService.getAllCharacters}
      onItemSelected={this.onCharacterSelected}
      renderItem={({name, gender}) => `${name} (${gender})`}
    />;

    const charDetails = <ItemDetails
      emulateError={emulateError}
      itemId={characterDetailId}
      getGotItem={this.gotService.getCharacter}
      missedMessage='Выберите, пожалуйста, персонажа из списка'
    >
      <Field field='gender' label='Gender'/>
      <Field field='born' label='Born'/>
      <Field field='died' label='Died'/>
      <Field field='culture' label='Culture'/>
    </ItemDetails>;

    return (
      <RowBlock
        left={characters}
        right={charDetails}
      />
    )
  }
}