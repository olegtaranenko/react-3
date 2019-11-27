import React, {Component} from 'react'
import DbProvider         from "../../services/dbProvider";
import WareCard           from "../wareCard";


export default class SectionBody extends Component {
  render() {
    const db = new DbProvider();
    const {tab} = this.props;
    const items=db.getSection(tab);
    return (
      <div>
        {
          items.map((item, index) => <WareCard item={item} key={index}/>)
        }
      </div>
    )
  }
};
