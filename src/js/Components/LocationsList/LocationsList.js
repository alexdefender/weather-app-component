import Component from "../../framework/Component";
import { FavouriteLocations } from "../FavouriteLocations";
import { SearchHistory } from "../SearchHistory";

export default class LocationsList extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    console.log("I am LocationsList class")
    return [
      {
        tag: 'label',
        classList: ['favor-hist__icon'],
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
        classList: ["favor-hist"],
        children: [
          {
            tag: FavouriteLocations,
            classList: ["favor-hist__favourite"]
          },
          {
            tag: "hr"
          },
          {
            tag: SearchHistory,
            classList: ["favor-hist__favourite"]
          }
        ]
      }
    ];
  }
}


