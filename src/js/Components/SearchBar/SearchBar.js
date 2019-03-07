import Component from "../../framework/Component";

export default class SearchBar extends Component {
  constructor(host, props) {
    super(host, props);
  }

  // <section class="search-wrapper">
  //       <input type="text" name="search" id="search" class="search" />
  //       <button type="submit" class="search__btn"></button>
  //     </section>

  render() {
    return [
      {
        tag: "input",
        classList: ["search"],
        attributes: [
          {
            name: "type",
            value: "text"
          },
          {
            name: "name",
            value: "search"
          }, 
          {
            name: "id",
            value: "search"
          }
        ]
      },
      {
        tag: "button",
        classList: ["search__btn"],
        attributes: [
          {
            name: "type",
            value: "submit"
          }
        ]
      }
    ];
  }
}


