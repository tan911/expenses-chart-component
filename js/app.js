import Chart from '../node_modules/chart.js/auto';

const canvas = document.querySelector('#chart');

async function init() {
  const path = '../data/data.json';
  const resp = await fetch(path);
  const data = await resp.json();

  console.log(data);

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: data.map((row) => row.day),
    },
  });
}

init();
