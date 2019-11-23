import React, {useEffect, useState} from 'react';
import styled                       from 'styled-components';
import Spinner                      from "../spinner";
import ErrorMessage                 from "../errorMessage";

const ItemDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
  h3 {
    font-size: 22px;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SelectMissed = styled.div`
    color: #fff;
    text-align: center;
    font-size: 20px;
`;

const TermSpan = styled.span`
  font-weight: bold;
`;


const Field = ({item, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <TermSpan>{label}</TermSpan>
      <span>{item[field]}</span>
    </li>
  )
};

export {
  Field
}

function ItemDetails({itemId, getGotItem, onLoadErrorCallback, missedMessage, renderTitle, children, blockStylingCss}) {


  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  /*
    componentDidCatch(error, errorInfo) {
      console.log('error');
      this.setState({
        error: true
      })
    }
  */


  useEffect(() => {
    setLoading(true);
    updateItem();
  }, [itemId]);


  const updateItem = () => {

    if (itemId) {
      getGotItem(itemId)
      .then(onItemLoaded)
      .catch(onLoadError);
    }
    // this.foo.bar = 0;
  };


  const onItemLoaded = (item) => {
    setItem(item);
    setFailed(  false);
    setLoading( false);
  };


  const onLoadError = (e) => {
    if (onLoadErrorCallback) {
      onLoadErrorCallback.call(this, e);
    }

    setFailed(  true);
    setLoading( false);
  };


  // const {item, loading, failed} = this.state;
  if (!item) {
    const missedMessage = missedMessage || <>Please select an item</>;
    return <SelectMissed><span>{missedMessage}</span></SelectMissed>
  }

  const spinner = loading ? <Spinner/> : null;
  const error = (!loading && failed) ? <ErrorMessage/> : null;
  renderTitle = renderTitle || ((item) => <h4>{item.name}</h4>);
  const content = (!loading && !failed) ?
    <>
      {renderTitle(item)}
      <ul className="list-group list-group-flush">
        {
          React.Children.map(children, child => {
            return React.cloneElement(child, {item});
          })
        }

      </ul>
    </> : null;

  const itemStyleClass = "rounded" + (blockStylingCss ? ' ' + blockStylingCss : '');

  return (
    <ItemDetailsBlock className={`${itemStyleClass}`}>
      {spinner}
      {error}
      {content}
    </ItemDetailsBlock>
  );
}

export default ItemDetails;