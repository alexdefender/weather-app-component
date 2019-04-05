import Component from "../../framework/Component";
import WeatherDataService from "../../../services/WeatherDataService";

export default class SearchBar extends Component {
    constructor(host, props) {
        super(host, props);
    }

    // init() {
    //     ['getInfoFromInput']
    //         .forEach(methodName => this[methodName] = this[methodName].bind(this));
    // }

    getInfoFromInput() {
        let input = document.getElementById('search');

        WeatherDataService.getCurrentWeather(input.value)
            .then(info => console.log(info));

        // console.log(info);

        // return input.value;
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


