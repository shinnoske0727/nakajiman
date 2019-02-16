<template lang="pug">
  - path = "~/assets/img/works/";
  .work(ref="modal")
    work-content(v-if="workData" :work-data="workData")
    button.arrow--right(@click="goNext") 右
    button.arrow--left(@click="goPrev") 左

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
    background-size: 12px 22px
    hide-text()
    +pc-layout()
      fixed top 312px
      size 42px
    +sp-layout()
      fixed top 493px
      size 38px

  .arrow--right
    background-image: url("~assets/img/works/icn_arrow_right.svg")
    +pc-layout()
      right: 32px
    +sp-layout()
      right: 16px

  .arrow--left
    background-image: url("~assets/img/works/icn_arrow_left.svg")
    +pc-layout()
      left: 32px
    +sp-layout()
      left: 16px
</style>
