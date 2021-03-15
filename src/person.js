export default class Person {
  constructor(name1, age, gender, race) {
    this.name = name1;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.lifeExpectency = 76;
  }
  earthAge() {
    return this.age;
  }
  mercuryAge() {
    let mercuryAge = (this.age * .24).toFixed(2);
    return mercuryAge;
  }
  venusAge() {
    let venusAge = (this.age * .62).toFixed(2);
    return venusAge;
  }
  marsAge() {
    let marsAge = (this.age * 1.88).toFixed(2);
    return marsAge;
  }
  jupiterAge() {
    let jupiterAge = (this.age * 11.86).toFixed(2);
    return jupiterAge;
  }
  displayAges() {
    let mercuryAge = this.mercuryAge();
    let marsAge = this.marsAge();
    let venusAge = this.venusAge();
    let jupiterAge = this.jupiterAge();
    let concactedPlanets = `Your Earth age is ${this.age}, Mercury age is: ${mercuryAge}, Venus age is: ${venusAge}, Mars age is: ${marsAge}, Jupiter age is: ${jupiterAge}`;
    return concactedPlanets;
  }
  lifeGender () {
    if (this.gender === "female") { 
      this.lifeExpectency += 5;
      return this.lifeExpectency;
    } else return this.lifeExpectency;
  }
  lifeRace () {
    if (this.race === "asian" || this.race === "pakistani") { 
      this.lifeExpectency += 8;
      return this.lifeExpectency;
    } else if (this.race === "native american" || this.race === "american indian") {
      this.lifeExpectency -= 5;
      return this.lifeExpectency;   
    } else if (this.race === this.race === "african american" || this.race === "black" || this.race === "african") {
      this.lifeExpectency -= 4;
      return this.lifeExpectency;
    } else if (this.race === "caucasian" || this.race === "white" || this.race ==="european") {
      this.lifeExpectency += 3;
      return this.lifeExpectency;
    } else if (this.race === "latin american" || this.race === "hispanic" || this.race === "latina"|| this.race === "latino") {
      this.lifeExpectency -= 5;
      return this.lifeExpectency;
    }   else return alert("ERROR: Please enter one of the following races: native american, asian, african, caucasian or hispanic");
  }
  timeLeft() {
    let mercuryAge = this.mercuryAge();
    let marsAge = this.marsAge();
    let venusAge = this.venusAge();
    let jupiterAge = this.jupiterAge();
    let timeLeftEarth = (this.lifeExpectency - this.age).toFixed(2);
    let timeLeftMercury = ((this.lifeExpectency * .24) - mercuryAge).toFixed(2);
    let timeLeftMars = ((this.lifeExpectency * 1.88) - marsAge).toFixed(2);
    let timeLeftVenus = ( (this.lifeExpectency * .62) - venusAge).toFixed(2);
    let timeLeftJupiter = ((this.lifeExpectency * 11.86) - jupiterAge).toFixed(2);
    if (timeLeftEarth < 0) {
      let concactedTime = `You have lived ${Math.abs(timeLeftEarth)} longer than expected on earth`;
      return concactedTime;
    } else if (timeLeftEarth > 0) {
      let concactedTime = `You have: ${timeLeftEarth} years left on Earth, ${timeLeftMercury} years left on Mercury, ${timeLeftVenus} years left on Venus, ${timeLeftMars} years left on Mars, ${timeLeftJupiter} years left on Jupiter.`;
      return concactedTime;
    }
  }
}