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

// this is the PGE1 alaram clock for every 2hours
// function callEveryHour() {
//     setInterval(yourFunction, 1000 * 60 * 60);
// }
// 
//
// var nextDate = new Date();
// if (nextDate.getMinutes() === 0) { // You can check for seconds here too
//     callEveryHour()
// } else {
//     nextDate.setHours(nextDate.getHours() + 1);
//     nextDate.setMinutes(0);
//     nextDate.setSeconds(0);// I wouldn't do milliseconds too ;)
//
//     var difference = nextDate - new Date();
//     setTimeout(callEveryHour, difference);
// }
