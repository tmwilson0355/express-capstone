<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import RedditPost from '@/components/RedditPost.vue';

const router = useRouter()

function goToNewPostPage() {
  router.push('/newpost')
}

let redditFeed = ref([])
const votes = ref({})
fetch("http://localhost:3000")
.then((response) => {
  return response.json()
}).then((content) => {
  console.log(content)
  redditFeed.value = content
})
</script>

<template>
<div class="button-container">
  <button class="newPostBtn" @click="goToNewPostPage()">Submit a new text post</button>
</div>
<div class="posts-container">
<RedditPost v-for="post in redditFeed" :post = "post"></RedditPost>
</div>
</template>
