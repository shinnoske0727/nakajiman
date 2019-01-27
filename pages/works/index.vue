<template lang="pug">
  - path = "~/assets/img/top/";
  section.works
    p work page
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }
</script>

<style lang="stylus" scoped>
  .top
    display: flex
    justify-content: space-between
    max-width: $max-width
    margin: 0 auto
    padding-top: 32px

  .text-box
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start

  .title
    margin-bottom: 38px

  .list
    display: flex
    justify-content: space-between
    width: 338px

  .link
    display: block
    background-color: $bg-black;
    padding: 8px 14px

    & > img
      display: block

  .image-box
    size: 391px 634px
    background-color: red;
</style>
