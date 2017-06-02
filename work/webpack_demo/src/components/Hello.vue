<template>
  <h1>{{title}}</h1>
</template>
<script>
  export default {
    data () {
      return {
        title: 'hello vue component title'
      }
    }
  }
</script>
<style scoped>
  h1 {
    color: red;
  }
</style>
