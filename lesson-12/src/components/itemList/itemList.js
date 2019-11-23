import React, {useEffect, useState} from 'react';
import styled                       from 'styled-components';
import Spinner                      from "../spinner";
import ErrorMessage                 from "../errorMessage";

const ItemListElement = styled.li`
  cursor: pointer;
`;

const ItemListBody = styled.ul`
  background-color: #ffffff;
`;

function ItemList({getGotList, onItemSelected, renderItem}) {

  const [itemList, updateList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    getGotList()
    .then(onListLoaded)
    .catch(onError);
  }, []);

  const onListLoaded = (data) => {
    updateList(data);
    setLoading(false);
    setFailed(false);
  };

  const onError = () => {
    setLoading(false);
    setFailed(true);
  };


  const renderItems = (itemList) => {

    return itemList.map((item) => {
      const {key} = item;
      const label = renderItem(item);

      return <ItemListElement
        key={key}
        className="list-group-item"
        onClick={() => onItemSelected(key)}>
        {label}
      </ItemListElement>
    });
  };

  const errorState = (itemList && !itemList.length) || failed;
  const spinner = loading ? <Spinner/> : null;
  const errorMessage = (!loading && errorState) ? ErrorMessage('Items can\'t be not loaded') : null;
  const elements = (!loading && !errorState) ? renderItems(itemList) : null;

  return (
    <ItemListBody className="item-list list-group rounded">
      {spinner}
      {errorMessage}
      {elements}
    </ItemListBody>
  );
}

export default ItemList;