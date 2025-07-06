const $city_name = document.querySelector("#city_name");
const $country = document.querySelector("#country");
const $condition = document.querySelector("#condition");
const $tempc_today = document.querySelector("#tempc_today");
const $icon_today = document.querySelector("#icon_today");
const $forecast_ul = document.querySelector("#forecast_ul");

export async function getData(input_city = "Manila") {
  try {
    const weather_response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${input_city}&days=3`
    );
    const weather_data = await weather_response.json();

    console.log(weather_data);
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
            date: date2,
            day: {
              avgtemp_c: day2_temp,
              condition: { icon: day2_icon },
            },
          },
          {
            date: date3,
            day: {
              avgtemp_c: day3_temp,
              condition: { icon: day3_icon },
            },
          }
        ],
      },
    } = weather_data;

    console.log("Checkpoint here");
    displayWeather(city, country, icon, temp_c, text);
    displayForecast(
      { date: date2, icon: day2_icon, temp: day2_temp },
      { date: date3, icon: day3_icon, temp: day3_temp }
    );
  } catch (error) {
    console.error("Something went wrong. Check data fetching codebase.");
    console.error(error);
  }
}


async function displayWeather(...weatherdata) {
  const [city, country, icon, temp_c, condition] = weatherdata;
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
function displayForecast(...forecastdata) {
  const items = $forecast_ul.querySelectorAll("li");

  forecastdata.forEach(({ date, icon, temp }, index) => {
    const li = items[index];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = parseInt(date.slice(5, 7), 10);
    const day = date.slice(8, 10);
    console.log(month, day);
    li.querySelector("img").src = icon;
    li.querySelectorAll("span")[0].innerHTML = `<p class="text-xs">${
      months[month - 1]
    }</p><p class="text-3xl">${day}</p>`;
    li.querySelectorAll(
      "span"
    )[1].innerHTML = `<p class="text-3xl">${temp.toFixed(
      0
    )}</p><p class="text-xs">°C</p>`;
  });

  /**
   * Result should display:
   * <li>[icon2][temp2]</li>
   * <li>[icon3][temp3]</li>
   * <li>[icon4][temp4]</li>
   */
}
