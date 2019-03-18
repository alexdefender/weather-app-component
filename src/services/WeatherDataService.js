let cityName = "London";
let countryCode = "uk";
const API_KEY = "9e5f732b51c403196a6a5096551e6098";

const API_DATA_WEATHER = new URL(
  `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&APPID=${API_KEY}`
);

const API_DATA_FORECAST = new URL(
  `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&APPID=${API_KEY}`
);

let dataWeather = {};
let dataForecast = {};

class WeatherDataService {
  constructor() {
    this.getCurrentWeather();
    this.getWeatherForecast();
  }

  _getWeather(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (url.pathname.includes("weather")) {
          dataWeather = Object.assign(data);
          // console.log('dataWeather');
          // console.log(dataWeather);
        } else if (url.pathname.includes("forecast")) {
          dataForecast = Object.assign(data);
          // console.log('dataForecast');
          // console.log(dataForecast);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  getCurrentWeather() {
    this._getWeather(API_DATA_WEATHER);
    return dataWeather;
  }

  getWeatherForecast() {
    this._getWeather(API_DATA_FORECAST);
    return dataForecast;
  }
}

export default new WeatherDataService();
