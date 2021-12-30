<template>
  <div id="root">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="container">mainapp</div>
    <button @click="doRoute('/home')">goto home</button>
    <button @click="doRoute('/test')">goto body</button>
    <button @click="doRoute('/vue/#/home')">goto vue/home</button>
    <button @click="doRoute('/vue/#/test')">goto vue/test</button>
    <button @click="doRoute('/aurelia/#/home')">goto aurelia/home</button>
    <button @click="doRoute('/aurelia/#/user')">goto aurelia/test</button>

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
