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
      { route: '', moduleId: 'test-3', title: 'test 3' },
      { route: 'test-1', moduleId: 'test-1', name: 'test 1' },
      { route: 'test-2', moduleId: 'test-2', name: 'test 2' },
      { route: 'test-3', moduleId: 'test-3', name: 'test 3' },
      { route: 'test-4', moduleId: 'test-4', name: 'test 4' },
      { route: 'test-5', moduleId: 'test-5', name: 'test 5' }
    ]);

    this.router = router;
  }
}