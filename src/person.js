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
    let concactedPlanets = "Mercury age is: " + mercuryAge + ". " + "Venus age is: " + venusAge + ". " + "Mars age is: " + marsAge + ". " + "Jupiter age is: " + jupiterAge + ".";
    return concactedPlanets;
  };

lifeGender () {
  let lifeExpectency = 76
  if (this.gender = "female") { 
    lifeExpectency += 5
    return lifeExpectency;
  } else return lifeExpetency
}

lifeRace () {
  if (this.race === "asian") {
  } else if (this.race === "native american") {
    lifeExpectancy -= 5;
    return lifeExptency
  } else if (this.race === "african") {
    lifeExpectancy -= 4;
    return lifeExptency
  } else if (this.race === "caucasian") {
    lifeExpectancy += 3;
    return lifeExptency
  } else if (this.race === "hispanic") {
    lifeExpectancy -= 5;
    return lifeExptency
  } else if (this.race === "asian") {
    lifeExpectancy -= 8;
    return lifeExptency
  } else return alert("ERROR: Please enter one of the following races: native american, asian, african, caucasian or hispanic")
}
timeLeft() {
  
}

};  


