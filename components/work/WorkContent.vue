<template lang="pug">
  - path = "~/assets/img/works/";
  .work-content(ref="content" v-if="workData" :data-is-picture="!workData.postType")
    .content
      template(v-if="workData.postKv.fields.file.url")
        img.kv(:src="kvSrc" :data-is-picture="!workData.postType")
      template(v-if="workData.postType")
        template(v-if="workData.postTitle")
          .title {{ workData.postTitle }}
        p.explain(v-if="workData.postDescription" v-html="nl2br(workData.postDescription)")

        .picture-wrapper
          template(v-for="pic in picSrcArray")
            img.picture(:src="pic")
        template(v-if="workData.postLink")
          a.button--site(:href="workData.postLink", target="_blank")
            img(src=`${path}visit-site.svg` alt="visit site")
        button.to-top(@click="moveToTop")
          img(src=`${path}icn_arrow_top_pc.svg`)
</template>

<script>
import { TweenLite, Expo } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

const plugins = [ScrollToPlugin]

export default {
    name: 'WorkContent',
    props: {
        workData: {
            default: function() {
                return {}
            },
            type: Object
        }
    },
    computed: {
        kvSrc() {
            if (this.workData.postKv.fields.file.url)
                return this.workData.postKv.fields.file.url
        },
        picSrcArray() {
            if (!this.workData.postPhotos.length) return
            return this.workData.postPhotos.map(photo => photo.fields.file.url)
        }
    },
    methods: {
        moveToTop: function() {
            TweenLite.to(window, 1.0, {
                scrollTo: this.$refs.content,
                ease: Expo.easeOut
            })
        },
        nl2br: function(str) {
            str = str.replace(/\r\n/g, '<br />')
            str = str.replace(/(\n|\r)/g, '<br />')
            return str
        }
    }
}
</script>

<style scoped lang="stylus">
.work-content
  margin: 0 auto
  +pc-layout()
    width: $max-width
    padding-top: 92px
    padding-bottom: 73px
  +sp-layout()
    width: $max-width-sp
    padding-top: 64px
    padding-bottom: 32px
  &[data-is-picture="true"]
    padding-bottom: 0
.kv
  +pc-layout()
    size $max-width 539px
    margin-bottom: 96px
  +sp-layout()
    size $max-width-sp 193px
    margin-bottom: 40px

  &[data-is-picture="true"]
    display: block
    size auto
    max-size $max-width 85vh
    margin: 0 auto
    +sp-layout()
      max-size 100%

.title
  margin-bottom: 48px
  font-family HiraginoSans-W6
  font-size 20px
  text-align: center
  +sp-layout()
    margin-bottom: 40px
    font-size: 14px

.explain,
.role
  width 39em
  margin: 0 auto
  font-size 14px
  line-height 2
  letter-spacing normal
  color $text-black
  +sp-layout()
    font-size: 12px
    max-width: $max-width-sp

.explain
  word-wrap: break-word;
  line-height: 2
  +pc-layout()
    margin-bottom: 96px;
  +sp-layout()
    margin-bottom: 48px;
    font-size: 12px
    line-height: 1.83
    max-width: $max-width-sp

.picture
  display: block
  width: 100%

  & + .picture
    margin-top: 24px
    +sp-layout()
      margin-top: 16px

$button
  position: relative
  display: block
  size 200px 40px
  line-height: 40px
  text-align: center
  margin: 112px auto
  background-color: $bg-black;
  +sp-layout()
    size 152px 36px
    line-height: 36px
    margin 56px auto 64px
    & > img
      height: 10px;

.button--site
  @extend $button
  +pc-layout()
    &::before
      absolute top 2px left 2px
      content: ""
      size: 196px 36px
      background-color: $bg-white;
      transform: scaleX(0)
      transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1)
      transform-origin: left center
    &:hover
      & > img
        filter: brightness(0)

      &::before
        transform: scaleX(1)

.to-top
  display: block
  size 46px 25px
  margin: 112px auto 0
  +pc-layout()
    &:hover
      img
        animation pageTopButton 0.25s ease-in

  +sp-layout()
    size 23px 13px
    margin-top: 64px
    background-size: contain
    & > img
      size 100%
</style>
