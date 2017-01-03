import * as angular from 'angular';

import { homepage } from './home-page.cmp';

import { aboutme } from './about-me/about-me.cmp';

import 'angular-ui-router';
import {HomepageroutesConfig} from './home-page.route';


export const homeModule = 'homepage';

angular
	.module(homeModule, ['ui.router'])
	.config(HomepageroutesConfig)
	.component('fountainHomepage', homepage)
	.component('fountainAboutMe', aboutme);
