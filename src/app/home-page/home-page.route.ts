/// <reference path="../../../typings/index.d.ts" />

/** @ngInject */
export function HomepageroutesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('homepage', {
			parent: 'app',
			url: '/home',
			component: 'fountainHomepage'
		})
		.state('aboutme', {
			url: '/me',
			component: 'fountainAboutMe'
		});

}
