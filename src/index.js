import { prepareSeriesData } from './helpers/prepareSeriesData';
import './styles/application.css';
import './images/flags-sprite.png';


const tableTemplate = require('./template/table.pug');
const data = require('./data/series.json');

const series = document.getElementById('series');
const html = tableTemplate(prepareSeriesData(data));
series.innerHTML = html;
