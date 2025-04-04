import "./styles.css";

const API_KEY = "GKX94YLP6EE2JKCW89UVWW47S";

let unitGroup = "metric";

async function getWeatherData(location = "riyadh") {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?include=hours,current&unitGroup=${unitGroup}&key=${API_KEY}`;
    const response = await fetch(url);
    if (response.ok) {
        const forecastData = await response.json();
        const todayData = await forecastData.days[0];
        console.log(todayData);
    }
    else if (response.status == 400) {
        throw new Error(`Could not find forecast information for ${location}`)
    }
    else { 
        throw new Error(`An Error occured please try again later. Error code: ${response.status}`)
    }

  } catch (error) {
    console.log(error);
  }
}

function changeUnitGroup(group) {
  unitGroup = group;
}

getWeatherData();