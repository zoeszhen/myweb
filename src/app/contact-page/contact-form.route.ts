/// <reference path="../../../typings/index.d.ts" />

/** @ngInject */
export function ContactpageroutesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('contactpage', {
			parent: 'app',
			url: '/contactpage',
			component: 'fountainContactpage'
		})
		.state('contactform', {
			url: '/contactform',
			component: 'fountainContactform'
		});

}
