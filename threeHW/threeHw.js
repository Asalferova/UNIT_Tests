'use strict'

function evenOddNumber(n) { 
    if (n % 2 === 0) { 
      return true; 
    } else { 
      return false; 
    } 
  }
  

  function numberInInterval(number) {
    if (number > 25 && number < 100) {
      return true;
    } else {
      return false;
    }
  }
  module.exports = {evenOddNumber, numberInInterval};


  