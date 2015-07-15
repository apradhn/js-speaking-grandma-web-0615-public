'use strict';

var speakToGrandma = function(greeting){
  var response =  "HUH?! SPEAK UP, SONNY!";
  if (greeting == greeting.toUpperCase()) {
    response = "NO, NOT SINCE 1938!";
  }
  return response;
};