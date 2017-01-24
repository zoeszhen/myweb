import * as angular from 'angular';

import { contactpage } from './contact-page.cmp';

import { contactform } from './contact-form/contact-form.cmp';
import { ContactpageroutesConfig } from "./contact-form.route";
import 'angular-ui-router';


export const contactModule = 'contactpage';

angular
	.module(contactModule, ['ui.router'])
	.config(ContactpageroutesConfig)
	.component('fountainContactpage', contactpage)
	.component('fountainContactform', contactform);
