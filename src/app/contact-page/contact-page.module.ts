import * as angular from 'angular';

import { contactpage } from './contact-page.cmp';
import 'angular-ui-router';


export const contactModule = 'contactpage';

angular
	.module(contactModule, ['ui.router'])
	.component('fountainContactpage', contactpage);
