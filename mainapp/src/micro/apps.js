const getActiveRule = (pathname) => (location) => {
  return location.pathname === pathname;
};

const apps = [{
  name: 'vueApp',
  entry: '//localhost:10200',
  container: '#frame',
  activeRule: getActiveRule('/vue/'),
}, {
  name: 'aureliaApp',
  entry: '//localhost:8080',
  container: '#frame',
  activeRule: getActiveRule('/aurelia/'),
}];

export default apps;
