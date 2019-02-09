<template lang="pug">
  - path = "~/assets/img/top/";
  section.top
    .image-box--sp
    .text-box
      h1.title
        img(src=`${path}title-pc.svg` alt="I AM A DESIGNER KENTA NAKAJIMA")
      ul.list
        li.item
          nuxt-link.link(:to="{name: 'works', params: { id: 'ui' }}")
            img(src=`${path}ui-white.svg` alt="UI")
        li.item
          nuxt-link.link(:to="{name: 'works', params: { id: 'web' }}")
            img(src=`${path}web-white.svg` alt="WEB")
        li.item
          nuxt-link.link(:to="{name: 'works', params: { id: 'illustration' }}")
            img(src=`${path}illust-white.svg` alt="ILLUST")
        li.item
          nuxt-link.link(:to="{name: 'works', params: { id: 'photograph' }}")
            img(src=`${path}photograph-white.svg` alt="PHOTOGRAPH")
    .image-box--pc ここに画像が入る
</template>

<script>
export default {
    name: 'Top'
}
</script>

<style lang="stylus" scoped>
  .top
    margin: 0 auto
    +pc-layout()
      display: flex
      justify-content: space-between
      max-width: $max-width
      padding-top: 32px
    +sp-layout()
      max-width: $max-width-sp
      padding-top: 68px


  .text-box
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start

  .title
    margin-bottom: 22px
    +sp-layout()
      size 230px auto
      margin-bottom: 26px
      & > img
        width: 100%

  .list
    display: flex
    justify-content: space-between
    width: 388px
    +sp-layout()
      width: 100%

  .link
    display: block
    background-color: $bg-black;
    padding: 8px 14px
    +sp-layout()
      padding: 9px 17px

    & > img
      display: block
      +sp-layout()
        size auto 9px

  .image-box--pc
    size: 391px 634px
    background-color: red;
    +sp-layout()
      display: none

  .image-box--sp
    size: 343px
    background-color: blue;
    margin-bottom: 64px
    +pc-layout()
      display: none
</style>
