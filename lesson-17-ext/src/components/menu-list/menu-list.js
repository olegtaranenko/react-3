import React, {Component}                                           from 'react';
import MenuListItem                                                 from '../menu-list-item';
import {connect}                                                    from 'react-redux';
import WithRestoService                                             from "../hoc";
import {addedToCart, menuLoaded, menuRequested, restoServiceFailed} from "../../actions";
import Spinner                                                      from "../spinner";
import Error                                                        from "../error";


import './menu-list.scss';

class MenuList extends Component {

  componentDidMount() {
    console.log('componentDidMount...');
    this.props.menuRequested();

    const {RestoService} = this.props;

    RestoService.getMenuItems()
    .then(res => this.props.menuLoaded(res))
    .catch(err => this.props.restoServiceFailed(err));
  }

  render() {
    const {menuItems, loading, failed, addedToCart} = this.props;
    if (failed) {
      return <Error exceptionOrMessage={failed}/>;
    }

    if (loading) {
      return <Spinner/>
    }

    return (
      <ul className="menu__list">
        {
          menuItems.map(menuItem => {
            return <MenuListItem
              onAddToCart={() => addedToCart(menuItem.id)}
              key={menuItem.id}
              menuItem={menuItem}
            />
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuItems: state.menu,
    loading:   state.loading,
    failed:    state.failed
  }
};

const mapDispatchToProps = {
  menuLoaded,
  menuRequested,
  restoServiceFailed,
  addedToCart
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
