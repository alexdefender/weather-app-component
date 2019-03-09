import Component from "../../framework/Component";
import imageUrl from "../../../img/cloudy.png";
import WeatherDataService from "../../../services/WeatherDataService"

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    console.log(WeatherDataService.getCurrentWeather());

    return [
      {
        tag: "div",
        children: [
          {
            tag: 'h1',
            content: `${this.props.city}, ${this.props.country}`
          },
          {
            tag: "p",
            content: this.props.date,
          },
          {
            tag: "div",
            classList: "weather__today__main-values",
            children: [
              {
                tag: "p",
                classList: "weather__today__temp",
                content: this.props.temp + this.props.unit
              },
              {
                tag: "ul",
                children: [
                  {
                    tag: 'li',
                    content: `${this.props.wind} m/s`,
                  },
                  {
                    tag: 'li',
                    content: `Feels like: ${this.props.tempFeelsLike + this.props.unit}`,
                  },
                  {
                    tag: 'li',
                    content: `Humidity: ${this.props.humidity}%`,
                  }
                ]
              },
              {
                tag: "img",
                classList: "weather__today__img",
                attributes: [
                  {
                    name: "src",
                    value: imageUrl
                  }
                ]
              }
            ]
          },
          {
            tag: "p",
            classList: "weather__today__description",
            content: "Overcast clouds"
          },
          {
            tag: "hr"
          },
          {
            tag: 'table',
            classList: "weather__today__more-values",
            children: [
              {
                tag: "tbody",
                children: [
                  {
                    tag: "tr",
                    children: [
                      {
                        tag: "th",
                        content: "Pressure"
                      },
                      {
                        tag: "td",
                        content: "984 mb"
                      }
                    ]
                  },
                  {
                    tag: "tr",
                    children: [
                      {
                        tag: "th",
                        content: "Dew point"
                      },
                      {
                        tag: "td",
                        content: "-0.3°"
                      }
                    ]
                  },
                  {
                    tag: "tr",
                    children: [
                      {
                        tag: "th",
                        content: "Cloud coverage"
                      },
                      {
                        tag: "td",
                        content: "100%"
                      }
                    ]
                  },
                  {
                    tag: "tr",
                    children: [
                      {
                        tag: "th",
                        content: "Visibility"
                      },
                      {
                        tag: "td",
                        content: "5 km"
                      }
                    ]
                  },
                  {
                    tag: "tr",
                    children: [
                      {
                        tag: "th",
                        content: "Sunrise"
                      },
                      {
                        tag: "td",
                        content: "04:44"
                      }
                    ]
                  },
                  {
                    tag: "tr",
                    children: [
                      {
                        tag: "th",
                        content: "Sunset"
                      },
                      {
                        tag: "td",
                        content: "15:37"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
}


