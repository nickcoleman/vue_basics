<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar/>
    <Blogs/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Blogs from "./Blogs";
export default {
  name: "app",
  components: {
    Navbar,
    Blogs
  },
  data: () => ({
    title: "My First Vue.js App"
  }),
  methods: {}
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
