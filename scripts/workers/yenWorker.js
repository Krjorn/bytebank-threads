import getData from '../connectAPI.js';

addEventListener('message', e => getData(e));