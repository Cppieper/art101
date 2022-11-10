// Author: Arantza (asvilchi@ucsc.edu) and Patty (cpieper@ucsc.edu)
// Created: 11/9/22
// License: Public Domain

// house sort function
function sortingHat(name) {
  var length = name.length;
  var mod = length % 4;
  if (mod == 0) {
  	var house = "Gryffindor"
  } else if (mod == 1) {
  	var house = "Slytherin"
  } else if (mod == 2) {
  	var house = "Ravenclaw"
  } else {
  	var house = "Hufflepuff"
  }
  return house;
}


$("#sort").click(function(){
  var name = $("#name").val();
  console.log("name:", name);
  // sort results
  var houseStr = sortingHat(name);
  // output the result
  console.log("house:",houseStr);
	$("#output").html("Your house is " + houseStr);
})
