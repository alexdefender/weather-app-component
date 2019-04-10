import Component from "../../../framework/Component";
import AppState from "../../../../services/AppState";

export default class FavouriteLocations extends Component {
    constructor(host, props) {
        super(host, props);
        AppState.watch('favourite', this.updateMyself)
    }

    init() {
        ["updateMyself", "removeCityByClickBtn"]
            .forEach(methodName => this[methodName] = this[methodName].bind(this));
        this.favouriteState = [];
    }

    updateMyself(state) {
        if (!this.favouriteState.includes(state)) {
            this.favouriteState.push(state);
        }
        this.updateState(this.favouriteState);
    }

    removeCityByClickBtn(e) {
        this.favouriteState = this.favouriteState.filter(city => city !== e.target.id.substr(0, e.target.id.length-2));
        this.updateState(this.favouriteState);
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
                                click: this.removeCityByClickBtn
                            },
                            attributes: [
                                {
                                    name: "id",
                                    value: `${city}-f`
                                },
                            ],
                            classList: ["fa", "fa-times"]
                        }
                    ]
                }
            })
            : [];
    }
}