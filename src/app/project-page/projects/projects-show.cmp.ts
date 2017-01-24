import { ProjectsShowCtrl } from "./projects-show.ctrl";

export const projectsshow: angular.IComponentOptions = {
	template: require('./projects-show.html'),
	controller: ProjectsShowCtrl,
	controllerAs: "projectshowVm"
};
