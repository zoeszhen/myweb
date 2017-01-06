export class AboutMe {
	static $name = "AboutMe";
	public test: boolean = false;
	constructor() {
		this.test = true; 
	}
	public trigger(){
		this.test = !this.test;
	}
}