<template>
  <div id="online-friends">
    <h2>Online Friends</h2>
    <div v-for="(friend, index) in friends" :key="index">
      <span v-if="friend.online" @click="unfriend(friend.name)">{{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineFriends",
  props: ["friends"],
  data: () => ({}),
  methods: {
    unfriend(name) {
      this.$emit("delete", { name });
    }
  }
};
</script>

<style>
</style>