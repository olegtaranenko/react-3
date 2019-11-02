import {employersNames} from "./employers";
import {sponsors} from "./sponsors";


class Business {

  get owner() {
    return this._owner;
  }

  set owner(value) {
    this._owner = value;
  }

  get director() {
    return this._director;
  }

  set director(value) {
    this._director = value || 'Victor';
  }

  get capital() {
    return this._capital;
  }

  set capital(value) {
    this._capital = value;
  }

  get employers() {
    return this._employers;
  }

  set employers(value) {
    this._employers = value;
  }

  constructor(owner, director, capital, employers) {
    this._owner = owner;
    this._director = director;
    this._capital = capital;
    this._employers = employers;
  }

  getInfo() {
    // из-за того, что null !== undefined просто установить значение по умолчанию - мало
    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${sponsors.calcCash(this.capital)}. 
And our employers: ${this.employers}
And we have a sponsors: ${sponsors.sumSponsors()}
Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
  }
}

const myBusiness = new Business('Sam', null, null, employersNames);
myBusiness.getInfo();
