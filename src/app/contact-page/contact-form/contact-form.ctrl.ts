export class ContactFormCtrl {
	static $name = "ContactFormCtrl";
	public test: boolean = false;
	constructor() {
		this.test = true;
	}
	public trigger() {
		this.test = !this.test;
	}
}