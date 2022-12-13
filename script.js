let btnclick1 = document.getElementById("click1");

btnclick1.addEventListener("click", function (e) {
  var target = e.target;
  target.classList.toggle("arrowup");
  document.getElementById("display2").innerHTML = "";
  document.getElementById("display3").innerHTML = "";
  document.getElementById("display4").innerHTML = "";
  document.getElementById("display5").innerHTML = "";
  document.getElementById("display1").innerHTML = "Invite upto 5 members";
  document.getElementById("display1").style.textDecoration = "underline";
  btnclick1.classList.remove("arrowup");
});
let btnclick2 = document.getElementById("click2");
btnclick2.addEventListener("click", function (e) {
  var target = e.target;
  target.classList.toggle("arrowup");
  document.getElementById("display1").innerHTML = "";
  document.getElementById("display2").innerHTML = "Upload upto 3GB";
  document.getElementById("display2").style.textDecoration = "underline";
});

let btnclick3 = document.getElementById("click3");
btnclick3.addEventListener("click", function (e) {
  var target = e.target;
  target.classList.toggle("arrowup");
  document.getElementById("display1").innerHTML = "";
  document.getElementById("display2").innerHTML = "";
  document.getElementById("display3").innerHTML = "By clicking an Reset button";
  document.getElementById("display3").style.textDecoration = "underline";
});
let btnclick4 = document.getElementById("click4");
btnclick4.addEventListener("click", function (e) {
  var target = e.target;
  target.classList.toggle("arrowup");
  document.getElementById("display1").innerHTML = "";
  document.getElementById("display2").innerHTML = "";
  document.getElementById("display3").innerHTML = "";
  document.getElementById("display4").innerHTML =
    "Yes,but you cancel it after 30 days";
  document.getElementById("display4").style.textDecoration = "underline";
});
let btnclick5 = document.getElementById("click5");
btnclick5.addEventListener("click", function (e) {
  var target = e.target;
  target.classList.toggle("arrowup");
  document.getElementById("display1").innerHTML = "";
  document.getElementById("display2").innerHTML = "";
  document.getElementById("display3").innerHTML = "";
  document.getElementById("display4").innerHTML = "";
  document.getElementById("display5").innerHTML =
    "Yes,always provide what you want";
  document.getElementById("display5").style.textDecoration = "underline";
});
s