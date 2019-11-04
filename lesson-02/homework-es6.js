// Массивы равно как и объекты обычно определяются константами, поскольку их содержимое можно менять даже в этом случае
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(name => name).map(name => name.toLowerCase().trim());

// console.log(employersNames);

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
  calcCash(ownCapital = 0) {

    // делаем проверку на мусор в ownCapital
    ownCapital = parseFloat(ownCapital);
    if (isNaN(ownCapital)) {
      ownCapital = 0;
    }

    return ownCapital + this.cash.reduce((prev, value) => prev + value)
  },
  sumSponsors(...additionalSponsors) {
    return [...this.eu, ...this.rus, ...additionalSponsors];
  }
};


((owner, director, capital, employers) => {
  // из-за того, что null !== undefined просто установить значение по умолчанию - мало
  director = director || 'Victor';
  const {
    eu: [unsecuredSponsor]
  } = sponsors;

  console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${sponsors.calcCash(capital)}. 
And our employers: ${employers}
And we have a sponsors: ${sponsors.sumSponsors('unexpected sponsor')}
Note. Be careful with ${unsecuredSponsor}. It's a huge risk.`);
})('Sam', null, null, employersNames);