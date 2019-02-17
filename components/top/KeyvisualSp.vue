<template lang="pug">
  .image-box--sp
    .inner(ref="item")
      template(v-for="( image, index ) in KVImages")
        .image-wrapper
          img(:src="image" width="343" height="343"  :data-num="index")
</template>

<script>
import _ from 'lodash'
import { TweenMax, Expo } from 'gsap'
import { mapState } from 'vuex'

export default {
    name: 'KeyvisualSp',
    data() {
        return {
            counter: 0,
            timer: null,
            slideItems: null,
            current: null,
            next: null
        }
    },
    computed: {
        ...mapState(['KVImages'])
    },
    mounted() {
        this.init()
        this.timer = setInterval(() => {
            this.counter++
            this.slide()
        }, 2500)
    },
    destroyed() {
        clearTimeout(this.timer)
        this.timer = null
    },
    methods: {
        init() {
            this.slideItems = Array.from(
                this.$refs.item.querySelectorAll('img')
            )
            this.current = _.first(this.slideItems)
            TweenMax.set(_.first(this.slideItems), {
                x: 0
            })
        },
        slide() {
            this.next = this.slideItems[this.counter % this.slideItems.length]
            TweenMax.fromTo(
                this.current,
                1,
                {
                    x: '0%'
                },
                {
                    x: '100%',
                    ease: Expo.easeInOut,
                    onComplete: () => {
                        this.resetPosition(this.current)
                    }
                }
            )
            TweenMax.fromTo(
                this.next,
                1,
                {
                    x: '-100%'
                },
                {
                    x: '0%',
                    delay: 0.2,
                    ease: Expo.easeInOut,
                    onComplete: () => {
                        this.current = this.next
                    }
                }
            )
        },
        resetPosition($elm) {
            TweenMax.set($elm, {
                x: '-100%'
            })
        }
    }
}
</script>

<style scoped lang="stylus">
  .image-box--sp
    position: relative
    size: 343px
    margin-bottom: 39px
    overflow: hidden
    +pc-layout()
      display: none

  .inner
    size 100%

  .image-wrapper
    absolute top 0 left 0
    size 100%
    overflow: hidden
    & > img
      transform: translateX(-100%)

</style>
