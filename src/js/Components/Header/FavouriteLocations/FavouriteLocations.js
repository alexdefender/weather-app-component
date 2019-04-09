import Component from "../../../framework/Component";
import AppState from "../../../../services/AppState";
import {WeatherForecastItem} from "../../Main/WeatherForecastItem";

export default class FavouriteLocations extends Component {
    constructor(host, props) {
        super(host, props);
    }

    render() {
        return [
            {
                tag: "div",
                content: "Kiev",
                children: [
                    {
                        tag: "button",
                        classList: ["fa", "fa-times"]
                    }
                ]
            }
        ];
    }

}
