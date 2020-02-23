<template lang="pug">
  - cmnPath = "~/assets/img/common/"
  - path = "~/assets/img/about/"
  section.about
    h1.title
      img(src=`${cmnPath}txt_about.svg` alt="ABOUT")
    .inner
      .image-box
        picture.picture
          img(src=`${path}illust-about@2x.png` alt="")
      .text-box
        p.name: img(src=`${path}kenta-nakajima.svg` alt="KENTA NAKAJIMA")
        .name-box
          p.small-name 中島 健太
          p.bar |
          p.role UI Designer
        p.explain {{ description }}
</template>

<script>
import { fetchEntries } from '@/assets/helper/api'

export default {
    components: {
        name: 'about'
    },
    async asyncData() {
        const data = await fetchEntries('about')
        if (!data) return { description: {} }
        return { description: data.items[0].fields.description }
    }
}
</script>

<style lang="stylus" scoped>
.about
  +pc-layout()
    max-width $max-width
    margin 0 auto
  +sp-layout()
    padding 0 32px
.title
  size auto 23px
  padding-top $title-padding-top
  margin 0 auto 14.9vh
  line-height 0
  box-sizing: content-box
  & > img
    size 100%
  +sp-layout()
    sticky top 0 left 0
    height: 16px
    margin 0 auto 23px
    padding: $title-padding-top-sp 0;
    background-color: #fff;
    & > img
      height: 16px;
.inner
  +pc-layout()
    display flex
    justify-content: center;
.image-box
  +pc-layout()
    size 351px 413px
    margin-right 31px
  +sp-layout()
    max-width 295px
    margin: 0 auto
.picture
  display block
  size 100% auto
  img
    size 100%
.text-box
  size 404px auto
  margin-top: 114px
  +sp-layout()
    size 100% auto
    margin-top: 40px
.name
  margin-bottom 8px
  +sp-layout()
    height: 21px
    text-align: center
    margin-bottom 11px
    & > img
      height: 21px
.name-box
  display flex
  font-size 14px
  line-height 1
  margin-bottom: 28px
  +sp-layout()
    justify-content: center
.bar
  margin: 0 10px

.explain
  font-size 12px
  line-height 2
  +sp-layout()
    width: $max-width-sp
    line-height 1.83
    margin: 0 auto
    padding-bottom: 68px
</style>
