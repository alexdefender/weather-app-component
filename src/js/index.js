import "../css/style.scss";
import "normalize.css";
import {App} from "./Components/App" 

new App(document.getElementById('app'));




// const CITY = new URL(
//   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9e5f732b51c403196a6a5096551e6098"
// );

// // const loadData = () => {
//   // let response = fetch(CITY);
//   // console.log(response);
//   // let jso1n = response.json();
//   // console.log(jso1n);
// // };

// // loadData();

// fetch(CITY)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });
