var result = document.getElementById ("result");
var numTracker = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");


q1a1.addEventListener ("click", add1);
q1a2.addEventListener ("click", add2);
q1a3.addEventListener ("click", add3);
q1a4.addEventListener ("click", add4);

function add1(){
  numTracker++;
   result.innerHTML = "You have " + numTracker + " hour(s)";
}

function add2(){
  numTracker = numTracker +2;
  result.innerHTML = "You have " + numTracker + " hour(s)";
}

function add3(){
  numTracker = numTracker + 3;
  result.innerHTML = "You have " + numTracker + " hour(s)";
}

function add4(){
  numTracker = numTracker + 3;
  result.innerHTML = "You have " + numTracker + " hour(s)";
}





