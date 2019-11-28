import React, {Component} from 'react';
import Header             from "../header";
import SectionBody        from "../sectionBody";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.tabs = ['bestsellers', 'coffee', 'goods'];

    this.state = {
      activeTab: 0
    };
  }



  onTabClick = (id) => {
    this.setState({
      activeTab: id
    })
  };

  render() {
    const {activeTab} = this.state;
    return (
      <>
      <Header activeTab={activeTab} tabs={this.tabs} onTabClick={this.onTabClick}/>
      <SectionBody tab={this.tabs[activeTab]}/>
      </>
    );
  }
}
