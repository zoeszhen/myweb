import { contactPageCtrl } from "./contact-page.ctrl";

export const contactpage: angular.IComponentOptions = {
	template: require('./contact-page.html'),
	controller: contactPageCtrl,
	controllerAs: "contactPageVm"
};
