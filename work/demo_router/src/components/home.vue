<template>
  <div>
    <h2>Home件</h2>

    <input type="text">
    <p>{{msg | json}}</p>
    <!--
      v-link
      <router-view>
    -->
    <div>
      <ul class="nav nav-tabs">
        <li>
          <a v-link="{path:'/home/news'}">News</a>
        </li>
        <li>
          <a v-link="{path:'/home/message'}">Message</a>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['msg']
  }
</script>

<style>

</style>
