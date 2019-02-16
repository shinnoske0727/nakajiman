<template lang="pug">
  .slider(ref="slide")
    .first-layer(ref="first")
    .second-layer(ref="second")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { TweenMax, Expo, TimelineMax } from 'gsap'

export default {
    name: 'Slider',
    data() {
        return {
            tl: ''
        }
    },
    computed: {
        ...mapState(['isChangeWindow'])
    },
    watch: {
        isChangeWindow: function(state) {
            if (state) {
                this.tl.restart()
            }
        }
    },
    mounted() {
        this.tl = new TimelineMax({ paused: true })
        this.tl
            .set(this.$refs.slide, {
                width: 0
            })
            .set(this.$refs.second, {
                width: '100%'
            })
            .to(this.$refs.slide, 0.75, {
                width: '100%',
                ease: Expo.easeOut
            })
            .to(this.$refs.second, 0.75, {
                width: 0,
                ease: Expo.easeOut,
                onStart: () => {
                    TweenMax.to(this.$refs.slide, 0.75, {
                        delay: 0.3,
                        width: 0,
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
    size 0 100%
    z-index: 4

  .first-layer
    background-color: $bg-white;
    absolute top 0 left 0
    size 100%

  .second-layer
    background-color: $bg-black;
    absolute top 0 left 0
    size 100%
</style>
