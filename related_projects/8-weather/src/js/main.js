import { getData } from "./get_data.js"

const $form = document.querySelector("#form_id");
const $input = $form.querySelector("#city_input");
const $today = document.querySelector("#today");
const $city_name = document.querySelector("#city_name");
const $country = document.querySelector("#country");

const API_KEY = "";

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = $input.value;
  queryCity(city);
  $input.value = "";
});
async function queryCity(input_city) {
  try {
    // Loading screen
    $city_name.textContent = "Finding city...";

    await getData(input_city);
  } catch (err) {
    console.error(err);
    $country.textContent = "Not Found.";
  } finally {
    // $load_screen.textContent = "";
  }
}
function dateToday() {
  const date = new Date();
  let day = date.getDay();
  let days_arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hour = date.getHours().toString().padStart(2, "0");
  let minute = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  $today.textContent = `${days_arr[day]}, ${hour}:${minute}:${second}`;
}
setInterval(dateToday, 1000);
getData();
