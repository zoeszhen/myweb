/// <reference path="../../../typings/index.d.ts" />

/** @ngInject */
export function HomepageroutesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('homepage', {
			url: '/',
			component: 'fountainHomepage'
		})
		.state('aboutme', {
			url: '/',
			component: 'fountainAboutMe'
		});

}
