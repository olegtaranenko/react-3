import {employersNames as employers} from "./employers";
import {sponsors} from "./sponsors";

class Business {

  constructor({
                owner: owner,
                director: director = 'Victor',
                capital: capital,
                employers: employers
              } = {}) {
    this.owner = owner;
    this.director = director;
    this.capital = capital;
    this.employers = employers;
  }

  getInfo(riskedSponsor) {

    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${sponsors.calcCash(this.capital)}. 
And our employers: ${this.employers}
And we have a sponsors: ${sponsors.sumSponsors('unexpected sponsor')}
Note. Be careful with ${riskedSponsor}. It's a huge risk.`);
  }
}

const {
  eu: [riskedSponsor]
} = sponsors;

const myBusiness = new Business({owner: 'Sam', employers: employers});
myBusiness.getInfo(riskedSponsor);