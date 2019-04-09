import Component from "../../../framework/Component";
import {WeatherForecastItem} from "../WeatherForecastItem/index";
import AppState from "../../../../services/AppState";

const WEATHER_FORECAST_TIME = '12:00:00';

export default class WeatherForecast extends Component {
    constructor(host, props) {
        super(host, props);
        AppState.watch('weatherForecast', this.updateMyself)
    }

    init() {
        ['updateMyself', 'convertObjectToArrayForRender']
            .forEach(methodName => this[methodName] = this[methodName].bind(this));
        this.state = this.props;
    }

    updateMyself(state) {
        const newState = state.list
            .filter(weatherForecast =>
                weatherForecast.dt_txt.includes(WEATHER_FORECAST_TIME))
            .filter((weatherForecast, i) => 0 < i && i < 4)
            .map(weatherData => {
                const weatherDataState = {
                    'main': weatherData.weather[0].main,
                    'date': weatherData.dt_txt.substr(0, 10),
                    'icon': weatherData.weather[0].icon,
                    'temp': Math.round(weatherData.main.temp),
                    'wind': weatherData.wind.speed,
                    'description': weatherData.weather[0].description.toUpperCase(),
                };
                return weatherDataState;

            });
        this.updateState(newState);
    }

    convertObjectToArrayForRender(obj) {
        const render = [];
        Object.entries(obj).forEach(weatherForecast => {
            const {main, date, icon, temp, wind, description} = weatherForecast[1];
            render.push({
                    tag: WeatherForecastItem,
                    props: {
                        main: main,
                        date: date,
                        icon: icon,
                        temp: temp,
                        wind: wind,
                        description: description
                    },
                    classList: ["weather__days-3__day"]
                }
            );

        });

        return render;
    }

    render() {
        return this.convertObjectToArrayForRender(this.state);
    }
}
