/*
 * Author:    Patty and Arantza
 * Created:   10.28.2022
 * (c) Copyright by Blub Corp.
 */

  function tens (x) {
     var result = (x + 10 == 20);
  }

  // test function
  console.log("is it 20?", tens(10));
  console.log("is it 10?", tens(20));

  multlipleTens = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  console.log("My Array", multlipleTens);

  var result = multlipleTens.map(tens);
  //should return [true, false, false, false, false, false, false, false, false, false]
  console.log("Test of 20:", result);

  var result = multipleTens.map (function(x) {
    return x + 20;
  })
  //should return [30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
  console.log("Array + 20:", result);
