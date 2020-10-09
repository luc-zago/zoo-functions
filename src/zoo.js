/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals, employees, hours, prices } = data;
const [lions, tigers, bears, penguins, otters, frogs, snakes, elephants, giraffes] = animals;

function animalsByIds(...ids) {
  // seu código aqui
  const { animals } = data;
  const result = [];
  ids.forEach((idCode) => {
    const search = animals.find((id, index) => animals[index].id === idCode);
    if (search !== undefined) {
      result.push(search);
    }
    return result;
  })
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const { animals } = data;
  const searchAnimal = animals.find((name, index) => animals[index].name === animal);
  const { residents } = searchAnimal;
  const result = residents.every((resident) => resident.age > age);
  return result;
}

function employeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  let result = {};
  let search = employees.find((firstName, index) => employees[index].firstName === employeeName);
    if (search === undefined) {
      search = employees.find((lastName, index) => employees[index].lastName === employeeName);
      if (search !== undefined) {
        result = search;
      }
    } else {
      result = search;
    }
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { managers, responsibleFor } = associatedWith;
  personalInfo.managers = managers;
  personalInfo.responsibleFor = responsibleFor;
  return personalInfo;
}

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  const result = employees.some((employee) => {
    const managersArray = employee.managers;
    if (managersArray.some((idCode) => idCode === id) === true) {
      return true;
    }
  })
  return result;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const { employees } = data;
  const newEmployee = {};
  newEmployee.id = id;
  newEmployee.firstName = firstName;
  newEmployee.lastName = lastName;
  newEmployee.managers = managers;
  newEmployee.responsibleFor = responsibleFor;
  return employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
