import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class User {
  message = 'Hello World!';

  constructor(router) {
    this.router = router;
  }

  detached(){
    console.log('user.detached')
  }
}
