import Person from './../src/person.js';

describe('Person', () => {
let person1;

 beforeEach(() => {
  person1 = new Person("Faisal", 34, "male", "Asian");
  });

  test('Test should create an person object with their name, age, gender and race', () => {
    expect(person1).toEqual({"age": 34, "gender": "male", "name": "Faisal", "race": "Asian"});
  });

  test('Test should return the Earth Age of a person', () => {
    expect(person1.earthAge()).toEqual(34);        
  });

  test('Test should return the Age for Mercury, Mars, Venus and Juputer', () => {
    expect(person1.planetsAge()).toEqual("Mercury age is: 8.16. Venus age is: 21.08. Mars age is: 63.92. Jupiter age is: 403.24.");        
  });
});