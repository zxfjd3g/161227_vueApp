<template>
  <div>
    <h2 v-show="loading">loading...</h2>
    <p v-show="lastUrl">octocat's last gist is <a :href="lastUrl">here</a></p>
  </div>
</template>
<script>
  /*
   1. 使用axios发送ajax请求
   * https://github.com/pagekit/vue-resource
   * https://github.com/mzabriskie/axios
   2. 测试接口
   * https://api.github.com/users/octocat/gists
   */
  import axios from 'axios'
  export default {
    data () {
      return {
        loading: true,
        lastUrl: ''
      }
    },
    /* created () {
      // 发送ajax请求获取数据
      var url = 'https://api.github.com/users/octocat/gists'
      this.$http.get(url).then((response) => {
        console.log(response)
        this.lastUrl = response.body[0].html_url
        this.loading = false
      }, function (response) {
        console.log('出错了')
      })
    }*/

    created () {
      // 发送ajax请求获取数据
      var url = 'https://api.github.com/users/octocat/gists'
      axios.get(url)
        .then(response => {
          console.log(response)
          this.lastUrl = response.data[0].html_url
          this.loading = false
        })
        .catch(error => {
          console.log('出错了' + error)
        })
    }

  }
</script>
<style></style>
