import * as angular from "angular";
export class MainCtrl {
	static $name = "MainCtrl"
	public isClose: boolean;
	public test = "sjflsjflsjfl";
	
	constructor() {
		console.log("main");
		this.isClose = true;
	}

	public triggerMenu() {
		console.log("trigger")
		this.isClose = !this.isClose;
	}
}