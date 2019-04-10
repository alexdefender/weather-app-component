import Component from "../../../framework/Component";
import AppState from "../../../../services/AppState";
import {WeatherForecastItem} from "../../Main/WeatherForecastItem";

export default class FavouriteLocations extends Component {
    constructor(host, props) {
        super(host, props);
        AppState.watch('favourite', this.updateMyself)
    }

    init() {
        ["updateMyself", "addCityByClickBtn"]
            .forEach(methodName => this[methodName] = this[methodName].bind(this));
        this.favouriteState = [];
    }

    updateMyself(state) {
        if (!this.favouriteState.includes(state)) this.favouriteState.push(state);
        this.updateState(this.favouriteState);
    }

    addCityByClickBtn(e) {
        console.log(e)
    }

    render() {
        return this.favouriteState !== undefined ?
            this.favouriteState.map(city => {
                return {
                    tag: "div",
                    content: city,
                    children: [
                        {
                            tag: "button",
                            eventHandlers: {
                                click: this.addCityByClickBtn
                            },
                            classList: ["fa", "fa-times"]
                        }
                    ]
                }
            })
            : [];
    }
}