<template lang="pug">
  - path = "~/assets/img/works/";
  .work(ref="modal")
    work-content(v-if="workData" :work-data="workData")
    button.arrow--right(@click="goNext")
      img(src=`${path}icn_arrow_right.svg`)
    button.arrow--left(@click="goPrev")
      img(src=`${path}icn_arrow_left.svg`)

</template>

<script>
import WorkContent from '@/components/work/WorkContent'
import { dammyData } from '@/assets/data/dammyData'
import _ from 'lodash'

export default {
    name: 'Work',
    asyncData: async function({ params }) {
        const currentData = _.find(dammyData, data => data.id == params.id)
        return { workData: currentData }
    },
    components: { WorkContent },
    methods: {
        goNext() {},
        goPrev() {}
    }
}
</script>

<style scoped lang="stylus">
  .work
    fixed top 0 left 0
    size 100% 100%
    opacity 0.98
    background-color $bg-white
    overflow auto

  .arrow--right,
  .arrow--left
    background-color: $bg-black;
    +pc-layout()
      fixed top 312px
      size 42px
    +sp-layout()
      fixed top 493px
      size 38px
    & > img
      size: 12px 22px

  .arrow--right
    +pc-layout()
      right: 32px
      &::before
        content: ""
        width: 100%
        transform: scaleX(0)
        transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1)
        transform-origin: left center
      &:hover
        & > img
          filter: brightness(0)

        &::before
          absolute top 0 left 0
          content: ""
          height: 39px
          background-color: $bg-white;
          transform: scaleX(1)
    +sp-layout()
      right: 16px

  .arrow--left
    +pc-layout()
      left: 32px
      &::before
        content: ""
        width: 100%
        transform: scaleX(0)
        transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1)
        transform-origin: right center
      &:hover
        & > img
          filter: brightness(0)

        &::before
          absolute top 0 left 0
          content: ""
          height: 39px
          background-color: $bg-white;
          transform: scaleX(1)
    +sp-layout()
      left: 16px
</style>
