import Component from "../../framework/Component";
import {SearchBar} from "../Header/SearchBar";
import {LocationsList} from "../Header/LocationsList";
import {Main} from "../Main";

export default class App extends Component {
    constructor(host) {
        super(host);
        this.state = {};
    }

    render() {
        if (this.state !== undefined) console.log(1);

        return [
            {
                tag: SearchBar,
                classList: "search-wrapper"
            },
            {
                tag: Main,
                // props: this.state.name,
                classList: "weather-wrapper",

            },
            {
                tag: LocationsList,
                classList: 'favor-hist__wrapper',
            }
        ];
    }
}
