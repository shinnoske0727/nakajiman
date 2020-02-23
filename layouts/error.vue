<template lang="pug">
  - path = "~/assets/img/404/"
  .error
    .image-wrapper
      img(src=`${path}pf-404.png` alt="")
    p.text
      img(src=`${path}page-not-found.svg` alt="PAGE NOT FOUND")
    a.button(href="/")
      img(src=`${path}go-back.svg` alt="GO BACK")
</template>

<script>
export default {
    layout: 'none'
}
</script>

<style scoped lang="stylus">
.error
  padding-top 64px

.image-wrapper
  width 342px
  margin 0 auto 32px
  & img
    width 100%
  +sp-layout()
    width 295px
    margin-bottom 34px

.text
  margin-bottom 54px
  line-height 1
  text-align center
  +sp-layout()
    margin-bottom 60px

.button
  display flex
  justify-content center
  align-items center
  width 200px
  height 40px
  margin 0 auto
  background-color #000
</style>
