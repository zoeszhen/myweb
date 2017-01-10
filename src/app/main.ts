import { MainCtrl } from "./main.ctrl";

export const main: angular.IComponentOptions = {
  template: require('./main.html'),
  controller: MainCtrl,
  controllerAs: "mainVm"
};
