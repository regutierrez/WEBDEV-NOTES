const findTheOldest = function(personsObject) {
    let ageArray = [];
    let highestAge = 0;
    personsObject.forEach(person => {
        let age = 0;
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = new Date().getFullYear() - person.yearOfBirth;
        }
        person.age = age;

        highestAge = personsObject.reduce((max,obj) => {
            return (obj.age > max.age) ? obj : max;
        }, { age: -Infinity });

    });
    return highestAge;
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
