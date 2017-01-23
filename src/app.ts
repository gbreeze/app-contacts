import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) {}

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Test App';
    config.map([
      { route: '',              moduleId: 'test-1',   title: 'test 1'},
      { route: 'test-1',  moduleId: 'test-1', name:'test 1' }
    ]);

    this.router = router;
  }
}