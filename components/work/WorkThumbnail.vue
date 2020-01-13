<template lang="pug">
  .work-thumbnail
    .image-wrapper(:data-category="contentData.postCategory.fields.categoryName" @mouseenter="showInfo" @mouseleave="hideInfo")
      template(v-if="contentData.postKv")
        img.image(:src="imageSrc" )
        .loading(:data-active="!this.isLoaded")
        .link(ref="info" @click="move({name: 'works-id', params: {id: contentData.id}})")
          p.link-text(ref="text") {{ contentData.postTitle }}
    .title {{ contentData.postTitle }}
</template>

<script>
import { mapActions } from 'vuex'
import { TweenMax, Power1 } from 'gsap'
import UA from '@/assets/helper/getUA'
import { preloadImage } from '@/assets/helper/preloadImage'

const ease = Power1.easeOut
const easeReverse = Power1.easeIn
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
        delay: 0.1,
        autoAlpha: 0,
        ease: easeReverse
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
    data() {
        return {
            isLoaded: false
        }
    },
    computed: {
        imageSrc() {
            if (!this.contentData.postKv) return
            return this.contentData.postKv.fields.file.url
        }
    },
    mounted() {
        preloadImage(this.contentData.postKv.fields.file.url).then(() => {
            this.isLoaded = true
        })
    },
    methods: {
        ...mapActions(['updateLoadedWork']),
        showInfo() {
            if (UA.isSP || !this.$refs.info || !this.$refs.text) return
            const $info = this.$refs.info
            const $text = this.$refs.text
            TweenMax.to($info, 0.5, showOption.info)
            TweenMax.fromTo($text, 0.5, hideOption.text, showOption.text)
        },
        hideInfo() {
            if (UA.isSP || !this.$refs.info || !this.$refs.text) return
            const $info = this.$refs.info
            const $text = this.$refs.text
            TweenMax.to($info, 0.5, hideOption.info)
            TweenMax.fromTo($text, 0.5, showOption.text, hideOption.text)
        },
        move(option) {
            this.updateLoadedWork('start')
            setTimeout(() => {
                this.$router.push(option)
            }, 800)
        }
    }
}
</script>

<style lang="stylus" scoped>
@keyframes prideShimmer {
    0% {
        background-position: -468px 0
    }
    100% {
        background-position: 468px 0
    }
}
.image-wrapper
  position: relative
  box-sizing border-box
  line-height: 270px;
  text-align: center

  +sp-layout()
    size $max-width-sp auto
    line-height: 193px;
    margin-bottom: 16px

.image
  display: block
  size 100% auto

.loading
  position absolute
  top: 0
  left: 0
  display: block
  size 100% 100%
  background-image linear-gradient(to right, #F1F1F2 0%, #F8F8F9 20%, #F1F1F2 40%, #F1F1F2 100%)
  background-repeat repeat-x
  animation-duration 1s
  animation-fill-mode forwards
  animation-iteration-count infinite
  animation-name prideShimmer
  animation-timing-function linear
  opacity 0
  transition opacity 0.5s cubic-bezier(0.19, 1.05, 1, 1);
  &[data-active='true']
    opacity 1

.link
  absolute top 0 left 0
  display: flex
  flex-direction: column
  justify-content: center
  align-items center
  size 100%
  text-decoration: none
  background-color: rgba(0, 0, 0, 0.9);
  opacity 0
  cursor pointer

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
