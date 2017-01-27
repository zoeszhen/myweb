export class homePageCtrl {
	static $name = "homePageCtrl";
	public test;
	public show; 
	/** @ngInject */
	constructor() {
		this.show =false
	}

	public trigger(){
		this.show = true;
	}
}