const cityName = 'Odessa';
const API_KEY = '&APPID=9e5f732b51c403196a6a5096551e6098';
const API_DATA_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_DATA_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const API_TEMP_UNIT = '&units=metric';

class WeatherDataService {
       getCurrentWeather(city) {
           return fetch(API_DATA_WEATHER + (city === undefined ? cityName : city) + API_TEMP_UNIT + API_KEY)
               .then(response => {
                   return response.json()
               })
               .catch(err => {
                   console.log(err)
               });
       }

    getWeatherForecast(city) {
        return fetch(API_DATA_FORECAST + (city === undefined ? cityName : city) + API_TEMP_UNIT + API_KEY)
            .then(response => {
                return response.json()
            })
            .catch(err => {
                console.log(err)
            });
    }
}

export default new WeatherDataService();
