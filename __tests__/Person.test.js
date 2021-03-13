import Person from './../src/person.js';

describe('Person', () => {
let person1;

 beforeEach(() => {
  person1 = new Person("Faisal", 34, "female", "hispanic");
  });

  test('Test should create an person object with their name, age, gender and race', () => {
    expect(person1).toEqual({"age": 34, "gender": "female", "lifeExpectency": 76, "name": "Faisal", "race": "hispanic"});
  });

  test('Test should return the Earth age of a person', () => {
    expect(person1.earthAge()).toEqual(34);        
  });
  test('Test should return the Mercury age of a person', () => {
    expect(person1.mercuryAge()).toEqual("8.16");        
  });
  test('Test should return the Mars age of a person', () => {
    expect(person1.marsAge()).toEqual("63.92");        
  });
  test('Test should return the Venus age of a person', () => {
    expect(person1.venusAge()).toEqual("21.08");        
  });
  test('Test should return the Age for Jupiter age of a person', () => {
    expect(person1.jupiterAge()).toEqual("403.24");        
  });
  test('Test should return all age of a person on the five planets', () => {
    expect(person1.displayAges()).toEqual(34);        
  });
  test('Test should return the life exptency adjusted for gender', () => {
    expect(person1.lifeGender()).toEqual(81);        
  });
  test('Test should return the life exptency adjusted for race', () => {
    person1.lifeGender();
    expect(person1.lifeRace()).toEqual(76);        
  });
  test('Test should return the number of years left on earth and each planet', () => {
    person1.earthAge();
    person1.lifeRace();
    person1.lifeGender();
    expect(person1.timeLeft()).toEqual("You have: 42 years left on Earth, 67.84 years left on Mercury, 26.04 years left on Venus, 78.96 years left on Mars, 498.12 years left on Jupiter.")
  });
})