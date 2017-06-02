<template>
  <div>
    <hello></hello>
    <img class="logo" src="./assets/logo.png">
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
  .logo {
    width: 100px;
    height: 100px;
  }
</style>
