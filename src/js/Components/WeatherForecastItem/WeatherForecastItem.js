import Component from "../../framework/Component";
import imageUrl from "../../../img/cloudy.png";


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
            content: "Thursday"
          },
          {
            tag: "p",
            content: "28/02/2019"
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
            content: "0° | 2°"
          },
          {
            tag: "li",
            content: "0 m/s"
          }
        ]
      },
      {
        tag: "p",
        classList: "weather__days-3__description",
        content: "Overcast clouds"
      }
    ];
  }
}
