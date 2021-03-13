export default class Person {
  constructor(name1, age, gender, race) {
    this.name = name1;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.lifeExpectency = 76
  }

earthAge() {
  return this.age
}
mercuryAge() {
    let mercuryAge = (this.age * .24).toFixed(2);
    return mercuryAge;
};
venusAge() {
  let venusAge = (this.age * .62).toFixed(2);
  return venusAge;
};
marsAge() {
  let marsAge = (this.age * 1.88).toFixed(2);
  return marsAge;
};
jupiterAge() {
  let jupiterAge = (this.age * 11.86).toFixed(2);
  return jupiterAge;
};

displayAges() {
  let concactedPlanets = "Mercury age is: " + mercuryAge + ". " + "Venus age is: " + venusAge + ". " + "Mars age is: " + marsAge + ". " + "Jupiter age is: " + jupiterAge + ".";
  return concactedPlanets;
}

lifeGender () {
  if (this.gender === "female") { 
    this.lifeExpectency += 5
    return this.lifeExpectency;
  } else return this.lifeExpectency;
}

lifeRace () {
  if (this.race === "asian") {
  } else if (this.race === "native american") {
    this.lifeExpectency -= 5;
    return this.lifeExpectency
  } else if (this.race === "african") {
    this.lifeExpectency -= 4;
    return this.lifeExpectency
  } else if (this.race === "caucasian") {
    this.lifeExpectency += 3;
    return this.lifeExpectency
  } else if (this.race === "hispanic") {
    this.lifeExpectency -= 5;
    return this.lifeExpectency
  } else if (this.race === "asian") {
    this.lifeExpectency -= 8;
    return this.lifeExpectency 
  } else return alert("ERROR: Please enter one of the following races: native american, asian, african, caucasian or hispanic")
}

timeLeft(mercuryAge, marsAge, venusAge, jupiterAge) {
  let timeLeftEarth = this.lifeExpectency - this.age;
  let timeLeftMercury = mercuryAge;
  let timeLeftMars = (this.lifeExpectency * .62) - marsAge;
  let timeLeftVenus = (this.lifeExpectency * 1.88) - venusAge;
  let timeLeftJupiter = (this.lifeExpectency * 11.86) - jupiterAge;
  let concactedTime = "You have: " + timeLeftEarth + " years left on Earth " + timeLeftMercury + " years left on Mercury, " + timeLeftVenus +  " years left on Venus, " + timeLeftMars + " years left on Mars, " +  timeLeftJupiter + " years left on Jupiter!";
  return timeLeftMercury;
}

};  


