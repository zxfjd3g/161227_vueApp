<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['setSearchName'],
    data () {
      return {
        searchName: ''
      }
    },
    methods: {
      search () {
        var searchName = this.searchName.trim()
        if(!searchName) {
          return
        }

        this.setSearchName(searchName)
      }
    },
  }
</script>

<style>

</style>
