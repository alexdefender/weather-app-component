import Component from "../../framework/Component";
import {SearchBar} from "../SearchBar";
import {LocationsList} from "../LocationsList";
import {Weather} from "../Weather";

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
                tag: Weather,
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
