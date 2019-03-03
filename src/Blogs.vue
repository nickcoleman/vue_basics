<template>
  <div class="blogs">
    <h2>Blogs</h2>
    <input type="text" v-model="searchTerm">
    <button>Search</button>
    <div class="blog" v-for="post in filteredPosts" :key="post.id">
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
      posts: [],
      searchTerm: ""
    };
  },
  methods: {},
  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.title.match(this.searchTerm));
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(response => {
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
