<template lang="pug">
  - path = "~/assets/img/works/";
  .work
    work-content(v-if="currentData" :work-data="currentData")
    .header
    button.arrow--right(@click="goNext")
      img(src=`${path}icn_arrow_right.svg`)
    button.arrow--left(@click="goPrev")
      img(src=`${path}icn_arrow_left.svg`)
    .button-wrap(@click="close")
      button.close

</template>

<script>
import { mapActions } from 'vuex'
import WorkContent from '@/components/work/WorkContent'
import _, { orderBy } from 'lodash'
import { fetchPostById } from '@/assets/helper/api'
import { fetchEntries } from '../../assets/helper/api'

export default {
    name: 'Work',
    asyncData: async function({ params, store }) {
        const { fields: currentData } = await fetchPostById(params.id)
        const { items: sameCategoryPosts } = store.state.currentCategory
            ? await fetchEntries('post', {
                  'fields.postCategory.sys.id': currentData.postCategory.sys.id
              })
            : await fetchEntries()
        const pageIdArray = orderBy(
            sameCategoryPosts.map(post => ({
                ...post.fields,
                id: post.sys.id
            })),
            'postOrder'
        ).map(post => post.id)
        const currentPageId = params.id

        return { pageIdArray, currentPageId, currentData }
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
        },
        currentIndex() {
            return this.pageIdArray.findIndex(
                pageId => pageId === this.currentPageId
            )
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
            const next = this.isLast
                ? this.first
                : this.pageIdArray[this.currentIndex + 1]
            this.move(next)
        },
        goPrev() {
            this.changeWindow('left')
            const prev = this.isFirst
                ? this.last
                : this.pageIdArray[this.currentIndex - 1]
            this.move(prev)
        },
        close() {
            this.changeWindow('left')
            setTimeout(() => {
                this.$router.push({ name: 'works' })
            }, 800)
        }
    }
}
</script>

<style scoped lang="stylus">
.work
  size 100% 100%
  padding 0 16px
  background-color $bg-white
  overflow auto

.header
  fixed top 0
  size 100% 92px
  background-color $bg-white
  pointer-events none
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
    & > img
      margin-left: 3px;
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
    & > img
      margin-left: 2px;

.arrow--left
  +pc-layout()
    left: 32px
    & > img
      margin-right: 3px;
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
    & > img
      margin-right: 2px;

.button-wrap
  cursor: pointer
  +pc-layout()
    fixed top 38px left 32px
    size: $menu-width 16px;
  +sp-layout()
    fixed top 24px right 16px
    size: $menu-width-sp 16px;

.close
  absolute top 7px
  background-color: transparent
  +pc-layout()
    size: $menu-width $bar-length
  +sp-layout()
    size: $menu-width-sp $bar-length-sp

  &::before,
  &::after
    content: ""
    absolute top 0 left 50%
    display: block
    size: 100% $bar-length
    background-color: $text-black
    transform-origin: 50% 50%
    +sp-layout()
      size: 100% $bar-length-sp

  &::before
    transform: translate(-50%, 0) rotate(45deg);

  &::after
    transform: translate(-50%, 0) rotate(-45deg);
</style>
