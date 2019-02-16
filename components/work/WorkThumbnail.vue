<template lang="pug">
  .work-thumbnail
    .image-wrapper(:data-category="contentData.category" @mouseenter="showInfo" @mouseleave="hideInfo")
      template(v-if="contentData.works && contentData.works.kv")
        img.image(:src="imageSrc")
        nuxt-link.link(:to="{name: 'works-id', params: {id: contentData.id}}" ref="info")
          p.link-text(ref="text") {{ contentData.name }}
    .title {{ contentData.name }}
</template>

<script>
import { TweenMax, Power1 } from 'gsap'
import UA from '@/assets/helper/getUA'

const ease = Power1.easeOut
const showOption = {
    info: {
        autoAlpha: 1,
        ease
    },
    text: {
        delay: 0.1,
        y: 0,
        autoAlpha: 1,
        ease
    }
}

const hideOption = {
    info: {
        autoAlpha: 0,
        ease
    },
    text: {
        y: 10,
        autoAlpha: 0,
        ease
    }
}

export default {
    name: 'WorkThumbnail',
    props: {
        contentData: {
            default: () => '',
            type: Object
        }
    },
    computed: {
        imageSrc() {
            if (!this.contentData.works.kv) return
            return require(`@/assets/data/${this.contentData.works.kv}`)
        }
    },
    methods: {
        showInfo() {
            if (UA.isSP) return
            const $info = this.$refs.info.$el
            const $text = this.$refs.text
            TweenMax.to($info, 0.5, showOption.info)
            TweenMax.fromTo($text, 0.5, hideOption.text, showOption.text)
        },
        hideInfo() {
            if (UA.isSP) return
            const $info = this.$refs.info.$el
            const $text = this.$refs.text
            TweenMax.to($info, 0.5, hideOption.info)
            TweenMax.fromTo($text, 0.5, showOption.text, hideOption.text)
        }
    }
}
</script>

<style lang="stylus" scoped>
  .image-wrapper
    position: relative
    min-size 480px 270px
    background-color red
    box-sizing border-box
    line-height: 270px;
    text-align: center

    &[data-category="ui"]
      background-color: #FFC1CF;

    &[data-category="web"]
      background-color: #E8FFB6;

    &[data-category="illustration"]
      background-color: #E2A0FF;

    &[data-category="photograph"]
      background-color: #C4F5FC;

    +sp-layout()
      size 343px 193px
      min-size 343px 193px
      line-height: 193px;
      margin-bottom: 16px

  .image
    display: block
    size 100% auto

  .link
    absolute top 0 left 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items center
    size 100%
    text-decoration: none
    background-color: rgba(177, 178, 176, 0.9);
    opacity 0

  .link-text
    font-size: 16px
    color: $text-white

  .title
    +pc-layout()
      display: none
    margin-bottom: 56px
    text-align: center
    font-size 12px

</style>
