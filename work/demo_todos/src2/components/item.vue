<template>
  <li @mouseenter="chageStyle(true)" @mouseleave="chageStyle(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="removeItem">删除</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: Object,
      removeTodo: Function,
      index: Number
    },
    data () {
      return {
        bgColor: 'white',
        isShow: false
      }
    },
    methods: {
      chageStyle (isEnter) {
        if (isEnter) {
          this.bgColor = 'gray'
          this.isShow = true
        } else {
          this.bgColor = 'white'
          this.isShow = false
        }
      },
      removeItem () {
        if (window.confirm(`确定删除${this.todo.title}吗?`)) {
          this.removeTodo(this.index)
        }
      }
    }
  }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
