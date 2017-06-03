<template>
  <div class="container">
    <Search :set-search-name="setSearchName"></Search>
    <Main :search-name="searchName"></Main>
  </div>
</template>
<script>
  import Search from './Search.vue'
  import Main from './Main.vue'

  export default {
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      setSearchName (searchName) {
        this.searchName = searchName
      }
    },
    components: {
      Search, Main
    }
  }
</script>
<style></style>
