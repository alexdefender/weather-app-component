import Component from "../../../framework/Component";
import WeatherDataService from "../../../../services/WeatherDataService";
import AppState from "../../../../services/AppState";

// let TEMP_UNIT = "&units=metric";

export default class SearchBar extends Component {
    constructor(host, props) {
        super(host, props);
        AppState.watch("init", this.getInfoFromInput);
    }

    init() {
        ["getInfoFromInput"]
            .forEach(methodName => this[methodName] = this[methodName].bind(this));
    }

    getInfoFromInput() {
        let input = document.getElementById("search");
        // console.log(input.value);
        WeatherDataService.getCurrentWeather(input.value)
            .then(currentWeather => {
                // console.log(currentWeather)
                WeatherDataService.getWeatherForecast(input.value)
                    .then(weatherForecast => {
                        // console.log(weatherForecast);
                        AppState.update("currentWeather", currentWeather);
                        AppState.update("weatherForecast", weatherForecast);
                        AppState.update("history", input.value);
                    });
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
                        value: "Kiev, UA"
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


