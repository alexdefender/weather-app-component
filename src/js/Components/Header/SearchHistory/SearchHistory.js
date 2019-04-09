import {SearchBar} from "../SearchBar/index";
import AppState from "../../../../services/AppState";

export default class SearchHistory extends SearchBar {
    constructor(host, props) {
        super(host, props);
        AppState.watch('history', this.updateMySelf);
        this.favState = [];
    }

    init() {
        ['updateMySelf']
            .forEach(methodName => this[methodName] = this[methodName].bind(this));
    }

    updateMySelf(state) {
        if (!this.favState.includes(state)) this.favState.push(state);
        this.updateState(this.state);
    }

    render() {
        return this.favState !== undefined ?
            this.favState.map(city => {
                return {
                    tag: "div",
                    content: city,
                    children: [
                        {
                            tag: "button",
                            classList: ["fa", "fa-times"]
                        }
                    ]
                }
            })
            : [];
    }
}
