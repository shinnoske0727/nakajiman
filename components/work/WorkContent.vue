<template lang="pug">
  - path = "~/assets/img/works/";
  .work-content(ref="content" v-if="workData.works")
    .content
      template(v-if="workData.works.kv")
        img.kv(:src="kvSrc" :data-is-picture="workData.layout === 'picture'")
      template(v-if="workData.layout === 'article'")
        template(v-if="workData.name")
          .title {{ workData.name }}
        p.explain(v-if="workData.explain") {{ workData.explain }}

        .picture-wrapper
          template(v-for="pic in picSrcArray")
            img.picture(:src="pic")
        template(v-if="workData.link")
          a.button--site(:href="workData.link", target="_blank")
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
            if (!this.workData.works.kv) return
            return require(`@/assets/data/${this.workData.works.kv}`)
        },
        picSrcArray() {
            if (!this.workData.works.pic.length) return
            return this.workData.works.pic.map(pic =>
                require(`@/assets/data/${pic}`)
            )
        }
    },
    methods: {
        moveToTop: function() {
            TweenLite.to(this.$parent.$refs.modal, 1.0, {
                scrollTo: this.$refs.content,
                ease: Expo.easeOut
            })
        }
    }
}
</script>

<style scoped lang="stylus">
  .work-content
    padding-top: 64px
    margin: 0 auto
    +pc-layout()
      width: $max-width
      padding-bottom: 73px
    +sp-layout()
      width: $max-width-sp
      padding-bottom: 32px

  .kv
    +pc-layout()
      size $max-width 539px
      margin-bottom: 96px
    +sp-layout()
      size $max-width-sp 193px
      margin-bottom: 40px

    &[data-is-picture="true"]
      size auto
      max-size $max-width 90vh
      margin-bottom: 0
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
    margin-bottom: 2em;
    word-wrap: break-word;
    +sp-layout()
      font-size: 12px
      max-width: $max-width-sp

  .role
    margin: 0 auto 96px
    +sp-layout()
      margin: 0 auto 48px

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
        content: ""
        width: 0
        transition: width 0.35s cubic-bezier(0.22, 0.61, 0.36, 1)
      &:hover
        & > img
          filter: brightness(0)

        &::before
          absolute top 0 left 0
          content: ""
          width: 100%
          height: 38px
          background-color: $bg-white;

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
