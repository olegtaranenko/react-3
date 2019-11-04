// Массивы равно как и объекты обычно определяются константами, поскольку их содержимое можно менять даже в этом случае

export default class Employers {
  constructor(employers) {
    this.employers = employers
  }

  getNames() {
    return employers.filter(name => name).map(name => name.toLowerCase().trim());
  }
}
