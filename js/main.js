
var one;
var two;
var three;
var four;
var five;
var six;

var numOne;
var numTwo;
var numTwohree;
var numFour;
var numFive;
var numSix;

function shared() {


  document.getElementById('cloud').setAttribute('style', 'color: inherit');
  document.getElementById('shared').setAttribute('style', 'color: #009245');
  document.getElementById('vps').setAttribute('style', 'color: inherit');
  document.getElementById('dedicated').setAttribute('style', 'color: inherit');

  one = document.getElementById('one');
  one.setAttribute('style', 'order: 1');

  two = document.getElementById('two');
  two.setAttribute('style', 'order: 2');

  three = document.getElementById('three');
  three.setAttribute('style', 'order: 3');

  four = document.getElementById('four');
  four.setAttribute('style', 'order: 4');

  five = document.getElementById('five');
  five.setAttribute('style', 'order: 5');

  six = document.getElementById('six');
  six.setAttribute('style', 'order: 6');

  sharedNumbering();
}

function sharedNumbering() {
  numOne = document.getElementById('numOne');
  numOne.innerHTML = "#1";

  numTwo = document.getElementById('numTwo');
  numTwo.innerHTML = "#2";

  numThree = document.getElementById('numThree');
  numThree.innerHTML = "#3";

  numFour = document.getElementById('numFour');
  numFour.innerHTML = "#4";

  numFive = document.getElementById('numFive');
  numFive.innerHTML = "#5";

  numSix = document.getElementById('numSix');
  numSix.innerHTML = "#6";
}

function cloud() {
  document.getElementById('cloud').setAttribute('style', 'color: #009245');
  document.getElementById('shared').setAttribute('style', 'color: inherit');
  document.getElementById('vps').setAttribute('style', 'color: inherit');
  document.getElementById('dedicated').setAttribute('style', 'color: inherit');

  one = document.getElementById('one');
  one.setAttribute('style', 'order: 3');

  two = document.getElementById('two');
  two.setAttribute('style', 'order: 1');

  three = document.getElementById('three');
  three.setAttribute('style', 'order: 4');

  four = document.getElementById('four');
  four.setAttribute('style', 'order: 2');

  five = document.getElementById('five');
  five.setAttribute('style', 'order: 5');

  six = document.getElementById('six');
  six.setAttribute('style', 'order: 6');

  cloudNumbering();
}

function cloudNumbering() {
  numOne = document.getElementById('numOne');
  numOne.innerHTML = "#3";

  numTwo = document.getElementById('numTwo');
  numTwo.innerHTML = "#1";

  numThree = document.getElementById('numThree');
  numThree.innerHTML = "#4";

  numFour = document.getElementById('numFour');
  numFour.innerHTML = "#2";

  numFive = document.getElementById('numFive');
  numFive.innerHTML = "#5";

  numSix = document.getElementById('numSix');
  numSix.innerHTML = "#6";
}

function vps() {

  document.getElementById('cloud').setAttribute('style', 'color: inherit');
  document.getElementById('shared').setAttribute('style', 'color: inherit');
  document.getElementById('vps').setAttribute('style', 'color: #009245');
  document.getElementById('dedicated').setAttribute('style', 'color: inherit');

  one = document.getElementById('one');
  one.setAttribute('style', 'order: 4');

  two = document.getElementById('two');
  two.setAttribute('style', 'order: 2');

  three = document.getElementById('three');
  three.setAttribute('style', 'order: 1');

  four = document.getElementById('four');
  four.setAttribute('style', 'order: 3');

  five = document.getElementById('five');
  five.setAttribute('style', 'order: 6');

  six = document.getElementById('six');
  six.setAttribute('style', 'order: 5');

  vspNumbering();
}

function vspNumbering() {
  numOne = document.getElementById('numOne');
  numOne.innerHTML = "#4";

  numTwo = document.getElementById('numTwo');
  numTwo.innerHTML = "#2";

  numThree = document.getElementById('numThree');
  numThree.innerHTML = "#1";

  numFour = document.getElementById('numFour');
  numFour.innerHTML = "#3";

  numFive = document.getElementById('numFive');
  numFive.innerHTML = "#6";

  numSix = document.getElementById('numSix');
  numSix.innerHTML = "#5";
}

function dedicated() {

  document.getElementById('cloud').setAttribute('style', 'color: inherit');
  document.getElementById('shared').setAttribute('style', 'color: inherit');
  document.getElementById('vps').setAttribute('style', 'color: inherit');
  document.getElementById('dedicated').setAttribute('style', 'color: #009245');

  one = document.getElementById('one');
  one.setAttribute('style', 'order: 4');

  two = document.getElementById('two');
  two.setAttribute('style', 'order: 2');

  three = document.getElementById('three');
  three.setAttribute('style', 'order: 1');

  four = document.getElementById('four');
  four.setAttribute('style', 'order: 3');

  five = document.getElementById('five');
  five.setAttribute('style', 'order: 6');

  six = document.getElementById('six');
  six.setAttribute('style', 'order: 6');

  dedicatedNumbering();
}

function dedicatedNumbering() {
  numOne = document.getElementById('numOne');
  numOne.innerHTML = "#4";

  numTwo = document.getElementById('numTwo');
  numTwo.innerHTML = "#2";

  numThree = document.getElementById('numThree');
  numThree.innerHTML = "#1";

  numFour = document.getElementById('numFour');
  numFour.innerHTML = "#3";

  numFive = document.getElementById('numFive');
  numFive.innerHTML = "#5";

  numSix = document.getElementById('numSix');
  numSix.innerHTML = "#6";
}
