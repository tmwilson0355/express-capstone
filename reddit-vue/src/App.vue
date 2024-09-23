<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RedditPost from './components/RedditPost.vue';


function returnHome() {
  router.push('/')
}
</script>

<template>
<div class="image-container">
  <img class="header-img" src="/src/assets/images/Reddit-Logo-2005-500x300.png">
</div>
<main>
  <router-view></router-view>
</main>
</template>

<style scoped>

</style>
