<template lang="pug">
  - path = "~/assets/img/works/";
  .work-modal-content(ref="content")
    .content
      .kv //-(v-if="modalData.thumbnail")
      .title {{ modalData.name }}
      p.explain(v-if="modalData.explain") {{ modalData.explain }}
      .role(v-if="modalData.role !== []")
        ul.role-list
          li.role-item CLIENT：UNIQLO
          li.role-item ART DIRECTOR：TORU OBARA
          li.role-item DESIGNER：KENTA NAKAJIMA
      .picture //-(v-if="modalData.picture")

      //- a.button--site(v-if="modalData.link" :href="modalData.link", target="_blank")
      a.button--site(href="", target="_blank")
        img(src=`${path}visit-site.svg` alt="visit site")
      button.to-top(@click="moveToTop")
</template>

<script>
import { mapGetters } from 'vuex'
import { TweenLite, Power1 } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

export default {
    name: 'WorkModalContent',
    props: {
        modalData: {
            default: function() {
                return {}
            },
            type: Object
        }
    },
    computed: {},
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
  .work-modal-content
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
    width: 100%
    height: 1334px;
    background-color: red;
    +sp-layout()
      height 476px + 193px

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
