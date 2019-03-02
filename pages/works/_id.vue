<template lang="pug">
  - path = "~/assets/img/works/";
  .work
    work-content(v-if="workData" :work-data="workData")
    .header
    button.arrow--right(@click="goNext")
      img(src=`${path}icn_arrow_right.svg`)
    button.arrow--left(@click="goPrev")
      img(src=`${path}icn_arrow_left.svg`)

</template>

<script>
import { mapActions } from 'vuex'
import WorkContent from '@/components/work/WorkContent'
import { dammyData } from '@/assets/data/dammyData'
import _ from 'lodash'

export default {
    name: 'Work',
    asyncData: async function({ params }) {
        const workData = _.find(dammyData, data => data.id == params.id)
        const pageIdArray = _.map(dammyData, data => data.id)
        const currentPageId = params.id

        return { workData, pageIdArray, currentPageId }
    },
    components: { WorkContent },
    computed: {
        isFirst() {
            return this.currentPageId === this.first
        },
        isLast() {
            return this.currentPageId === this.last
        },
        first() {
            return _.first(this.pageIdArray)
        },
        last() {
            return _.last(this.pageIdArray)
        }
    },
    methods: {
        ...mapActions(['changeWindow']),
        move(id) {
            setTimeout(() => {
                this.$router.push({
                    name: 'works-id',
                    params: { id }
                })
            }, 800)
        },
        goNext() {
            this.changeWindow('right')
            const next = this.isLast ? this.first : Number(this.currentPageId) + 1
            this.move(next)
        },
        goPrev() {
            this.changeWindow('left')
            const prev = this.isFirst ? this.last : Number(this.currentPageId) - 1
            this.move(prev)
        }
    }
}
</script>

<style scoped lang="stylus">
  .work
    size 100% 100%
    background-color $bg-white
    overflow auto

  .header
    fixed top 0
    size 100% 92px
    background-color $bg-white
    +sp-layout()
      size 100% 64px

  .arrow--right,
  .arrow--left
    background-color: $bg-black;
    display: flex
    flex-direction:column
    justify-content: center
    align-items: center
    +pc-layout()
      fixed top 312px
      size 42px
    +sp-layout()
      fixed bottom 24px
      size 38px
      opacity 0.8
    & > img
      size: 12px 22px

  .arrow--right
    +pc-layout()
      right: 32px
      &::before
        content: ""
        absolute top 2px right 2px
        size: 38px
        background-color: $bg-white;
        transform: scaleX(0)
        transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1)
        transform-origin: left center

      &:hover
        & > img
          filter: brightness(0)

        &::before
          transform: scaleX(1)
    +sp-layout()
      right: 16px

  .arrow--left
    +pc-layout()
      left: 32px
      &::before
        content: ""
        absolute top 2px right 2px
        size: 38px
        background-color: $bg-white;
        transform: scaleX(0)
        transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1)
        transform-origin: right center
      &:hover
        & > img
          filter: brightness(0)

        &::before
          transform: scaleX(1)
    +sp-layout()
      left: 16px
</style>
