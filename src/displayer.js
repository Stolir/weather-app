import { formatDate, getWeatherIcon } from "./helper";

const addressBox = document.querySelector(".address")
const temperatureBoxes = document.querySelectorAll(".temperature div")
const dateBox = document.querySelector(".date") 
const descriptionBox = document.querySelector(".description")

export async function displayWeatherInfo(forecastInfo) {
  addressBox.textContent = forecastInfo.resolvedAddress;

  const date = formatDate(forecastInfo.today.datetime);
  dateBox.textContent = date;

  temperatureBoxes[0].textContent = forecastInfo.today.temp;
  temperatureBoxes[1].textContent = `${forecastInfo.today.tempmax}/${forecastInfo.today.tempmin}`

  descriptionBox.textContent = forecastInfo.today.description;

  // append corresponding weather Icon next to temperature
  const weatherIconPath = await getWeatherIcon(forecastInfo.today.icon);
  const icon = document.createElement("img");
  icon.classList.add("weather-icon")
  icon.src = weatherIconPath;
  icon.alt = `${forecastInfo.today.icon} Icon`
  temperatureBoxes[0].appendChild(icon)
}

