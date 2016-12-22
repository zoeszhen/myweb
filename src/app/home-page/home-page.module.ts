import * as angular from 'angular';

import { homepage } from './home-page.cmp';


export const homeModule = 'homepage';

angular
	.module(homeModule, [])
	.component('fountainHomepage', homepage);
