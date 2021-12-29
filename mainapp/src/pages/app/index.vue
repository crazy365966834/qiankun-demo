<template>
  <div class="hello">
    startQiankun
    <router-view/>
    <div id="frame" ref="frame"></div>
  </div>
</template>

<script>
  import startQiankun from '@/micro';

  export default {
    name: 'wok',
    data() {
      return {
        msg: '43545',
      };
    },
    mounted() {
      if (!window.qiankunStarted) {
        window.qiankunStarted = true;
        startQiankun();
      }
    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
