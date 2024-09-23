<script setup>
import router from '@/router';
import { ref } from 'vue';

let votes = ref('')
let image = ref('')
let title = ref('')
let author = ref('')
let subreddit = ref('')

function addNewPost() {
  let options = {
    method: "POST",
    body: JSON.stringify({
      votes: votes.value,
      image: image.value,
      title: title.value,
      author: author.value,
      subreddit: subreddit.value
    }),
    headers: {
      Accept:"application/json",
      "Content-Type": "application/json"
    }
  }

  fetch("http://localhost:3000/newpost", options)
  .then((response) => {
    return response.json()
  })
 .then(data => {
    router.push('/')
  })
}
</script>

<template>
<div class="newPostForm">
    <label for="votes">Votes:</label>
    <input type="text" id="votes" v-model="votes">
    <label for="image">Image:</label>
    <input type="text" id="image" v-model="image">
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="title">
    <label for="author">Author:</label>
    <input type="text" id="author" v-model="author">
    <label for="subreddit">Subreddit:</label>
    <input type="text" id="subreddit" v-model="subreddit">
    <button class="submitBtn" @click="addNewPost()">Submit</button>
</div>
</template>

<style scoped>
.newPostForm {
    display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

input, label {
    margin-bottom: 15px;
}

.submitBtn {
    background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}
</style>