import { homePageCtrl } from "./home-page.ctrl";

export const homepage: angular.IComponentOptions = {
	template: require('./home-page.html'),
	controller: homePageCtrl,
	controllerAs: "homePageVm"
};
