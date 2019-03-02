<template lang="pug">
  - path = "http://placehold.it/"
  .keyvisual--pc(v-if="currentKVImages")
    .grid1.grid
      grid-item(
      :direction="'top'"
      :width="391"
      :height="391"
      :counter="counter"
      :index="0"
      )
    .grid2.grid
      grid-item(
      :direction="'right'"
      :width="241"
      :height="241"
      :counter="counter"
      :index="1"
      )
    .grid3.grid
      grid-item(
      :direction="'bottom'"
      :width="148"
      :height="148"
      :counter="counter"
      :index="2"
      )
    .grid4.grid
      grid-item(
      :direction="'left'"
      :width="91"
      :height="91"
      :counter="counter"
      :index="3"
      )
    .grid5.grid
      grid-item(
      :direction="'top'"
      :width="55"
      :height="55"
      :counter="counter"
      :index="4"
      )
    .grid6.grid
      grid-item(
      :direction="'right'"
      :width="34"
      :height="34"
      :counter="counter"
      :index="5"
      )
    .grid7.grid
      grid-item(
      :direction="'bottom'"
      :width="19"
      :height="34"
      :counter="counter"
      :index="6"
      :is-last="true"
      )
</template>

<script>
import { mapState, mapActions } from 'vuex'
import pickRandomItems from '@/assets/helper/pickRandomItems'
import GridItem from './GridItem'

export default {
    name: 'KeyvisualPc',
    components: { GridItem },
    data() {
        return {
            counter: 0,
            timer: null
        }
    },
    computed: {
        ...mapState(['KVImages', 'currentKVImages'])
    },
    mounted() {
        this.timer = setInterval(() => {
            const images = pickRandomItems(this.KVImages, 7)
            this.registerCurrentKVImages(images)
            this.counter += 1
        }, 3000)
    },
    destroyed() {
        clearTimeout(this.timer)
        this.timer = null
    },
    methods: {
        ...mapActions(['registerCurrentKVImages'])
    }
}
</script>

<style scoped lang="stylus">
  .keyvisual--pc
    size: 391px 634px
    display: grid;
    grid-template-areas: "a a a a" "d e e b" "d g f b" "c c c b";
    grid-template-columns: 91px 19px 34px 241px
    grid-template-rows: 391px 55px 34px 148px
    justify-content space-between
    align-content space-between;
    +sp-layout()
      display: none

  .grid
    position: relative
    overflow: hidden

  .grid1
    grid-area: a

  .grid2
    grid-area: b

  .grid3
    grid-area: c

  .grid4
    grid-area: d

  .grid5
    grid-area: e

  .grid6
    grid-area: f

  .grid7
    grid-area: g

  .grid-inner
    absolute top -100% left 0
    line-height: 0
</style>
