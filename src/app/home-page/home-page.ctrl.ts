export class homePageCtrl {
	static $name = "homePageCtrl";
	public test;
	/** @ngInject */
	constructor(public $window) {
		this.test = $window.innerHeight + $window.scrollY;

		console.log("come to home page");
	}
}