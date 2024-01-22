import choosePrice from './printPrice.js';

function getCurrentHour() {
    const date = new Date();
    const hour = date.toLocaleTimeString('pt-BR');
    return hour;
}

function updateChart(chart, label, newData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach(dataset => dataset.data.push(newData));
    chart.update();
}

function renderChart(event, name, chart) {
    const hour = getCurrentHour();
    const value = event.data.ask;
    choosePrice(name, value);
    updateChart(chart, hour, value);
}

const dollarCanvas = document.getElementById('canvasDolar');
const dollarChart = new Chart(dollarCanvas, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
                label: 'Dólar',
                data: [],
                backgroundColor: '#00DEA3',
                borderColor: '#00DEA3',
                borderWidth: 1
            }]
    }
});

const dollarWorker = new Worker('./scripts/workers/dollarWorker.js', {type: 'module'});
dollarWorker.postMessage('USD');
dollarWorker.addEventListener('message', e => renderChart(e, 'dolar', dollarChart));

const yenCanvas = document.getElementById('canvasIene');
const yenChart = new Chart(yenCanvas, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
                label: 'Iene',
                data: [],
                backgroundColor: '#5E74C7',
                borderColor: '#5E74C7',
                borderWidth: 1
            }]
    }
});

const yenWorker = new Worker('./scripts/workers/yenWorker.js', {type: 'module'});
yenWorker.postMessage('JPY');
yenWorker.addEventListener('message', e => renderChart(e, 'iene', yenChart));

const euroCanvas = document.getElementById('canvasEuro');
const euroChart = new Chart(euroCanvas, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
                label: 'Euro',
                data: [],
                backgroundColor: '#F49A3F',
                borderColor: '#F49A3F',
                borderWidth: 1
            }]
    }
});

const euroWorker = new Worker('./scripts/workers/euroWorker.js', {type: 'module'});
euroWorker.postMessage('EUR');
euroWorker.addEventListener('message', e => renderChart(e, 'euro', euroChart));