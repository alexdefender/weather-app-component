import Component from "../../framework/Component";
import WeatherForecastItem from "../WeatherForecastItem/WeatherForecastItem";

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: WeatherForecastItem,
        classList: ["weather__days-3__day"]
      },
      {
        tag: "hr"
      },
      {
        tag: WeatherForecastItem,
        classList: ["weather__days-3__day"]
      },
      {
        tag: "hr"
      },
      {
        tag: WeatherForecastItem,
        classList: ["weather__days-3__day"]
      }
    ];
  }
}
