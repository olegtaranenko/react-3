

export default class Generator {

  constructor({maxValue, prefix}) {

    this.maxValue = maxValue;
    this.alreadyUsed = {};
    this.prefix = prefix;

  }

  get() {
    let done, ret;
    do {
      ret = Math.floor((Math.random() * this.maxValue));

      if (this.prefix) {
        ret = this.prefix + ret;
      }
      done = this.alreadyUsed[ret];
    } while (done);

    return ret;
  }
};
