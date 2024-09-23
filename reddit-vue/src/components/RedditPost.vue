<script setup>
import { ref } from 'vue';
const props = defineProps(['post'])
const upvoted = ref(false)
const id = ref(props.post.id)

function upvotePost(event) {
    const {post} = props
    upvoted.value = true
    const body = JSON.stringify({...post, votes: post.votes++})

  let options = {
    
    "method": "PUT",
    "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body
}
  

  fetch(`http://localhost:3000/${id.value}`, options)
  .then((response) => {
    return response.json()
  })
  .then(data => {
  })
}

function downvotePost() {
    const {post} = props
    upvoted.value = false
    const body = JSON.stringify({...post, votes: post.votes--})

  let options = {
    
    "method": "PUT",
    "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body
}
  

  fetch(`http://localhost:3000/${id.value}`, options)
  .then((response) => {
    return response.json()
  })
  .then(data => {
  })
}


</script>

<template>
<div class="post-container">
  <div class="card">
    <div class="votes-section">
      <img @click="upvotePost()" class="upvote" src="/src/assets/images/Screenshot 2024-09-20 at 9.48.50 AM.png">
      <p>{{ post.votes }}</p>
      <img @click="downvotePost()" class="downvote" src="/src/assets/images/Screenshot 2024-09-20 at 9.49.20 AM.png">
    </div>
    <div class="image-section">
      <img class="post-image" :src="post.image">
    </div>
    <div class="text-section">
      <h4>{{ post.title }}</h4>
      <p>submitted by {{ post.author }} to r/{{ post.subreddit }}</p>
          <div class="tag-section">
            <p>save</p>
            <p>share</p>
            <p>save</p>
            <p>hide</p>
            <p>report</p>
          </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.card {
  width: 100vw;
  height: auto;
  display: flex;
  border: 2px solid lightblue;
  gap: 10px;
  align-items: center;
}

.tag-section {
  display: flex;
  /* justify-content: space-evenly; */
  /* height: 105px; */
  /* width: 100vw; */
 gap: 20px;

}

.text-section {
  width: 100vw;
}

.upvote, .downvote {
  width: 25px;
  height: 25px;
}



.image-section {
  display: flex;
  align-self: center;
}

.post-image {
  width: 75px;
  height: 60px;
}
</style>
