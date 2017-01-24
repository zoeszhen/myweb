export class contactPageCtrl {
	static $name = "contactPageCtrl";
	public test;
	constructor(public $window) {
		this.test = $window.innerHeight + $window.scrollY;

		console.log("come to contact page");
	}
}