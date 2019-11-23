import React, {useEffect, useState} from 'react';
import GotService                   from "../../services/gotService";
import ItemDetails, {Field}         from "../itemDetails";
import ErrorMessage                 from "../errorMessage";
import RowBlock                     from "../rowBlock";


function RandomCharPage({emulateError, onClickRandomError}) {

  const gotService = new GotService();
  const [randomVisible, setRandomVisible] = useState(true);
  const [characterDetailId, setCharacterDetailId] = useState(null);
  const [error, setError] = useState(false);

  let timerId;

  useEffect(() => {
    updateCharacter();
    timerId = setInterval(updateCharacter, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, []);


  const updateCharacter = () => {
    const id = !emulateError ? Math.floor(Math.random() * 240 + 50) : 1e8;
    setCharacterDetailId(id);
  };

/*
  componentDidCatch(error, errorInfo)
  {
    console.log('error');
    this.setState({
      error: true
    })
  }
*/


  const onClickRandom = () => {
    setRandomVisible(!randomVisible);
  };

  const onClickRandomErrorHandler = () => {
    setError(!error);
    onClickRandomError();
  };


  if (error) {
    return <ErrorMessage msg='Random Character: Critical error happens'/>
  }
  const button = <button className="btn btn-info" onClick={onClickRandom}>{randomVisible ? 'Hide' : 'Show'} Random
    Character</button>;
  const buttonEmulateError = <button className="btn btn-info" onClick={onClickRandomErrorHandler}>Toggle Random Error
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
    getGotItem={gotService.getCharacter}
    renderTitle={(item) => <h3>Random Character: {item.name}</h3>}
    missedMessage=' '
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

export default RandomCharPage;