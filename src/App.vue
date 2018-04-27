<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, html {
  background-color: rgb(192, 0, 0); /* chucknorris */
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

h1, h2, h3, h4 {
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  font-size: 14px;
}
</style>
