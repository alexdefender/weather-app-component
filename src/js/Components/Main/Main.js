import Component from "../../framework/Component";
import {CurrentWeather} from "./CurrentWeather/";
import {WeatherForecast} from "./WeatherForecast/";
import AppState from "../../../services/AppState";

export default class Main extends Component {
    constructor(host, props) {
        super(host, props);
        AppState.watch("history", this.addCityFromHistoryToState);
        AppState.watch("delete", this.checkClassListBtn);
    }

    init() {
        ["addCityFromHistoryToState", "addCityToFavouriteByClickBtn", "updateMyself", "checkClassListBtn"]
            .forEach(methodName => this[methodName] = this[methodName].bind(this));
        this.state = this.props;
    }

    updateMyself(state) {
        // console.log(state.name);
    }

    addCityFromHistoryToState(city) {
        // Object.assign(this.state, {favourite: city})
        // console.log(city);
        this.state = city;
        // console.log(this.state)
    }

    addCityToFavouriteByClickBtn() {
        AppState.update('favourite', this.state);
    }

    checkClassListBtn(e) {
        // console.log(e);
        // console.log(this.state);
        if (e !== undefined && e.includes(this.state)) {
            // console.log(111);
            return ["fa", "fa-star", "fa-star-fav"];
        } else {
            // console.log(222);
            return ["fa", "fa-star"];
        }
    }

    changeToCelsius() {
        AppState.update("unit", "&units=metric");

    }

    changeToFahrenheit() {
        AppState.update("unit", "&units=imperial");

    }

    render() {
        return [
            {
                tag: "input",
                attributes: [
                    {
                        name: "id",
                        value: "today"
                    },
                    {
                        name: "type",
                        value: "radio"
                    },
                    {
                        name: "name",
                        value: "tabs"
                    },
                    {
                        name: "checked"
                    }
                ]
            },
            {
                tag: "label",
                content: "Today",
                attributes: [
                    {
                        name: "for",
                        value: "today"
                    },
                    {
                        name: "title",
                        value: "Today"
                    }
                ]
            },
            {
                tag: "input",
                attributes: [
                    {
                        name: "id",
                        value: "days-3"
                    },
                    {
                        name: "type",
                        value: "radio"
                    },
                    {
                        name: "name",
                        value: "tabs"
                    },
                ]
            },
            {
                tag: "label",
                content: "3 days",
                attributes: [
                    {
                        name: "for",
                        value: "days-3"
                    },
                    {
                        name: "title",
                        value: "3 days"
                    }
                ]
            },
            {
                tag: "button",
                eventHandlers: {
                    click: this.addCityToFavouriteByClickBtn
                },
                classList: this.checkClassListBtn(),
                attributes: [
                    {
                        name: "aria-hidden",
                        value: "true"
                    }
                ]
            },
            {
                tag: "button",
                classList: "temp-change-btn",
                content: "C&deg;",
                eventHandlers: {
                    click: this.changeToCelsius
                },
            },
            {
                tag: "button",
                classList: "temp-change-btn",
                content: "F",
                eventHandlers: {
                    click: this.changeToFahrenheit
                },
            },
            {
                tag: CurrentWeather,
                classList: "weather__today",
                attributes: [
                    {
                        name: "id",
                        value: "weather__today",
                    }
                ],
            },
            {
                tag: WeatherForecast,
                classList: "weather__days-3",
                attributes: [
                    {
                        name: "id",
                        value: "weather__days-3",
                    }
                ],
            }
        ];
    }
}


