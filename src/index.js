import "./scss/style.scss";
import "normalize.css";

const CITY = new URL('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9e5f732b51c403196a6a5096551e6098');

let response = fetch(CITY);
// let data = response.json();

console.log(response);


console.log(response.PromiseValue);
