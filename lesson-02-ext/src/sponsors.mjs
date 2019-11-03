export default class Sponsors {

  constructor(cash, eu, rus) {
    this.cash = cash;
    this.eu = eu;
    this.rus = rus;
  }

  calcCash(ownCapital = 0) {

    // делаем проверку на мусор в ownCapital
    ownCapital = parseFloat(ownCapital);
    if (isNaN(ownCapital)) {
      ownCapital = 0;
    }

    return ownCapital + this.cash.reduce((prev, value) => prev + value);
  }

  sumSponsors(...additionalSponsors) {
    return [...this.eu, ...this.rus, ...additionalSponsors];
  }
}

