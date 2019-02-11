<template lang="pug">
  - path = "http://placehold.it/"
  .keyvisual--pc
    .grid1.grid
      grid-item(:direction="'top'" width="391" height="391")
    .grid2.grid
      grid-item(:direction="'right'" width="241" height="241")
    .grid3.grid
      grid-item(:direction="'bottom'" width="148" height="148")
    .grid4.grid
      grid-item(:direction="'left'" width="91" height="91")
    .grid5.grid
      grid-item(:direction="'top'" width="55" height="55")
    .grid6.grid
      grid-item(:direction="'right'" width="34" height="34")
    .grid7.grid
      grid-item(:direction="'bottom'" width="19" height="34")
</template>

<script>
import GridItem from './GridItem'

export default {
    name: 'KeyvisualPc',
  components: { GridItem }
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
    background-color: red

  .grid2
    grid-area: b
    background-color: blue

  .grid3
    grid-area: c
    background-color: green

  .grid4
    grid-area: d
    background-color: cyan

  .grid5
    grid-area: e
    background-color: magenta

  .grid6
    grid-area: f
    background-color: yellow

  .grid7
    grid-area: g

  .grid-inner
    absolute top -100% left 0
    line-height: 0
</style>
