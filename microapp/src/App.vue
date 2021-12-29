<template>
  <div id="microapp">
    microapp

    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      console.log('micro-app.mounted', this.$route);
    },

    watch: {
      $route(to, from) {
        console.log('microapp.routeChanged', to, from);
      },
    },
  };
</script>

<style>
  #microapp {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
