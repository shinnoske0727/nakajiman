<template lang="pug">
  .slider(ref="slide" :data-direction="direction")
    .first-layer(ref="first" :data-direction="direction")
    .second-layer(ref="second" :data-direction="direction")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { TweenMax, Expo, TimelineMax, Power4, Power3 } from 'gsap'

export default {
    name: 'Slider',
    data() {
        return {
            tl: '',
            tlReverse: '',
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
                if(this.direction === 'left') {
                  this.tl.restart()
                } else {
                  this.tlReverse.restart()
                }
            }
        }
    },
    mounted() {
        this.tl = new TimelineMax({ paused: true })
        this.tlReverse = new TimelineMax({ paused: true })
        this.tl
            .set(this.$refs.slide, {
                scaleX: 0
            })
            .set(this.$refs.second, {
                scaleX: 1
            })
            .to(this.$refs.slide, 0.75, {
                scaleX: 1,
                ease: Power4.easeOut
            })
            .set(this.$refs.slide, {
                transformOrigin: 'center right'
            })
            .to(this.$refs.second, 0.75, {
                scaleX: 0,
                ease: Power4.easeOut,
                onComplete: () => {
                    this.waitWindow()
                },
                onStart: () => {
                    TweenMax.to(this.$refs.slide, 0.75, {
                        delay: 0.25,
                        scaleX: 0,
                        ease: Power4.easeOut
                    })
                }
            })
        this.tlReverse
            .set(this.$refs.slide, {
                scaleX: 0
            })
            .set(this.$refs.second, {
                scaleX: 1
            })
            .to(this.$refs.slide, 0.75, {
                scaleX: 1,
                ease: Power4.easeOut
            })
            .set(this.$refs.slide, {
                transformOrigin: 'center left'
            })
            .to(this.$refs.second, 0.75, {
                scaleX: 0,
                ease: Power4.easeOut,
                onComplete: () => {
                    this.waitWindow()
                },
                onStart: () => {
                    TweenMax.to(this.$refs.slide, 0.75, {
                        delay: 0.25,
                        scaleX: 0,
                        ease: Power4.easeOut
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
  $color = #E3E4E6
  .slider
    fixed top 0 left 0
    size 100%
    z-index: 4
    transform: scaleX(0)
    &[data-direction="right"]
      transform-origin center right
    &[data-direction="left"]
      transform-origin center left

  $layer
    absolute top 0 left 0
    size 100%
    &[data-direction="right"]
      transform-origin center left
    &[data-direction="left"]
      transform-origin center right

  .first-layer
    background-color: $color;
    @extend $layer

  .second-layer
    background-color: $color;
    @extend $layer
</style>
