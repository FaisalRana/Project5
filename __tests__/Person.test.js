import Person from './../src/person.js';

describe('Person', () => {
let person1;
let person2;
let person3;
let person4;
let person5;
let person6;


 beforeEach(() => {
  person1 = new Person("Faisal", 34, "female", "hispanic");
  person2 = new Person("Faisal", 90, "male", "african");
  person3 = new Person("Faisal", 34, "female", "caucasian");
  person4 = new Person("Faisal", 34, "male", "native american");
  person5 = new Person("Faisal", 30, "female", "asian");
  person6 = new Person("Faisal", 34, "female", "unknown");
  
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
  test('Test should return all ages of a person on the five planets', () => {
    expect(person1.displayAges()).toEqual("Faisal, your Earth age is 34, Mercury age is: 8.16, Venus age is: 21.08, Mars age is: 63.92, Jupiter age is: 403.24");        
  });
  test('Test should return the life exptency adjusted for gender', () => {
    expect(person1.lifeGender()).toEqual(81);        
  });
  test('Test should return the life exptency adjusted for race', () => {
    person1.lifeGender();
    person2.lifeGender();
    person3.lifeGender();
    person4.lifeGender();
    person5.lifeGender();
    person6.lifeGender();
    expect(person1.lifeRace()).toEqual(76);  
    expect(person2.lifeRace()).toEqual(72);  
    expect(person3.lifeRace()).toEqual(84);      
    expect(person4.lifeRace()).toEqual(71);  
    expect(person5.lifeRace()).toEqual(89);
    expect(person6.lifeRace()).toEqual(0);  
  });
  test('Test should return the number of years left on earth and each planet, if age is greater than life expectency, return how much longer the person lived', () => {
    person1.earthAge();
    person1.lifeRace();
    person1.lifeGender();
    expect(person1.timeLeft()).toEqual(" Good news! You have: 42.00 years left on Earth, 10.08 years left on Mercury, 26.04 years left on Venus, 78.96 years left on Mars, and 498.12 years left on Jupiter.")
    expect(person2.timeLeft()).toEqual("WHOA! You have lived 14 years longer than expected on earth.");
  })
})