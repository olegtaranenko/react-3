import Employers from "./employers.mjs";
import Sponsors from "./sponsors.mjs";

const employers = new Employers(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
const {cash, eu, rus} = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
const sponsors = new Sponsors(cash, eu, rus);


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
