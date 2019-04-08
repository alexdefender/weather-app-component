import Component from "../../../framework/Component";
import { WeatherForecastItem } from "../WeatherForecastItem/index";

export default class WeatherForecast extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: WeatherForecastItem,
        props: {
          day: "Thursday",
          date: "01/03/2019",
          temp: "5",
          unit: "°",
          wind: "0",
          tempFeelsLike: "6",
          description: "Overcast clouds"
        },
        classList: ["weather__days-3__day"]
      },
      {
        tag: "hr"
      },
      {
        tag: WeatherForecastItem,
        props: {
          day: "Wednesday",
          date: "02/03/2019",
          temp: "8",
          unit: "°",
          wind: "3",
          tempFeelsLike: "10",
          description: "Overcast clouds"
        },
        classList: ["weather__days-3__day"]
      },
      {
        tag: "hr"
      },
      {
        tag: WeatherForecastItem,
        props: {
          day: "Friday",
          date: "03/03/2019",
          temp: "15",
          unit: "°",
          wind: "0",
          tempFeelsLike: "16",
          description: "Overcast clouds"
        },
        classList: ["weather__days-3__day"]
      }
    ];
  }
}
