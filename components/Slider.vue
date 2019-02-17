<template lang="pug">
  .slider(ref="slide" :data-direction="direction")
    .first-layer(ref="first" :data-direction="direction")
    .second-layer(ref="second" :data-direction="direction")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { TweenMax, Expo, TimelineMax } from 'gsap'

export default {
    name: 'Slider',
    data() {
        return {
            tl: '',
            direction: 'right'
        }
    },
    computed: {
        ...mapState(['isChangeWindow'])
    },
    watch: {
        isChangeWindow: function(payload) {
            if (payload.state) {
                this.direction = payload.direction
                this.tl.restart()
            }
        }
    },
    mounted() {
        this.tl = new TimelineMax({ paused: true })
        this.tl
            .set(this.$refs.slide, {
                scaleX: 0
            })
            .set(this.$refs.second, {
                scaleX: 1
            })
            .to(this.$refs.slide, 0.75, {
                scaleX: 1,
                ease: Expo.easeOut
            })
            .to(this.$refs.second, 0.75, {
                scaleX: 0,
                ease: Expo.easeOut,
                onStart: () => {
                    TweenMax.to(this.$refs.slide, 0.75, {
                        delay: 0.3,
                        scaleX: 0,
                        ease: Expo.easeOut,
                        onComplete: () => {
                            this.waitWindow()
                        }
                    })
                }
            })
    },
    methods: {
        ...mapActions(['waitWindow'])
    }
}
</script>

<style lang="stylus">
  .slider
    fixed top 0 left 0
    size 100%
    z-index: 4
    transform: scaleX(0)
    &[data-direction="right"]
      transform-origin center left
    &[data-direction="left"]
      transform-origin center right

  $layer
    absolute top 0 left 0
    size 100%
    &[data-direction="right"]
      transform-origin center left
    &[data-direction="left"]
      transform-origin center right

  .first-layer
    background-color: $bg-white;
    @extend $layer

  .second-layer
    background-color: $bg-black;
    @extend $layer
</style>
