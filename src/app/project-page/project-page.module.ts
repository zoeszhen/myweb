import * as angular from 'angular';

import { projectpage } from './project-page.cmp';
import { projectsshow } from './projects/projects-show.cmp';
import 'angular-ui-router';

import { ProjectpageroutesConfig } from './project-page.route';


export const projectModule = 'projectpage';

angular
	.module(projectModule, ['ui.router'])
	.config(ProjectpageroutesConfig)
	.config(['$qProvider', function($qProvider) {
		$qProvider.errorOnUnhandledRejections(false);
	}])
	.component('fountainProjectpage', projectpage)
	.component('fountainProjectsshow', projectsshow);

