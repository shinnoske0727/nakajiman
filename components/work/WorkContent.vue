<template lang="pug">
  - path = "~/assets/img/works/";
  .work-content(ref="content")
    .content
      img.kv(:src="kvSrc")
      template(v-if="workData.name")
        .title {{ workData.name }}
      p.explain(v-if="workData.explain") {{ workData.explain }}

      .picture-wrapper
        template(v-for="pic in picSrcArray")
          img.picture(:src="pic")
      //- a.button--site(v-if="modalData.link" :href="modalData.link", target="_blank")
      a.button--site(href="", target="_blank")
        img(src=`${path}visit-site.svg` alt="visit site")
      button.to-top(@click="moveToTop")
</template>

<script>
import { TweenLite, Power1 } from 'gsap'
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
                ease: Power1.easeOut
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
    background-color: red;
    +pc-layout()
      size $max-width 539px
      margin-bottom: 96px
    +sp-layout()
      size $max-width-sp 193px
      margin-bottom: 40px

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
    word-wrap:break-word;
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
    display: block
    size 200px 40px
    line-height: 40px
    text-align: center
    margin: 112px auto
    background-color: $bg-black;
    +sp-layout()
      margin 56px auto 64px

  .button--site
    @extend $button

  .to-top
    display: block
    size 46px 25px
    margin: 0 auto
    background-image: url("~assets/img/works/icn_arrow_top_pc.svg");
    +sp-layout()
      size 23px 13px
      background-size: contain

</style>
