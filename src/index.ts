/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import {techsModule} from './app/techs/index';
import { homeModule } from './app/home-page/home-page.module';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import { panning } from './directive/floatimage'; 
// import {header} from './app/header';
// import {title} from './app/title';
// import {footer} from './app/footer';

import '../css/index.scss';
import '../css/font-awesome/scss/font-awesome.scss'

angular
	.module('app', [homeModule, techsModule, 'ui.router'])
	.config(routesConfig)
	.component('app', main)
	.directive('panning', panning);
  // .component('fountainHeader', header)
  // .component('fountainTitle', title)
  // .component('fountainFooter', footer);
