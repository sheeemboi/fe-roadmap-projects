const $form = document.querySelector("#form_id");
const $input = $form.querySelector("#city_input");
const $today = document.querySelector("#today");
const $city_name = document.querySelector("#city_name");
const $country = document.querySelector("#country");
const $condition = document.querySelector("#condition");
const $tempc_today = document.querySelector("#tempc_today");
const $icon_today = document.querySelector("#icon_today");
const $forecast_ul = document.querySelector("#forecast_ul");

const API_KEY = "";

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = $input.value;
  getWeatherData(city);
  $input.value = "";
});

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

async function getWeatherData(input_city) {
  try {
    // Loading screen
    $city_name.textContent = "Finding city...";

    const weather_response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${input_city}&days=4`
    );
    const weather_data = await weather_response.json();

    // Destructuring data--
    const {
      location: { name: city, country },
      current: {
        temp_c,
        condition: { text, icon },
      },
      forecast: {
        forecastday: [
          ,
          {
            day: {
              avgtemp_c: day2_temp,
              condition: { icon: day2_icon },
            },
          },
          {
            day: {
              avgtemp_c: day3_temp,
              condition: { icon: day3_icon },
            },
          },
          {
            day: {
              avgtemp_c: day4_temp,
              condition: { icon: day4_icon },
            },
          },
        ],
      },
    } = weather_data;

    displayWeatherToday(city, country, icon, temp_c, text);
    displayForecast(
      day2_icon,
      day3_icon,
      day4_icon,
      day2_temp,
      day3_temp,
      day4_temp
    );

    // Temporary console logging
    console.log(weather_data);
    // console.log(weather_data);
  } catch (err) {
    console.log(err);
    $country.textContent = "Not Found.";
  } finally {
    // $load_screen.textContent = "";
  }
}

async function displayWeatherToday(city, country, icon, temp_c, condition) {
  try {
    await new Promise((resolve) => {
      $icon_today.src = icon;
      $icon_today.onload = () => resolve();
    });
    $city_name.textContent = city;
    $country.textContent = country;
    $tempc_today.textContent = `${temp_c.toFixed(0)}°C`;
    $condition.textContent = condition;
  } catch {}
}

function displayForecast(icon2, icon3, icon4, temp2, temp3, temp4) {
  let items = $forecast_ul.querySelectorAll("li");
  let icons = [icon2, icon3, icon4];
  let temps = [temp2, temp3, temp4];

  for (let li = 0; li < items.length; li++) {
    items[li].querySelector("img").src = icons[li];
    items[li].querySelectorAll("span")[1].textContent = `${temps[li].toFixed(
      0
    )}°C`;
  }
}
