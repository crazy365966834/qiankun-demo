const getActiveRule = (pathname) => (location) => {
  return location.pathname === pathname;
};

const apps = [{
  name: 'VueMicroApp',
  entry: '//localhost:10200',
  container: '#frame',
  activeRule: getActiveRule('/app/'),
}, {
  name: 'SpmsApp',
  entry: '//localhost:8080',
  container: '#frame',
  activeRule: getActiveRule('/spms/'),
}];

export default apps;
