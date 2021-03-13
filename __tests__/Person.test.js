import Person from './../src/person.js';

describe('Person', () => {
let person1;
let lifeExpetency;

 beforeEach(() => {
  person1 = new Person("Faisal", 34, "male", "hispanic");
  });

  test('Test should create an person object with their name, age, gender and race', () => {
    expect(person1).toEqual({"age": 34, "gender": "male", "lifeExpectency": 76, "name": "Faisal", "race": "hispanic"});
  });

  test('Test should return the Earth Age of a person', () => {
    expect(person1.earthAge()).toEqual(34);        
  });

  test('Test should return the Age for Mercury, Mars, Venus and Juputer', () => {
    expect(person1.planetsAge()).toEqual("Mercury age is: 8.16. Venus age is: 21.08. Mars age is: 63.92. Jupiter age is: 403.24.");        
  });
  test('Test should return the life exptency adjusted for gender', () => {
    expect(person1.lifeGender()).toEqual(81);        
  });
  test('Test should return the life exptency adjusted for race', () => {
    expect(person1.lifeRace()).toEqual(71);        
  });

});