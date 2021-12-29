// regenerator-runtime is to support async/await syntax in ESNext.
// If you don't use async/await, you can remove regenerator-runtime.
import 'regenerator-runtime/runtime';
import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';

import {bootstrap} from 'aurelia-bootstrapper';

export default function render() {
  return bootstrap(async aurelia => {
    console.log('bootstrap', aurelia.destory);
    aurelia.use
      .standardConfiguration()
      .feature(PLATFORM.moduleName('resources/index'));

    aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

    if (environment.testing) {
      aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
    }

    return aurelia.start();
  });
}
