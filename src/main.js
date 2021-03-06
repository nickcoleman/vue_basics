import Vue from "vue"
import App from "./App.vue"

// global filters
Vue.filter("snippet", val => {
  if (!val || typeof val !== "string") return ""
  return val.slice(0, 50) + "..."
})

Vue.filter("search", val => {
  return val
})

new Vue({
  el: "#app",
  render: h => h(App)
})
