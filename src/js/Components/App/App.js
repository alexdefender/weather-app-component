import Component from "../../framework/Component";
import { SearchBar } from "../SearchBar";

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
              {
                name: "checked"
              }
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
            content: "F"
          }
        ]
      }
    ];
  }
}

