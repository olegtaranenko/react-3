import React, {Component}   from 'react';
import GotService           from "../../services/gotService";
import ItemDetails, {Field} from "../itemDetails";
import ErrorMessage         from "../errorMessage";
import RowBlock             from "../rowBlock";


export default class RandomCharPage extends Component {

  gotService = new GotService();

  state = {
    randomVisible:     true,
    characterDetailId: null,
    error:             false
  };

  onCharacterSelected = (id) => {
    this.setState({characterDetailId: id});
  };


  componentDidMount() {
    this.updateCharacter();
    this.timerId = setInterval(this.updateCharacter, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }


  updateCharacter = () => {
    const {emulateError} = this.props;
    const id = !emulateError ? Math.floor(Math.random() * 240 + 50) : 1e8;

    this.setState({
      characterDetailId: id
    });

  };

  componentDidCatch(error, errorInfo) {
    console.log('error');
    this.setState({
      error: true
    })
  }


  onClickRandom = () => {
    this.setState(({randomVisible}) => {
      return {
        randomVisible: !randomVisible
      }
    })
  };

  onClickRandomError = () => {
    this.props.onClickRandomError();
    return this.setState({
      failed: false
    })
  };


  render() {
    const {characterDetailId, randomVisible} = this.state;
    const {emulateError} = this.props;

    if (this.state.error) {
      return <ErrorMessage msg='Random Character: Critical error happens'/>
    }
    const button = <button className="btn btn-info" onClick={this.onClickRandom}>{randomVisible ? 'Hide' : 'Show'} Random
      Character</button>;
    const buttonEmulateError = <button className="btn btn-info" onClick={this.onClickRandomError}>Toggle Random Error
      Emulating</button>;
    const buttonsStyle = {
      display:        'flex',
      flexDirection:  'column',
      justifyContent: 'space-around',
      alignItems:     'center',
      height:         '100%',
      minHeight:      342
    };

    const buttons = <div style={buttonsStyle}>
        {button}
        {buttonEmulateError}
      </div>
    ;

    const charDetails = randomVisible ? <ItemDetails
      emulateError={emulateError}
      itemId={characterDetailId}
      getGotItem={this.gotService.getCharacter}
      renderTitle={(item) => <h3>Random Character: {item.name}</h3>}
    >
      <Field field='gender' label='Gender'/>
      <Field field='born' label='Born'/>
      <Field field='died' label='Died'/>
      <Field field='culture' label='Culture'/>
    </ItemDetails> : null;

    return (
      <RowBlock
        left={buttons}
        right={charDetails}
      />
    )
  }
}