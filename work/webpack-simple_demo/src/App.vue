<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>xxxxx</h2>
    <div id="box1"></div>
    <div id="box2"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue2222!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  color: red;

}
</style>
