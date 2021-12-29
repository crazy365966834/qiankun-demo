<template>
  <div class="hello">
    <h1>这里是microapp 的home</h1>
    <h1>{{ msg }}</h1>
    <button @click="onClick">点我</button>
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
        msg: '的个符合法规和发过火覆盖',
        text: '123',
      };
    },
    methods: {
      onClick() {
        this.$router.push({
          name: 't1',
          query: {id: new Date().getTime()},
        });
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
