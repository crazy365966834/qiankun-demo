<template>
  <div class="hello">
    <h1>这里是 microapp 的test</h1>
    <button @click="onClick1">点我1</button>
<!--    <button @click="onClick2">点我2</button>-->
    <label>
      <input v-model="text"/>
      <div>{{text}}</div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: '测试测试',
        text: '123',
      };
    },

    methods: {
      onClick1() {
        this.$router.push({
          name: 'h1',
          query: {id: new Date().getTime()},
        });
      },
      onClick2() {
        history.pushState({
          msg: '123',
        }, '', '/home');
      },
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
