<template>
  <ul class="todo-main">
    <item v-for="todo in todos" :todo="todo" :remove-todo="removeTodo" :index="$index"></item>
  </ul>
</template>

<script>
  import item from './item.vue'

  export default {
    props: ['todos', 'removeTodo'],
    components: {
      item
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
