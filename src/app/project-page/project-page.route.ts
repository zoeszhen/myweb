/// <reference path="../../../typings/index.d.ts" />

/** @ngInject */
export function ProjectpageroutesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('projectpage', {
			parent: 'app',
			url: '/projectpage',
			component: 'fountainProjectpage'
		})
		.state('projectsshow', {
			url: '/projectsshow',
			component: 'fountainProjectsshow'
		});

}
