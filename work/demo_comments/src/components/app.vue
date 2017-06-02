<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :add="add"></add>
      <list :comments="comments" :remove="remove"></list>
    </div>
  </div>
</template>
<script>
  import add from './add'
  import list from './list'

  export default {
    data () {
      return {
        comments: [
          {username: 'xfzhang', content: '太简单了'},
          {username: 'damu', content: '太复杂了'}
        ]
      }
    },

    methods: {
      add (comment) {
        this.comments.unshift(comment)
      },
      remove (comment) {
        this.comments.$remove(comment)
      }
    },

    components: {
      add, list
    }
  }
</script>
<style></style>
