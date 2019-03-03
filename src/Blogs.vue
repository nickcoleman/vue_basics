<template>
  <div class="blogs">
    <h2>Blogs</h2>
    <div class="blog" v-for="post in posts" :key="post.id">
      <div class="title">Title: {{ post.title }}</div>
      <div>{{ post.body | snippet }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data() {
    return {
      posts: []
    };
  },
  methods: {},
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(response => {
        console.log("xxx posts", response.data);
        this.posts = response.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.blog {
  margin-bottom: 20px;
}
.title {
  font-weight: bold;
}
</style>
