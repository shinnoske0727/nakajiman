<template lang="pug">
  - path = "~/assets/img/404/"
  .error
    .image-wrapper
      img(src=`${path}pf-404.png` alt="")
    p.text
      img(src=`${path}page-not-found.svg` alt="PAGE NOT FOUND")
    a.top-button(href="/")
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
    margin-bottom 30px

.text
  margin-bottom 54px
  line-height 1
  text-align center
  +sp-layout()
    height 12px
    margin-bottom 62px
    & img
        height 100%

.top-button
  display flex
  justify-content center
  align-items center
  width 200px
  height 40px
  margin 0 auto
  background-color #000
  +sp-layout()
    width 152px
    height 36px
    & img
      height 10px
</style>
