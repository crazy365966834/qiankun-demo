export class App {
  message = 'Hello World!';

  created(){
    console.log('app.created')
  }

  configureRouter(config, router) {
    console.log('configureRouter',config,router);
    config.title = 'Aurelia';
    config.map([
      {route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home'), nav: true, title: 'home'},
      {route: 'user', name: 'user', moduleId: PLATFORM.moduleName('./user'), nav: true, title: 'Users'},
    ]);

    this.router = router;
  }
}
