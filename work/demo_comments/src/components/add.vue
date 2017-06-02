<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="comment.username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comment.content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addComment">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    props: {
      add: {
        type: Function,
        required: true
      }
    },
    data () {
      return {
        comment: {}
      }
    },

    methods: {
      addComment () {
        // 得到输入数据的对象
        var comment = this.comment
        if (!comment.username || !comment.content) {
          return
        }
        // 添加到数组中
        this.add(comment)
        // 清除输入数据
        this.comment = {}
      }
    }
  }
</script>
<style></style>
