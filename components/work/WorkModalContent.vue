<template lang="pug">
  - path = "~/assets/img/works/";
  .work-modal-content(ref="content")
    .content
      .kv
      .title UTGP2018
      p.explain
        | あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      .role
        ul.role-list
          li.role-item CLIENT：UNIQLO
          li.role-item ART DIRECTOR：TORU OBARA
          li.role-item DESIGNER：KENTA NAKAJIMA
      .picture

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
    computed: {
        ...mapGetters(['modalData'])
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
  .work-modal-content
    width: 960px
    padding-top: 64px
    margin: 0 auto
    padding-bottom: 73px

  .kv
    size 960px 539px
    margin-bottom: 96px
    background-color: red;

  .title
    margin-bottom: 48px
    font-family HiraginoSans-W6
    font-size 20px
    text-align: center

  .explain,
  .role
    width 39em
    margin: 0 auto
    font-size 14px
    line-height 2
    letter-spacing normal
    color $text-black
  .explain
    margin-bottom: 2em;
  .role
    margin: 0 auto 96px

  .picture
    width: 100%
    height: 1334px;
    background-color: red;

  $button
    display: block
    size 200px 40px
    line-height: 40px
    text-align: center
    margin: 112px auto
    background-color: $bg-black;

  .button--site
    @extend $button

  .to-top
    display: block
    size 46px 25px
    margin: 0 auto
    background-image: url("~assets/img/works/icn_arrow_top_pc.svg");

</style>
