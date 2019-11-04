import {employersNames as employers} from "./employers";
import {sponsors, unsecuredSponsor} from "./sponsors";

class Business {

  constructor({
    owner: owner,
    director: director = 'Victor',
    capital: capital,
    employers: employers,
    unsecuredSponsor: unsecuredSponsor
  } = {}) {
    this.owner = owner;
    this.director = director;
    this.capital = capital;
    this.employers = employers;
    this.unsecuredSponsor = unsecuredSponsor;
  }

  getInfo(unsecuredSponsor) {

    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${sponsors.calcCash(this.capital)}. 
And our employers: ${this.employers}
And we have a sponsors: ${sponsors.sumSponsors('unexpected sponsor')}
${this.unsecuredSponsor ? `Note. Be careful with ${unsecuredSponsor}. It's a huge risk.` : ''}`);
  }
}

const myBusiness = new Business({
  owner: 'Sam',
  employers: employers,
  unsecuredSponsor: unsecuredSponsor
});

myBusiness.getInfo();
