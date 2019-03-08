import Component from "../../framework/Component";

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
            tag: 'h1',
            content: "Kiev, Ukraine"
          },
          {
            tag: "p",
            content: "February 28, 00:00 AM",
          },
          {
            tag: "div",
            classList: "weather__today__main-values",
            children: [
              {
                tag: "p",
                classList: "weather__today__temp",
                content: "1°"
              },
              {
                tag: "ul",
                children: [
                  {
                    tag: 'li',
                    content: "0 m/s",
                  },
                  {
                    tag: 'li',
                    content: "Feels like: 2°",
                  },
                  {
                    tag: 'li',
                    content: "Humidity: 90%",
                  }
                ]
              },
              {
                tag: "img",
                classList: "weather__today__img",
                attributes: [
                  {
                    name: "src",
                    value: "img/cloudy_night.png"
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


