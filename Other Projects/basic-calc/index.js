let expression = "";

function appendNum(e) {
  expression += e.target.value
  $screen.value = expression;
}

function delChar() {
  expression = expression.toString()
  expression = expression.slice(0, -1);
  $screen.value = expression;
  console.log(typeof expression);
}

function calcResult() {
  expression = eval(expression);
  $screen.value = expression;
  
}

function delAll() {
  expression = "";
  $screen.value = expression;
}

const $numbers = document.querySelectorAll(".num");
const $controls = document.querySelectorAll(".controls");
const $delete = document.querySelector("#clear");
const $result = document.querySelector("#result");
const $screen = document.querySelector("#screen");
const $delAll = document.querySelector("#allClear");

$numbers.forEach(number => number.addEventListener("click", (n) => appendNum(n)))
$controls.forEach(control => control.addEventListener("click", (c) => appendNum(c)))
$delete.addEventListener("click", () => delChar())
$result.addEventListener("click", () => calcResult())
$delAll.addEventListener("click", () => delAll())