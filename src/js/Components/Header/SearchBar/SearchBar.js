import Component from "../../../framework/Component";
import WeatherDataService from "../../../../services/WeatherDataService";
import AppState from "../../../../services/AppState";

export default class SearchBar extends Component {
    constructor(host, props) {
        super(host, props);
    }

    init() {
        ['getInfoFromInput']
            .forEach(methodName => this[methodName] = this[methodName].bind(this));
    }

    getInfoFromInput() {
        let input = document.getElementById('search');

        WeatherDataService.getCurrentWeather(input.value)
            .then(currentWeather => {
                // console.log(currentWeather)
                WeatherDataService.getWeatherForecast(input.value)
                    .then(weatherForecast => {
                        // console.log(weatherForecast);
                        AppState.update('currentWeather', currentWeather);
                        AppState.update('weatherForecast', weatherForecast);
                        AppState.update('history', input.value);
                    })
            });
    }

    render() {
        return [
            {
                tag: "input",
                classList: ["search"],
                attributes: [
                    {
                        name: "type",
                        value: "text"
                    },
                    {
                        name: "name",
                        value: "search"
                    },
                    {
                        name: "id",
                        value: "search"
                    },
                    {
                        name: "value",
                        value: "Kiev"
                    }
                ]
            },
            {
                tag: "button",
                eventHandlers: {
                    click: this.getInfoFromInput,
                },
                classList: ["search__btn"],
                attributes: [
                    {
                        name: "type",
                        value: "submit"
                    }
                ]
            }
        ];
    }
}


