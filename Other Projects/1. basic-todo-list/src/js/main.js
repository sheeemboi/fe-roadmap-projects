import { checkItem, deleteItem } from "./filter.js";
import { ListItem } from "./item.js";
const $addBtn = document.querySelector("#addBtn");
const $inpBox = document.querySelector("#newList");
const $listBox = document.querySelector("#list");
const $error = document.querySelector("#errMsg");
const $clock = document.querySelector("#clock");
export let listArr = [];

// Validate Add button
$addBtn.addEventListener("click", (e) => {
  if ($inpBox.validity.valid) {
    const item = new ListItem($inpBox.value, false);
    listArr.push(item);
    $listBox.append(item.render());
    $inpBox.value = "";
  } else {
    $addBtn.preventDefault;
  }
});

// Validate Enter Key
$inpBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && $inpBox.validity.valid) {
    const item = new ListItem($inpBox.value, false);
    listArr.push(item);
    $listBox.append(item.render());
    e.preventDefault();
    $inpBox.value = "";
    console.log();
  }
});

function runClock() {
  const now = new Date();
  const today = now.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const timeNow = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  $clock.innerHTML = `${days[today]}<br>${timeNow}`;
}

runClock();
setInterval(runClock, 500);
