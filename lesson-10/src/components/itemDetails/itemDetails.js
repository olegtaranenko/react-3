import React, {Component} from 'react';
import styled             from 'styled-components';
import GotService         from "../../services/gotService";
import Spinner            from "../spinner";

const ItemDetailsBlock = styled.div`
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

export default class ItemDetails extends Component {

  state = {
    item: null,
    loading:   true
  };

  componentDidCatch(error, errorInfo) {
    console.log('error');
    this.setState({
      error: true
    })
  }


  componentDidMount() {
    this.updateItem();
  }


  updateItem = () => {
    const {itemId} = this.props;

    if (itemId) {
      this.props.getGotItem(itemId)
      .then(this.onItemLoaded)
      .catch(this.onLoadError);
    }
    // this.foo.bar = 0;
  };


  onItemLoaded = (item) => {
    this.setState({
      item,
      loading: false
    });
  };


  onLoadError = () => {
    this.setState({
      failed:  true,
      loading: false
    });
  };


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.itemId !== this.props.itemId) {
      this.setState({loading: true});
      this.updateItem();
    }
  }


  render() {
    const {item, loading} = this.state;
    if (!item) {
      return <SelectMissed>Please select a item</SelectMissed>
    }

    const spinner = loading ? <Spinner/> : null;
    const content = !loading ?
      <>
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, child => {
              return React.cloneElement(child, {item});
            })
          }

        </ul>
      </> : null;

    return (
      <ItemDetailsBlock className="rounded">
        {spinner}
        {content}
      </ItemDetailsBlock>
    );
  }
}