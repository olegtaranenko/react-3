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
  sumSponsors() {
    return [...this.eu, ...this.rus, 'unexpected sponsor'];
  }
};

export {sponsors}
