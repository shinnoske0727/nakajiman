<template lang="pug">
  - cmnPath = "~/assets/img/common/";
  section.works
    h1.title
      img(src=`${cmnPath}txt_works.svg` alt="WORKS")
    work-menu.menu(@change="changeCategory" :category="tempCategory || currentCategory")
    .inner
      transition-group(
        name="list"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      )
        work-thumbnail(v-for="( post, index ) in visibleData" :content-data="post" :key="post.postOrder" :data-index="index" v-show="isShowList")
</template>

<script>
import { mapActions, mapState } from 'vuex'
import WorkMenu from '@/components/work/WorkMenu'
import Menus from '@/components/menu/Menus'
import { dammyData } from '@/assets/data/dammyData'
import WorkThumbnail from '@/components/work/WorkThumbnail'
import { fetchEntries } from '@/assets/helper/api'
import { orderBy } from 'lodash'
import { TweenMax, Expo } from 'gsap'

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
            postData.items.map(post => ({ ...post.fields, id: post.sys.id })),
            'postOrder'
        )
        return { posts }
    },
    components: {
        WorkThumbnail,
        Menus,
        WorkMenu
    },
    data() {
        return {
            isShowList: true,
            tempCategory: null,
            canChangeMenu: true
        }
    },
    computed: {
        ...mapState(['currentCategory']),
        visibleData() {
            if (!this.currentCategory) return this.posts
            return this.posts.filter(
                data =>
                    data.postCategory.fields.categoryName ===
                    this.currentCategory
            )
        }
    },
    mounted() {
        this.updateLoadedWork('loaded')
    },
    methods: {
        ...mapActions(['loadWorksData', 'registerCurrentCategory', 'updateLoadedWork']),
        changeCategory(val) {
            if (!this.canChangeMenu || this.currentCategory === val) return
            this.tempCategory = val
            this.isShowList = false
            this.canChangeMenu = false

            setTimeout(() => {
                this.updateCategory()
            }, 1200)
        },
        updateCategory() {
            this.registerCurrentCategory(
                this.tempCategory === 'ALL' ? '' : this.tempCategory
            )
            this.tempCategory = null
            this.isShowList = true
            this.canChangeMenu = true
        },
        enter(el, done) {
            const delay = el.dataset.index * 0.1 + 0.5
            TweenMax.to(el, delay, {
                autoAlpha: 1,
                y: 0,
                ease: Expo.easeOut
            })
        },
        leave(el, done) {
            const delay = el.dataset.index * 0.15 + 0.15
            TweenMax.to(el, delay, {
                autoAlpha: 0,
                y: 30,
            })
        },
        beforeEnter(el) {
            el.style.opacity = 0
            TweenMax.set(el, { autoAlpha: 0, y: 30 })
        }
    }
}
</script>

<style lang="stylus" scoped>
.works
  +sp-layout()
    width: $max-width-sp
    margin: 0 auto
    padding: 0 16px

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
  & > span
    z-index: 1;
    size 100%
    +pc-layout()
      display grid
      grid-template-columns: repeat(auto-fit, minmax(326px, 1fr))
    @media (min-width 960px)
        grid-template-columns: repeat(3, 1fr)
    +sp-layout()
      display block
      padding-top: 100px

.work-title
  +pc-layout()
    display: none
  margin-bottom: 56px
  text-align: center
  font-size 12px
</style>
