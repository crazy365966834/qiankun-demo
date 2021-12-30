// regenerator-runtime is to support async/await syntax in ESNext.
// If you don't use async/await, you can remove regenerator-runtime.
import './public-path';
import 'regenerator-runtime/runtime';

import render from './render.js';
import {PLATFORM} from 'aurelia-pal';

export async function configure(param) {
  console.log('configure: ', param);
}

let aurelia;
// console.log('aurelia', aurelia);

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  // document.querySelector('#aureliaApp').innerHTML = 'Hello, render with jQuery';
  render().then(aurelia => {
    console.log('res', aurelia);
    aurelia.setRoot(PLATFORM.moduleName('app'), document.querySelector('#aureliaApp'));
  });
}

export async function bootstrap(props) {
  console.log('[vue] vue app bootstraped', props);
  aurelia = await render();
  console.log('aurelia', aurelia);
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  const {container} = props;
  aurelia.setRoot(PLATFORM.moduleName('app'),
    container ? container.querySelector('#aureliaApp') : document.querySelector('#aureliaApp'));
}

export async function unmount() {
  // instance.$destroy();
  // instance.$el.innerHTML = '';
}
