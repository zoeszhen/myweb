/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import {techsModule} from './app/techs/index';
import { homeModule } from './app/home-page/home-page.module';
import { projectModule } from './app/project-page/project-page.module';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import { panning } from './directive/floatimage'; 

import { mouseenter } from './directive/mouseenter'; 
// import {header} from './app/header';
// import {title} from './app/title';
// import {footer} from './app/footer';

import '../css/index.scss';
import '../css/font-awesome/scss/font-awesome.scss';
import "../node_modules/angular-animate/angular-animate.js";

angular
	.module('app', [homeModule, projectModule, techsModule, 'ui.router', 'ngAnimate'])
	.config(routesConfig)
	.component('app', main)
	.directive('panning', panning)
	.directive('mouseenter', mouseenter);
  // .component('fountainHeader', header)
  // .component('fountainTitle', title)
  // .component('fountainFooter', footer);
