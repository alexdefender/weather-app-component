import { SearchBar } from "../SearchBar/index";

export default class SearchHistory extends SearchBar {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: "h3",
        content: "History"
      },
      {
        tag: "div",
        content: "Kiev",
        children: [
          {
            tag: "button",
            classList: ["fa", "fa-times"]
          }
        ]
      }
    ];
  }
}
