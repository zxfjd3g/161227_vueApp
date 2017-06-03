<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <list :todos="todos"></list>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
  import header from './header.vue'
  import list from './list.vue'
  import footer from './footer.vue'
  export default {
    data () {
      return {
        todos: [
          {title: '吃饭', complete: false},
          {title: '睡觉', complete: true},
          {title: '打代码', complete: false}
        ]
      }
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      }
    },

    components: {
      'todo-header': header,
      list,
      'todo-footer': footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
