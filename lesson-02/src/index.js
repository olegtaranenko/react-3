import {employersNames as employers} from "./employers";
import {sponsors} from "./sponsors";

class Business {

  get owner() {
    return this._owner;
  }

  set owner(value) {
    this._owner = value;
  }

  get director() {
    return this._director || 'Victor';
  }

  set director(value) {
    this._director = value;
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

  constructor(owner, director = 'Victor', capital, employers) {
    this._owner = owner;
    this._director = director;
    this._capital = capital;
    this._employers = employers;
  }

  getInfo() {
    const {
      eu: [riskedSponsor]
    } = sponsors;

    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${sponsors.calcCash(this.capital)}. 
And our employers: ${this.employers}
And we have a sponsors: ${sponsors.sumSponsors('unexpected sponsor')}
Note. Be careful with ${riskedSponsor}. It's a huge risk.`);
  }
}

const myBusiness = new Business('Sam', null, null, employers);
myBusiness.getInfo();