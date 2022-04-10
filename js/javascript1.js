function closeme() {
  x=getElementsByTagName("table")
  x.style.display = "none";

}

var cases = [ ];
// document.getElementById("cases").innerHTML = cases;

function loadcases() {
  document.getElementById("cases").innerHTML = cases;
}

function newcase() {
  var case1 = prompt("Enter Details of new case");
  cases[cases.length] = "<br>" + case1 ;
  document.getElementById("cases").innerHTML = cases;
}
