<template lang="pug">
  section.top
    h1.title
      img(src="~/assets/img/top/title-pc.svg")
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="stylus">
  .top
    max-width: $max-width
    margin: 0 auto
    padding-top: 32px
</style>
