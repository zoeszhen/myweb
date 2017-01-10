import * as angular from 'angular';

import { projectpage } from './project-page.cmp';

export const projectModule = 'projectpage';

angular
	.module(projectModule, [])
	.component('fountainProjectpage', projectpage)

