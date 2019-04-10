import {SearchBar} from "../SearchBar/index";
import AppState from "../../../../services/AppState";

export default class SearchHistory extends SearchBar {
    constructor(host, props) {
        super(host, props);
        AppState.watch('history', this.updateMySelf);
    }

    init() {
        ['updateMySelf', 'removeCityByClickBtn']
            .forEach(methodName => this[methodName] = this[methodName].bind(this));
        this.historyState = [];
    }

    updateMySelf(state) {
        if (!this.historyState.includes(state)) this.historyState.push(state);
        this.updateState(this.historyState);
    }

    removeCityByClickBtn(e) {
        this.historyState = this.historyState.filter(city => city !== e.target.id);
        this.updateState(this.historyState);
    }

    render() {
        return this.historyState !== undefined ?
            this.historyState.map(city => {
                return {
                    tag: "div",
                    content: city,
                    children: [
                        {
                            tag: "button",
                            eventHandlers: {
                                click: this.removeCityByClickBtn,
                            },
                            attributes: [
                                {
                                    name: "id",
                                    value: city
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
