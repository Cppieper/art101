// Author: Arantza (asvilchi@ucsc.edu), Patty (cpieper@ucsc.edu), Anika (amittal4@ucsc,edu)
// Created: 11/17/22
// License: Public Domain

function FizzBuzzBoom(){
  for (i=1;i<=200;i++) {
    var str;
    str = '';
    if (i%3 == 0) {
      str += "Fizz";
    }
    if (i%5 == 0){
        str += ("Buzz");
    }
    if (i%7 == 0){
      str += "Boom";
    }

    if (str == ""){
      str = i;
    }
    $("#output").append("<p>" + str + "</p>");
  }
}

$(".press").click(FizzBuzzBoom)
