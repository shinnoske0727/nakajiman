<template lang="pug">
  - cmnPath = "~/assets/img/common/";
  section.works
    h1.title
      img(src=`${cmnPath}txt_works.svg` alt="WORKS")
    work-menu.menu(@change="changeCategory" :category="currentCategory")
    .inner
      work-thumbnail(v-for="data in posts" :content-data="data" :key="data.id")
</template>

<script>
import { mapActions, mapState } from 'vuex'
import WorkMenu from '@/components/work/WorkMenu'
import Menus from '@/components/menu/Menus'
import { dammyData } from '@/assets/data/dammyData'
import WorkThumbnail from '@/components/work/WorkThumbnail'
import { fetchEntries } from '@/assets/helper/api'
import { orderBy } from 'lodash'

export default {
    name: 'Works',
    async fetch({ store, params }) {
        if (params.id) {
            await store.dispatch('registerCurrentCategory', params.id)
        }
        await store.dispatch('loadWorksData', dammyData)
    },
    async asyncData() {
        const postData = await fetchEntries()
        const posts = orderBy(
            postData.items.map(post => post.fields),
            'postOrder'
        )
        return { posts }
    },
    components: {
        WorkThumbnail,
        Menus,
        WorkMenu
    },
    computed: {
        ...mapState(['currentCategory'])
    },
    methods: {
        ...mapActions(['loadWorksData', 'registerCurrentCategory']),
        changeCategory(val) {
            this.registerCurrentCategory(val)
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
    height: 23px
  +sp-layout()
    fixed left 0
    size: 100% 16px
    padding-top $title-padding-top-sp
    z-index: 2;
    & > img
      height: 16px;

.menu
  z-index: 2;

.inner
  z-index: 1;
  size 100%
  +pc-layout()
    display grid
    grid-template-columns: repeat(auto-fit, minmax(326px, 1fr))
  @media (min-width 980px)
      grid-template-columns: repeat(3, 1fr)
  +sp-layout()
    padding-top: 100px

.work-title
  +pc-layout()
    display: none
  margin-bottom: 56px
  text-align: center
  font-size 12px
</style>
