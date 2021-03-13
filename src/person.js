export default class Person {
  constructor(name1, age, gender, race) {
    this.name = name1;
    this.age = age;
    this.gender = gender;
    this.race = race;
  }

earthAge() {
  return this.age
}

planetsAge() {
    let mercuryAge = (this.age * .24).toFixed(2);
    let venusAge = (this.age * .62).toFixed(2);
    let marsAge = (this.age * 1.88).toFixed(2);
    let jupiterAge = (this.age * 11.86).toFixed(2);
    let concactedPlants = "Mercury age is: " + mercuryAge + ". " + "Venus age is: " + venusAge + ". " + "Mars age is: " + marsAge + ". " + "Jupiter age is: " + jupiterAge + ".";
    return concactedPlants;
  };
};  
