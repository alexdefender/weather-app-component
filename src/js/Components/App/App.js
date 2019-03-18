import Component from "../../framework/Component";
import { SearchBar } from "../SearchBar";
import { CurrentWeather } from "../CurrentWeather";
import { WeatherForecast } from "../WeatherForecast";
import { WeatherDataService } from "../../../services/WeatherDataService";
import { LocationsList } from "../LocationsList";
import { Weather } from "../Weather";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {

    // let data = WeatherDataService.getCurrentWeather();

    // console.log(data);

    return [
      {
        tag: SearchBar,
        classList: "search-wrapper"
      },
      {
        tag: Weather,
        classList: "weather-wrapper",

      },
      {
        tag: LocationsList,
        classList: 'favor-hist__wrapper',
      }
    ];
  }
}
