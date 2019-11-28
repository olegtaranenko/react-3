import dbJson from '../api/db.json';

// console.log(dbJson);

export default class DbProvider {
  constructor() {
    this.db = dbJson;
  }

  getDb = () => {
    return this.db;
  };

  getSection = (name) => {
    let section = this.db[name];
    if (!section) {
      throw Error (`Wrong section ${name}`);
    }
    return section;
  };

/*
  getBestsellers = () => {
    const {bestsellers} = this.db;
    return bestsellers;
  };

  getGoods = () => {
    const {goods} = this.db;
    return goods;
  };

  getCoffee = () => {
    const {coffee} = this.db;
    return coffee;
  };
*/
}