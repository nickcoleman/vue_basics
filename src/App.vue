<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: "app",
  components: {
    Navbar
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
