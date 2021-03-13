import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import //Object from './Location.js';

$(document).ready(function() {
  $('#space-age-form').submit(function(event) {
    event.preventDefault();
    
    $('#response').append("<p>" + response + "</p>");
  });
});