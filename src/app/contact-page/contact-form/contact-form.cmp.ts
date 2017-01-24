import { ContactFormCtrl } from "./contact-form.ctrl";

export const contactform: angular.IComponentOptions = {
	template: require('./contact-form.html'),
	controller: ContactFormCtrl,
	controllerAs: "contactVm"
};