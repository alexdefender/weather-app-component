import Component from "../../../framework/Component";
import imageUrl from "../../../../img/cloudy.png";

export default class WeatherForecastItem extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: "div",
        children: [
          {
            tag: "h2",
            content: this.props.day
          },
          {
            tag: "p",
            content: this.props.date
          }
        ]
      },
      {
        tag: "img",
        classList: "days-3__img",
        attributes: [
          {
            name: "src",
            value: imageUrl
          }
        ]
      },
      {
        tag: "ul",
        children: [
          {
            tag: "li",
            content: `${this.props.temp + this.props.unit} | ${this.props
              .tempFeelsLike + this.props.unit}`
          },
          {
            tag: "li",
            content: `${this.props.wind} m/s`
          }
        ]
      },
      {
        tag: "p",
        classList: "weather__days-3__description",
        content: this.props.description
      }
    ];
  }
}
