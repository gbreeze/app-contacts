import { Router, RouterConfiguration } from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) { }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Test App';
    config.map([
      { route: '', moduleId: 'list-1', title: 'list 1' },
      { route: 'test-1', moduleId: 'test-1', name: 'test 1' },
      { route: 'test-2', moduleId: 'test-2', name: 'test 2' },
      { route: 'list-1', moduleId: 'list-1', name: 'list 1' }
    ]);

    this.router = router;
  }
}