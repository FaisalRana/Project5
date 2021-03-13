import Person from './../src/person.js';

describe('Person', () => {
let person1;
person1 = new Person("Faisal", 34, "male", "Asian");
  test('Test should create an person object with their name, age, gender and race', () => {
    expect(person1).toEqual();
  });
});