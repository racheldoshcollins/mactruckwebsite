 function calculatePriceC(){
 // calculates price of the catering order for user

 //Get selected data  
 "use strict";
      var elt = document.getElementById("numPeople");
      var peoplecost = elt.options[elt.selectedIndex].value;
         // gets the cost for number of people in the order, assigns value to variable
      
      // gets the cost of the extra condiments, assigns values to variables
      elt = document.getElementById("extraCond1");
      var cond4 = elt.options[elt.selectedIndex].value;

      elt = document.getElementById("extraCond2");
      var cond5 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond3");
      var cond6 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond4");
      var cond7 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond5");
      var cond8 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond6");
      var cond9 = elt.options[elt.selectedIndex].value;
      
      // gets cost of the drink choice, assigns value to variable
      elt = document.getElementById("drink");
      var drinkchoice = elt.options[elt.selectedIndex].value;
      
      // gets the cost of the extra condiments (from order 2), assigns values to variables
      elt = document.getElementById("extraCond12");
      var cond42 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond22");
      var cond52 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond32");
      var cond62 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond42");
      var cond72 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond52");
      var cond82 = elt.options[elt.selectedIndex].value;
      
      elt = document.getElementById("extraCond62");
      var cond92 = elt.options[elt.selectedIndex].value;
     
      peoplecost = parseInt(peoplecost);
      var people = peoplecost / 10;
      // converts the cost for the total number of people to the actual number of people
      
      // converts strings to ints:
      cond4 = parseInt(cond4);
      cond5 = parseInt(cond5);
      cond6 = parseInt(cond6);
      cond7 = parseInt(cond7);
      cond8 = parseInt(cond8);
      cond9 = parseInt(cond9);
      drinkchoice = parseInt(drinkchoice);
      cond42 = parseInt(cond42);
      cond52 = parseInt(cond52);
      cond62 = parseInt(cond62);
      cond72 = parseInt(cond72);
      cond82 = parseInt(cond82);
      cond92 = parseInt(cond92);
     
      

      //calculate total value  
      var total = peoplecost+(people*cond4)+(people*cond5)+(people*cond6)+(people*cond7)+
          (people*cond8)+(people*cond9)+(people*drinkchoice)+(people*cond42)+(people*cond52)+
          (people*cond62)+(people*cond72)+(people*cond82)+(people*cond92);
      

      //print value to PicExtPrice
      document.getElementById("PicExtPriceC").value = total.toFixed(2);
 }
 
 function myFunction3() {
 // function for displaying second order if user clicks corresponding button
  "use strict";
     document.getElementById("secondOrder").style.display = "block";
 }
 
 function myFunction4() {
 // function for displaying thrid order if user clicks corresponding button
  "use strict";
     document.getElementById("thirdOrder").style.display = "block";
     
 }
  
