import React, {Component} from 'react';
import styled             from 'styled-components';
import Spinner            from "../spinner";
import ErrorMessage       from "../errorMessage";

const ItemDetailsBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
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

export default class ItemDetails extends Component {

  state = {
    item:    null,
    loading: true
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
      failed:  false,
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
    const {item, loading, failed} = this.state;
    if (!item) {
      const missedMessage = this.props.missedMessage || <>Please select an item</>;
      return <SelectMissed><span>{missedMessage}</span></SelectMissed>
    }

    const spinner = loading ? <Spinner/> : null;
    const error = (!loading && failed) ? <ErrorMessage/> : null;
    const renderTitle = this.props.renderTitle || ((item) => <h4>{item.name}</h4>);
    const content = (!loading && !failed) ?
      <>
        {renderTitle(item)}
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
        {error}
        {content}
      </ItemDetailsBlock>
    );
  }
}
