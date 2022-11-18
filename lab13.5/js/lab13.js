// Author: Arantza (asvilchi@ucsc.edu), Patty (cpieper@ucsc.edu), Anika (amittal4@ucsc,edu)
// Created: 11/17/22
// License: Public Domain

function fizzBuzz() {
	for (var n=1;n<=200;n++) {
		var str = "";
    // assign words if multiples
    if (n%3 == 0) {
    	str += "Bing";
    }
    if (n%5 == 0) {
    	str += "Bong";
    }
    if (n%7 == 0) {
    	str += "Bang";
    }
    // if we have words, show 'em
    // else show the number
    if (str == "") {
    	str = n;
    }
    $("#output").append("<p class='num'>" + str + "</p>");
  }
}

$(".press").click(fizzBuzz)
