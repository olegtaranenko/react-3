// Массивы равно как и объекты обычно определяются константами, поскольку их содержимое можно менять даже в этом случае
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(name => name).map(name => name.toLowerCase().trim());

export {employersNames};
