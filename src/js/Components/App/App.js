import Component from "../../framework/Component";
import { SearchBar } from "../SearchBar";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import WeatherForecast from "../WeatherForecast/WeatherForecast";
import FavouriteLocations from "../FavouriteLocations/FavouriteLocations";
import SearchHistory from "../SearchHistory/SearchHistory";
import WeatherDataService from "../../../services/WeatherDataService";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    return [
      {
        tag: SearchBar,
        classList: ["search-wrapper"]
      },
      {
        tag: "div",
        classList: "weather-wrapper",
        children: [
          {
            tag: "input",
            attributes: [
              {
                name: "id",
                value: "today"
              },
              {
                name: "type",
                value: "radio"
              },
              {
                name: "name",
                value: "tabs"
              },
              {
                name: "checked"
              }
            ]
          },
          {
            tag: "label",
            content: "Today",
            attributes: [
              {
                name: "for",
                value: "today"
              },
              {
                name: "title",
                value: "Today"
              }
            ]
          },
          {
            tag: "input",
            attributes: [
              {
                name: "id",
                value: "days-3"
              },
              {
                name: "type",
                value: "radio"
              },
              {
                name: "name",
                value: "tabs"
              },
            ]
          },
          {
            tag: "label",
            content: "3 days",
            attributes: [
              {
                name: "for",
                value: "days-3"
              },
              {
                name: "title",
                value: "3 days"
              }
            ]
          },
          {
            tag: "button",
            classList: ["fa", "fa-star"],
            attributes: [
              {
                name: "aria-hidden",
                value: "true"
              }
            ]
          },
          {
            tag: "button",
            classList: ["temp-change-btn"],
            content: "C&deg;"
          },
          {
            tag: "button",
            classList: ["temp-change-btn"],
            content: "F",
          },
          {
            tag: CurrentWeather,
            props: {
              city: "Kiev",
              country: "Ukrain",
              date: "February 28, 00:00 AM",
              temp: 7,
              unit: "°",
              wind: "0",
              tempFeelsLike: "10",
              humidity: "90",
            },
            classList: ["weather__today"],
            attributes: [
              {
                name: "id",
                value: "weather__today",
              }
            ],
          },
          {
            tag: WeatherForecast,
            classList: ["weather__days-3"],
            attributes: [
              {
                name: "id",
                value: "weather__days-3",
              }
            ],
          }
        ]
      },
      {
        tag: 'div',
        classList: 'favor-hist__wrapper',
        children: [
          {
            tag: 'label',
            classList: 'favor-hist__icon',
            attributes: [
              {
                name: "for",
                value: 'favor-hist__checkbox',
              }
            ]
          },
          {
            tag: "input",
            attributes: [
              {
                name: "id",
                value: "favor-hist__checkbox",
              },
              {
                name: "type",
                value: "checkbox"
              },
              {
                name: "name",
                value: "favor-hist__checkbox"
              }
            ]
          },
          {
            tag: "div",
            classList: "favor-hist",
            children: [
              {
                tag: FavouriteLocations,
                classList: "favor-hist__favourite"
              },
              {
                tag: "hr"
              },
              {
                tag: SearchHistory,
                classList: "favor-hist__favourite"
              }
            ]
          }
        ]
      }
    ];
  }
}
