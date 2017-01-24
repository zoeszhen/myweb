class Tech {
  constructor(
    public img: string,
    public title: string,
    public text: string,
    public text2: string
  ) {}
}


class TechsController {
  public techs: Tech[];

  /** @ngInject */
  constructor(private $http: angular.IHttpService) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data as Tech[];
      });
  }
}

export const techs: angular.IComponentOptions = {
  template: require('./techs.html'),
  controller: TechsController
};
