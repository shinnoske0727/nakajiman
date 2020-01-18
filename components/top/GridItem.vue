<template lang="pug">
  .grid-inner(v-if="firstImgSrc" ref="item" :data-type="direction")
    img(:src="firstImgSrc" :width="!isLast ? width : ''" :height="height" :data-is-last="isLast" @click="moveLink(firstImgSrc)")
    img(:src="nextImgSrc" :idth="!isLast ? width : ''" :height="height" :data-is-last="isLast" @click="moveLink(nextImgSrc)")
</template>

<script>
import _ from 'lodash'
import { mapState, mapActions } from 'vuex'
import { TweenMax, Power4 } from 'gsap'

export default {
    name: 'GridItem',
    props: {
        direction: {
            default: 'top',
            type: String
        },
        width: {
            default: 0,
            type: Number
        },
        height: {
            default: 0,
            type: Number
        },
        counter: {
            default: 0,
            type: Number
        },
        index: {
            default: 0,
            type: Number
        },
        isLast: {
            default: false,
            type: Boolean
        },
        url: {
            default: '',
            type: String
        }
    },
    data() {
        return {
            firstImgSrc: '',
            nextImgSrc: ''
        }
    },
    computed: {
        ...mapState(['currentKVImages', 'KVImages', 'topKVData']),
        positionX() {
            let x = 0
            switch (this.direction) {
                case 'right':
                    x = -1 * this.width
                    break
                case 'left':
                    x = this.width
                    break
                default:
                    break
            }
            return x
        },
        positionY() {
            let y = 0
            switch (this.direction) {
                case 'top':
                    y = this.height
                    break
                case 'bottom':
                    y = -1 * this.height
                    break
                default:
                    break
            }
            return y
        }
    },
    watch: {
        counter: function() {
            this.slide()
        }
    },
    mounted() {
        this.firstImgSrc = this.KVImages[this.KVImages.length - this.index - 1]
        this.nextImgSrc = this.KVImages[this.index]
    },
    methods: {
        ...mapActions(['registerCurrentKVImages']),
        replaceImage(firstImage, secondImage) {
            if (_.includes(['bottom', 'right'], this.direction)) {
                firstImage.src = secondImage.src
            } else {
                secondImage.src = firstImage.src
            }
        },
        resetImage() {
            if (_.includes(['bottom', 'right'], this.direction)) {
                this.nextImgSrc = this.currentKVImages[this.index]
            } else {
                this.firstImgSrc = this.currentKVImages[this.index]
            }
        },
        reset() {
            if (!this.$refs) return
            const firstImage = this.$refs.item.querySelector('img')
            const secondImage = this.$refs.item.querySelector('img:last-child')
            this.replaceImage(firstImage, secondImage)
            TweenMax.set(this.$refs.item, {
                x: 0,
                y: 0
            })
            this.resetImage()
        },
        slide() {
            const option = {
                x: this.positionX,
                y: this.positionY,
                ease: Power4.easeInOut,
                onComplete: () => {
                    this.reset()
                }
            }
            return TweenMax.to(this.$refs.item, 1.5, option)
        },
        moveLink(imagePath) {
            const current = this.topKVData.find(d => d.url === imagePath)
            this.$router.push(`/works/${current.id}`)
        }
    }
}
</script>

<style scoped lang="stylus">
.grid-inner
  line-height: 0

  &[data-type="top"]
    absolute top -100% left 0
  &[data-type="bottom"]
    absolute top 0 left 0
  &[data-type="left"]
    absolute top 0 left -100%
    display: flex
  &[data-type="right"]
    absolute top 0 left 0
    display: flex

  & > img
      cursor pointer

  & > img[data-is-last="true"]
    transform: translateX(-8px)
</style>
