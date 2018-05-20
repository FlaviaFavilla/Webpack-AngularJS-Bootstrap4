// autoreload browser in dev mode
process.env.NODE_ENV === 'development' && require('./index.html')


//  ------- IMPORT SASS FILES --------
import './scss/main.scss';

require('angular');
require("jquery");
var jQuery = window.$ = window.jQuery = require('jquery')

require('popper.js').default;

require('bootstrap');



var app = angular.module('flavia', []);

app.controller('flaviaMain', require('./controller/flaviaController').default )
app.directive('cuccioliList', require('./directive/cuccioliList').default )
