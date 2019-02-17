<template lang="pug">
  - cmnPath = "~/assets/img/common/";
  section.works
    h1.title
      img(src=`${cmnPath}txt_works.svg` alt="WORKS")
    work-menu.menu(@change="changeCategory" :category="currentCategory")
    .inner
      work-thumbnail(v-for="data in visibleData" :content-data="data" :key="data.id")
</template>

<script>
import { mapActions } from 'vuex'
import filter from 'lodash/filter'
import WorkMenu from '@/components/work/WorkMenu'
import Menus from '@/components/menu/Menus'
import { dammyData } from '@/assets/data/dammyData'
import WorkThumbnail from '@/components/work/WorkThumbnail'

export default {
    name: 'Works',
    async fetch({ store }) {
        return store.dispatch('loadWorksData', dammyData)
    },
    components: {
        WorkThumbnail,
        Menus,
        WorkMenu
    },
    data() {
        return {
            currentCategory: this.$route.params.id
        }
    },
    computed: {
        visibleData() {
            if (!this.currentCategory) return dammyData
            return filter(
                dammyData,
                data => data.category === this.currentCategory
            )
        }
    },
    watch: {
        visibleData: function(newData) {
            this.loadWorksData(newData)
        }
    },
    methods: {
        ...mapActions(['loadWorksData', 'registerWorksId']),
        changeCategory(val) {
            this.currentCategory = val
        }
    }
}
</script>

<style lang="stylus" scoped>
  .works
    +sp-layout()
      width: $max-width-sp
      margin: 0 auto

  .title
    text-align: center
    padding $title-padding-top 0 16px
    box-sizing: content-box
    height: 23px
    line-height: 0
    background-color: #fff;
    & > img
      height: 100%
    +sp-layout()
      fixed left 0
      size: 100% 16px
      padding-top $title-padding-top-sp
      z-index: 2;

  .menu
    z-index: 2;

  .inner
    z-index: 1;
    size 100%
    +pc-layout()
      display grid
      grid-template-columns: auto auto auto
    +sp-layout()
      padding-top: 100px

  .work-title
    +pc-layout()
      display: none
    margin-bottom: 56px
    text-align: center
    font-size 12px

</style>
