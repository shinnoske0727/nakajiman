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
            halfTl: '',
            halfTlReverse: '',
            direction: 'right'
        }
    },
    computed: {
        ...mapState(['isChangeWindow', 'isLoadedWork'])
    },
    watch: {
        isChangeWindow: function(payload) {
            if (payload.state) {
                this.direction = payload.direction
                if (this.direction === 'left') {
                    this.tl.restart()
                } else {
                    this.tlReverse.restart()
                }
            }
        },
        isLoadedWork: function(state) {
            if (state === 'start') {
                this.halfTl.restart()
            } else if (state === 'loaded') {
                this.halfTlReverse.restart()
            }
        }
    },
    mounted() {
        this.slideIn()
        this.slideOut()
        this.slideHalfIn()
        this.slideHalfOut()
    },
    methods: {
        ...mapActions(['waitWindow', 'updateLoadedWork']),
        slideHalfIn() {
            this.halfTl = new TimelineMax({ paused: true })
            this.halfTl
                .set(this.$refs.slide, {
                    scaleX: 0
                })
                .set(this.$refs.second, {
                    scaleX: 1
                })
                .to(this.$refs.slide, 0.75, {
                    scaleX: 1,
                    ease: Power4.easeOut,
                    onStart: () => {
                        setTimeout(() => {
                            this.updateLoadedWork('covered')
                        }, 250)
                    }
                })
                .set(this.$refs.slide, {
                    transformOrigin: 'center right'
                })
        },
        slideHalfOut() {
            this.halfTlReverse = new TimelineMax({ paused: true })
            this.halfTlReverse
                .set(this.$refs.slide, {
                    transformOrigin: 'center left'
                })
                .to(this.$refs.second, 0.75, {
                    scaleX: 0,
                    ease: Power4.easeOut,
                    onComplete: () => {
                        this.updateLoadedWork('end')
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
        slideIn() {
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
        },
        slideOut() {
            this.tlReverse = new TimelineMax({ paused: true })
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
        }
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
