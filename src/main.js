import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './person.js';

$(document).ready(function() {
  $('#space-age-form').submit(function(event) {
    event.preventDefault();
    let person1;
    let inputName = $('#inputName').val();
    let inputAge = parseInt($('#inputAge').val());
    let inputGender = ($('#inputGender').val()).toLowerCase();
    let inputRace = ($('#inputRace').val()).toLowerCase();
    person1 = new Person(inputName, inputAge, inputGender, inputRace);
    person1.earthAge();
    person1.lifeRace();
    person1.lifeGender();
    let response1 = `${person1.timeLeft()}`;
    let response2 = `${person1.displayAges()}`;
    if (person1.lifeExpectency !== 0) {
    $('#response').append("<p>" + response2 + "</br>" + response1);
    }
  });
});

