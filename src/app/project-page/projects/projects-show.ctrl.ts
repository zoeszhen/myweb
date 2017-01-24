class Data {
	constructor(
	    public img: string,
		public title: string,
		public text: string,
		public link: string
	){}
}

export class ProjectsShowCtrl {
	static $name = "ProjectsShowCtrl";
	public test: boolean = false;
	public dataList: Data[]; 


	//@ngInject
	constructor(private $http: angular.IHttpService) {
		this.$http
			.get('app/project-page/projects/projects.json')
			.then((response) => {
				console.log("response", response);
				this.dataList = response.data as Data[];
				console.log("this.dataList", this.dataList);
			})
			.catch((err)=>{
				console.log("err", err);
			})
		
	}

	public trigger() {
		this.test = !this.test;
	}
}