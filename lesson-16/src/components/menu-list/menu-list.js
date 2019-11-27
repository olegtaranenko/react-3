import React, {Component} from 'react';
import MenuListItem       from '../menu-list-item';
import {connect}          from 'react-redux';
import WithRestoService   from "../hoc";
import * as actions from "../../actions";
import Spinner from "../spinner";
import Error   from "../error";


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
    const {menuItems, loading, failed} = this.props;
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
            return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    failed: state.failed
  }
};

const mapDispatchToProps = actions;

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
