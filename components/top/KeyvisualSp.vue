<template lang="pug">
  .image-box--sp
    .inner(ref="item")
      template(v-for="( image, index ) in filteredKVImages")
        .image-wrapper
          img(:src="image" width="343" height="343"  :data-num="index")
</template>

<script>
import _ from 'lodash'
import { TweenMax, Power2, Power4 } from 'gsap'
import { mapState } from 'vuex'

export default {
    name: 'KeyvisualSp',
    data() {
        return {
            counter: 0,
            timer: null,
            slideItems: null,
            slideInnerItems: null,
            current: null,
            next: null
        }
    },
    computed: {
        ...mapState(['KVImages', 'topKVData']),
        filteredKVImages() {
            return this.topKVData
                .filter(d =>
                    ['UI/UX', 'WEB', 'ILLUSTRATION'].includes(d.categoryName)
                )
                .map(d => d.url)
        }
    },
    mounted() {
        this.init()
        this.timer = setInterval(() => {
            this.counter++
            this.slide()
        }, 3000)
    },
    destroyed() {
        clearTimeout(this.timer)
        this.timer = null
    },
    methods: {
        init() {
            this.slideItems = Array.from(
                this.$refs.item.querySelectorAll('.image-wrapper')
            )
            this.slideInnerItems = Array.from(
                this.$refs.item.querySelectorAll('img')
            )
            this.current = _.first(this.slideItems)
            TweenMax.set(_.first(this.slideItems), {
                width: '100%'
            })
            const img = this.current.querySelector('img')
            TweenMax.set(img, {
                left: 'auto',
                right: 0
            })
        },
        slideIn() {
            const img = this.next.querySelector('img')
            TweenMax.fromTo(
                this.next,
                1,
                {
                    width: '0%'
                },
                {
                    width: '100%',
                    delay: 0.16,
                    ease: Power2.easeInOut,
                    onComplete: () => {
                        this.current = this.next
                    }
                }
            )
            TweenMax.fromTo(
                img,
                1,
                {
                    x: '-100'
                },
                {
                    x: '0',
                    ease: Power2.easeInOut
                }
            )
        },
        slideOut() {
            const img = this.current.querySelector('img')
            TweenMax.fromTo(
                this.current,
                1,
                {
                    width: '100%',
                    left: 'auto',
                    right: '0'
                },
                {
                    width: '0%',
                    ease: Power4.easeInOut,
                    onComplete: () => {
                        this.resetPosition(this.current)
                    }
                }
            )
            TweenMax.fromTo(
                img,
                1,
                {
                    left: 'auto',
                    right: 0,
                    x: '0'
                },
                {
                    x: '100',
                    ease: Power4.easeInOut,
                    onComplete: () => {
                        this.resetInnerPosition(img)
                    }
                }
            )
        },
        slide() {
            this.slideOut()
            this.next = this.slideItems[this.counter % this.slideItems.length]
            this.slideIn()
        },
        resetPosition($elm) {
            TweenMax.set($elm, {
                width: '0%',
                right: 'auto',
                left: '0'
            })
        },
        resetInnerPosition($elm) {
            TweenMax.set($elm, {
                right: 'auto',
                left: '0',
                x: '0'
            })
        }
    }
}
</script>

<style scoped lang="stylus">
.image-box--sp
  position: relative
  size: 343px
  margin-bottom: 32px
  overflow: hidden
  +pc-layout()
    display: none

.inner
  size 100%

.image-wrapper
  absolute top 0 left 0
  size 0 100%
  overflow: hidden

  & > img
    absolute top 0 left 0
</style>
