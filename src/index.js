// autoreload browser in dev mode
process.env.NODE_ENV === 'development' && require('./index.html')


//  ------- IMPORT SASS FILES --------
import './scss/main.scss';

require('angular');
require('bootstrap');
require("jquery");

angular.module('app', []);



//  ------- TEST JS --------
console.log('ok');
