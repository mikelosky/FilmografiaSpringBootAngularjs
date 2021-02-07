'use strict';

var app = angular.module('filmografy', ['ngRoute', 'main', 'newcp', 'newat', 'newfi', 'selectattori', 'selectcasaprod', 'selectfilm', 'modattore', 'modcasaprod', 'modfilm', 'remselectattori', 'remselectcasaproduttrici', 'remselectfilm']);
app.config(function config($routeProvider, $locationProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/home',
		})
		.when('/home', {
			template: '<main></main>'
		})
		.when('/newcp', {
			template: '<newcp></newcp>'
		})
		.when('/newat', {
			template: '<newat></newat>'
		})
		.when('/newfi', {
			template: '<newfi></newfi>'
		})
		.when('/selectattori', {
			template: '<selectattori></selectattori>'
		})
		.when('/selectcasaprod', {
			template: '<selectcasaprod></selectcasaprod>'
		})
		.when('/selectfilm', {
			template: '<selectfilm></selectfilm>'
		})
		.when('/modattore', {
			template: '<modattore></modattore>'
		})
		.when('/modcasaprod/:idkey', {
			template: '<modcasaprod></modcasaprod>'
		})
		.when('/modcasaprod', {
			template: '<modcasaprod></modcasaprod>'
		})
		.when('/modfilm', {
			template: '<modfilm></modfilm>'
		})
		.when('/remselectattori', {
			template: '<remselectattori></remselectattori>'
		})
		.when('/remselectcasaproduttrici', {
			template: '<remselectcasaproduttrici></remselectcasaproduttrici>'
		})
		.when('/remselectfilm', {
			template: '<remselectfilm></remselectfilm>'
		})
		.otherwise({
			redirectTo: '/home'
		});
}
);
