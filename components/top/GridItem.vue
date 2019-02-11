<template lang="pug">
  .grid-inner(ref="item" :data-type="direction")
    img(:src="firstImgSrc")
    img(:src="nextImgSrc")
</template>

<script>
  import _ from 'lodash'
import { TweenMax } from 'gsap'
import getRandomHex from '@/assets/helper/getRandomHex'

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
      }
    },
    data() {
        return {
            firstImgSrc: `http://placehold.it/${this.width}x${this.height}/${getRandomHex()}/`,
            nextImgSrc: `http://placehold.it/${this.width}x${this.height}/${getRandomHex()}/`
        }
    },
  computed: {
    positionX() {
        let x = 0;
        switch (this.direction) {
          case 'right':
            x = -1 * this.width
            break;
          case 'left':
            x = this.width
            break;
          default:
            break;
        }
        return x
    },
    positionY() {
      let y = 0;
      switch (this.direction) {
        case 'top':
          y = this.height
          break;
        case 'bottom':
          y = -1 * this.height
          break;
        default:
          break;
      }
      return y
    }
  },
    mounted() {
        const option = {
          x: this.positionX,
          y: this.positionY,
          onComplete: () => {
            this.reset()
          }
        }
        setInterval(() => {
            TweenMax.to(this.$refs.item, 1, option)
        }, 2000)
    },
  methods: {
    replaceImage(firstImage, secondImage) {
      if(_.includes(['bottom', 'right'], this.direction) ) {
        firstImage.src = secondImage.src
      } else {
        secondImage.src = firstImage.src
      }
    },
    resetImage(firstImage, secondImage) {
      if(_.includes(['bottom', 'right'], this.direction) ) {
        secondImage.src = `http://placehold.it/${this.width}x${this.height}/${getRandomHex()}/`
      } else {
        firstImage.src = `http://placehold.it/${this.width}x${this.height}/${getRandomHex()}/`
      }
    },
    reset() {
      const firstImage = this.$refs.item.querySelector('img')
      const secondImage = this.$refs.item.querySelector(
        'img:last-child'
      )
      this.replaceImage(firstImage, secondImage)
      TweenMax.set(this.$refs.item, {
        x: 0,
        y: 0
      })
      this.resetImage(firstImage, secondImage)
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
</style>
