import Person from './../src/person.js';

describe('Person', () => {
let person1;

 beforeEach(() => {
  person1 = new Person("Faisal", 34, "male", "hispanic");
  });

  test('Test should create an person object with their name, age, gender and race', () => {
    expect(person1).toEqual({"age": 34, "gender": "male", "lifeExpectency": 76, "name": "Faisal", "race": "hispanic"});
  });

  test('Test should return the Earth Age of a person', () => {
    expect(person1.earthAge()).toEqual(34);        
  });
  test('Test should return the Mercury Age of a person', () => {
    expect(person1.mercuryAge()).toEqual("8.16");        
  });
  test('Test should return the Mars Age o"f a person', () => {
    expect(person1.marsAge()).toEqual("63.92");        
  });
  test('Test should return the Jupiter Age of a person', () => {
    expect(person1.venusAge()).toEqual("21.08");        
  });

  test('Test should return the Age for Mercury, Mars, Venus and Juputer', () => {
    expect(person1.jupiterAge()).toEqual("403.24");        
  });
  test('Test should return the life exptency adjusted for gender', () => {
    expect(person1.lifeGender()).toEqual(81);        
  });
  test('Test should return the life exptency adjusted for race', () => {
    expect(person1.lifeRace()).toEqual(71);        
  });

  test('Test should return the number of years left on earth and each planet', () => {
    expect(person1.timeLeft()).toEqual("You have: NaN years left on Earth NaN years left on Mercury, NaN years left on Venus, NaN years left on Mars, NaN years left on Jupiter!");        
  });

});