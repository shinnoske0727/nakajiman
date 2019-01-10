<template lang="pug">
    .home
        img(src="../assets/logo.png" alt="Vue logo")
        HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
