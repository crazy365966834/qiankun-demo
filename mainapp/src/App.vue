<template>
  <div id="root">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="container">mainapp</div>
    <button @click="doRoute('/home')">转home</button>
    <button @click="doRoute('/test')">body</button>
    <button @click="doRoute('/app/#/home')">转vue/home</button>
    <button @click="doRoute('/app/#/test')">转vue/test</button>
    <button @click="doRoute('/spms/#/home')">转spms/home</button>
    <button @click="doRoute('/spms/#/user')">转spms/test</button>

    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        menu: [
          {
            key: 'Home',
            title: '主页',
            path: '/',
          },
        ],
      };
    },
    watch: {
      $route(to, from) {
        console.log('mainapp.routeChanged', to, from);
      },
    },
    methods: {
      doRoute(path) {
        this.$router.push({
          path: path,
        });
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
