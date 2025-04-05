import "./styles.css";
import { displayWeatherInfo } from "./displayer";

const API_KEY = "GKX94YLP6EE2JKCW89UVWW47S";

let unitGroup = "metric";

const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const errorMsg = document.querySelector(".search .error-message") 
const celsiusBtn = document.querySelector("#celsius")
const fahrenheitBtn = document.querySelector("#fahrenheit")

searchBar.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
})

searchBtn.addEventListener("click", () => {
  getWeatherData(searchBar.value);
  errorMsg.textContent = ""
})

celsiusBtn.addEventListener("click", () => {
  unitGroup = "metric"
  searchBtn.click();
})

fahrenheitBtn.addEventListener("click", () => {
  unitGroup = "us";
  searchBtn.click();
})

async function getWeatherData(location = "riyadh") {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?include=hours,current&unitGroup=${unitGroup}&key=${API_KEY}`;
    const response = await fetch(url);
    if (response.ok) {
      const forecastData = await response.json();
      const {resolvedAddress, days: [today]} = await forecastData;
      const filteredData = {resolvedAddress, today}
      console.log(filteredData);
      displayWeatherInfo(filteredData);
      
    } else if (response.status == 400) {
      throw new Error(`Could not find forecast information for "${location}"`);
    } else {
      throw new Error(`An Error occured please try again later. Error code: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
    errorMsg.textContent = error;
  }
}
