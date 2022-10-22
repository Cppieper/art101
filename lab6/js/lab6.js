/*
 * Author:    Patyy and Arantza
 * Created:   10.22.2022
 */


// Define Variables
myTransport = [ "car", "bike", "bus", "legs", "skateboard"];

myMainRide = {
   make: "Ford",
   model : "CRV",
   color : "black",
   year : 2000,
   age : function() {
         return 2022 - age;
   }
}

// output
 document.writeln("My Wheels: ", myTransport, "</br>");
 document.writeln("Bertha: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
