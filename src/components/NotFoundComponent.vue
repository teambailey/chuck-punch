<template>
<div class="not-found-component">
  <div class="not-found-component__text-wpr">
    <h2>¯\(°_o)/¯</h2>
    <h1>{{title}}</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'NotFoundComponent',
  data () {
    return {
      title: 'Dang! What you\'re looking is not to be found.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.not-found-component {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.not-found-component__text-wpr {
  text-align: center;
}

h1, h2 {
  font-size: 2em;
  margin: 0;
  font-weight: normal;
  color: grey;
}

h2 {
  font-size: 5em;
  margin-bottom: .5em;
}
</style>
