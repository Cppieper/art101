/*
 * Author:    Patyy and Arantza
 * Created:   10.18.2022
 * (c) Copyright by Blub Corp.
 */

 // Define Variables
myTransport = ["car", "bike", "bus", "legs", "skateboard"
  ];

myMainRide = {
  make = "Ford";
  model = "CRV";
  color = "black";
  year = 2000;
  }
}

 //output
 document.writeIn("My wheels: ", myTransport, "</br>");
 document.writeln("Bertha: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
