import * as angular from "angular";
export class MainCtrl {
	static $name = "MainCtrl"
	public isClose: boolean;
	public step: number = 0;
	
	constructor() {
		this.isClose = true;
	}

	public triggerMenu() {
		this.isClose = !this.isClose;
	}
	public goToStep(step){
		this.step = step;
		this.triggerMenu();
	}
}