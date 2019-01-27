<template lang="pug">
  - path = "~/assets/img/top/";
  section.top
    .text-box
      h1.title
        img(src=`${path}title-pc.svg` alt="I AM A DESIGNER KENTA NAKAJIMA")
      ul.list
        li.item
          a.link: img(src=`${path}ui-white.svg` alt="UI")
        li.item
          a.link: img(src=`${path}web-white.svg` alt="WEB")
        li.item
          a.link: img(src=`${path}illust-white.svg` alt="ILLUST")
        li.item
          a.link: img(src=`${path}photograph-white.svg` alt="ILLUST")
    .image-box ここに画像が入る
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
