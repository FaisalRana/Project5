import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './person';
//import //Object from './Location.js';

$(document).ready(function() {
  $('#space-age-form').submit(function(event) {
    event.preventDefault();
    // let inputName = parseInt($('#inputName').val());
    // let inputAge = parseInt($('#inputAge').val());
    // let inputGender = parseInt($('#inputGender').val());
    // let inputRace = parseInt($('#inputRace').val());
    // let person = new Person(inputName, inputAge, inputGender, inputRace)
    // let response = person.earthAge() 
    $('#response').append("<p>" + response + "</p>");
  });
});