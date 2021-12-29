import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Home {
  message = 'Hello World!';

  constructor(router) {
    this.router = router;
  }

  detached(){
    console.log('home.detached')
  }
}
