import Component from "../../../framework/Component";

export default class FavouriteLocations extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return [
      {
        tag: "h3",
        content: "Favourite"
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
