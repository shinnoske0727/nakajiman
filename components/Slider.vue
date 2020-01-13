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
            halfTlIn: '',
            halfTlOut: '',
            halfTlInReverse: '',
            halfTlOutReverse: '',
            direction: 'right',
            pageDirection: ''
        }
    },
    computed: {
        ...mapState(['isLoadedWork'])
    },
    watch: {
        isLoadedWork: function(value) {
            if (value.state === 'start' && value.direction === 'next') {
                this.halfTlInReverse.restart()
                this.pageDirection = 'next'
            } else if (value.state === 'start' && value.direction === 'prev') {
                this.halfTlIn.restart()
                this.pageDirection = 'prev'
            } else if (value.state === 'loaded') {
                if (this.pageDirection === 'next') {
                    this.halfTlOutReverse.restart()
                } else {
                    this.halfTlOut.restart()
                }
                this.pageDirection = ''
            }
        }
    },
    mounted() {
        this.slideHalfIn()
        this.slideHalfOut()
        this.slideHalfInReverse()
        this.slideHalfOutReverse()
    },
    methods: {
        ...mapActions(['updateLoadedWork']),
        slideHalfIn() {
            this.halfTlIn = new TimelineMax({ paused: true })
            this.halfTlIn
                .set(this.$refs.slide, {
                    scaleX: 0,
                    transformOrigin: 'center left'
                })
                .set(this.$refs.second, {
                    scaleX: 1
                })
                .to(this.$refs.slide, 0.75, {
                    scaleX: 1,
                    ease: Power4.easeOut,
                    onStart: () => {
                        setTimeout(() => {
                            this.updateLoadedWork({ state: 'covered' })
                        }, 250)
                    }
                })
        },
        slideHalfOut() {
            this.halfTlOut = new TimelineMax({ paused: true })
            this.halfTlOut
                .set(this.$refs.slide, {
                    transformOrigin: 'center right'
                })
                .to(this.$refs.second, 0.75, {
                    scaleX: 0,
                    ease: Power4.easeOut,
                    onComplete: () => {
                        this.updateLoadedWork({ state: 'end' })
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
        slideHalfInReverse() {
            this.halfTlInReverse = new TimelineMax({ paused: true })
            this.halfTlInReverse
                .set(this.$refs.slide, {
                    scaleX: 0,
                    transformOrigin: 'center right'
                })
                .set(this.$refs.second, {
                    scaleX: 1
                })
                .to(this.$refs.slide, 0.75, {
                    scaleX: 1,
                    ease: Power4.easeOut,
                    onStart: () => {
                        setTimeout(() => {
                            this.updateLoadedWork({ state: 'covered' })
                        }, 250)
                    }
                })
        },
        slideHalfOutReverse() {
            this.halfTlOutReverse = new TimelineMax({ paused: true })
            this.halfTlOutReverse
                .set(this.$refs.slide, {
                    transformOrigin: 'center left'
                })
                .to(this.$refs.second, 0.75, {
                    scaleX: 0,
                    ease: Power4.easeOut,
                    onComplete: () => {
                        this.updateLoadedWork({ state: 'end' })
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
