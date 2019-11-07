import Employers from "./employers.mjs";
import Sponsors from "./sponsors.mjs";

const initEmployers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
const initSponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

const employers = new Employers(initEmployers);
const sponsors = new Sponsors(initSponsors);


class Business {
  constructor({
                owner: owner,
                director: director = 'Victor',
                capital: capital,
                employers: employers,
                sponsors: sponsors
              } = {}) {
    this.owner = owner;
    this.director = director;
    this.capital = capital;
    this.employers = employers;
    this.sponsors = sponsors;
  }

  getInfo() {

    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${sponsors.calcCash(this.capital)}. 
And our employers: ${this.employers}
And we have a sponsors: ${sponsors.sumSponsors('unexpected sponsor')}
Note. Be careful with ${sponsors.unsecured()}. It's a huge risk.`);
  }
}

const myBusiness = new Business({
  owner: 'Sam',
  employers: employers,
  sponsors: sponsors
});

myBusiness.getInfo();
