import Component from "../../framework/Component";
import imageUrl from "../../../img/cloudy.png";

export default class CurrentWeather extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: "div",
        children: [
          {
            tag: "h1",
            content: `${this.props.city}, ${this.props.country}`
          },
          {
            tag: "p",
            content: this.props.date
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
                    tag: "li",
                    content: `${this.props.wind} m/s`
                  },
                  {
                    tag: "li",
                    content: `Feels like: ${this.props.tempFeelsLike +
                      this.props.unit}`
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
            content: this.props.description
          },
          {
            tag: "hr"
          },
          {
            tag: "table",
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
                        content: "Humidity"
                      },
                      {
                        tag: "td",
                        content: `${this.props.humidity} %`
                      }
                    ]
                  },
                  {
                    tag: "tr",
                    children: [
                      {
                        tag: "th",
                        content: "Pressure"
                      },
                      {
                        tag: "td",
                        content: `${this.props.pressure} mb`
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
