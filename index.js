// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Gráfico de columnas. Mi 1º gráfico
var visualization = d3plus.viz()
.container("#viz1")
.data([{"year": 1991, "name":"alpha", "value": 10},
      {"year": 1992, "name":"alpha", "value": 20},
      {"year": 1990, "name":"alpha", "value": 15},])
.type("bar")
.id("name")
.x("year")
.y("value")
.draw()

