<template>
  <div>
    <ul>
      <li v-for="news in newsArr">{{news}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newsArr: ['news001', 'news002', 'news003']
      }
    }
  }
</script>

<style>

</style>
