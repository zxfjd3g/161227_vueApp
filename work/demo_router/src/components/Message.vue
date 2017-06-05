<template>
  <div>
    <ul>
      <li v-for="message in messages">
        <a :href="`#/${message.id}`">{{message.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: [
          {id: 1, title: 'Message001'},
          {id: 2, title: 'Message002'},
          {id: 3, title: 'Message003'}
        ]
      }
    }
  }
</script>

<style>

</style>
