// Import stylesheets
import './style.css';

//Gráfico de columnas. Mi 1º gráfico
d3plus
  .viz()
  .container('#viz1')
  .data([
    { year: 1991, name: 'alpha', value: 15 },
    { year: 1992, name: 'alpha', value: 20 },
  ])
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();

//Gráfico de columnas multiples
d3.json(
  'https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json',
  function (data) {
    d3plus
      .viz()
      .container('#viz2')
      .data(data)
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .axes({ ticks: 'false' })
      .draw();
  }
);

//Caja y Bigotes
var data1 = [
  { year: 1991, name: 'alpha', value: 15 },
  { year: 1991, name: 'beta', value: 10 },
  { year: 1991, name: 'gamma', value: 5 },
  { year: 1991, name: 'delta', value: 50 },
  { year: 1992, name: 'alpha', value: 20 },
  { year: 1992, name: 'beta', value: 10 },
  { year: 1992, name: 'gamma', value: 10 },
  { year: 1992, name: 'delta', value: 43 },
  { year: 1993, name: 'alpha', value: 30 },
  { year: 1993, name: 'beta', value: 40 },
  { year: 1993, name: 'gamma', value: 20 },
  { year: 1993, name: 'delta', value: 17 },
  { year: 1994, name: 'alpha', value: 60 },
  { year: 1994, name: 'beta', value: 60 },
  { year: 1994, name: 'gamma', value: 25 },
  { year: 1994, name: 'delta', value: 32 },
];

d3plus
  .viz()
  .container('#viz3')
  .data(data1)
  .type('box')
  .id('name')
  .x('year')
  .y('value')
  .draw();
