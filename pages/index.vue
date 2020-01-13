<template lang="pug">
  - path = "~/assets/img/top/";
  section.top
    .inner
      keyvisual-sp
      .text-box
        h1.title
          img.isPC(src=`${path}title-pc.svg` alt="I AM A DESIGNER KENTA NAKAJIMA")
          img.isSP(src=`${path}title-sp.svg` alt="I AM A DESIGNER KENTA NAKAJIMA")
        ul.list
          li.item
            .link(data-type="ui" @click="move({ name: 'works', params: { id: 'UI/UX' } })")
              img(src=`${path}uiux-white.svg` alt="UIUX")
          li.item
            .link(data-type="web" @click="move({ name: 'works', params: { id: 'WEB' } })")
              img(src=`${path}web-white.svg` alt="WEB")
          li.item
            .link(data-type="illustration" @click="move({ name: 'works', params: { id: 'ILLUSTRATION' } })")
              img(src=`${path}illust-white.svg` alt="ILLUST")
          li.item
            .link(data-type="photograph" @click="move({ name: 'works', params: { id: 'PHOTOGRAPH' } })")
              img(src=`${path}photograph-white.svg` alt="PHOTOGRAPH")
      keyvisual-pc
      .header
</template>

<script>
import { mapActions } from 'vuex'
import { dammyData } from '@/assets/data/dammyData'
import { preloadImages } from '@/assets/helper/preloadImage'
import KeyvisualPc from '../components/top/KeyvisualPc'
import KeyvisualSp from '@/components/top/KeyvisualSp'

export default {
    name: 'Top',
    async fetch({ store }) {
        const filteredKvArray = dammyData.filter(data => data.top.kv)
        const kvImageArray = filteredKvArray.map(data =>
            require(`@/assets/data/${data.top.kv}`)
        )
        const images = await preloadImages(kvImageArray)
        const kvLinks = filteredKvArray.map(data => data.id)
        await store.dispatch('registerKVLinks', kvLinks)
        await store.dispatch(
            'registerKVImages',
            images.map(img => img.src)
        )
    },
    components: { KeyvisualSp, KeyvisualPc },
    methods: {
        ...mapActions(['updateLoadedWork']),
        move(option) {
            this.updateLoadedWork({ state: 'start', direction: 'next' })
            setTimeout(() => {
                this.$router.push(option)
            }, 800)
        }
    }
}
</script>

<style lang="stylus" scoped>
.top
  +pc-layout()
    display: flex
    height: 100vh
    flex-direction: column
    justify-content: center
    align-items center
  +sp-layout()
    padding-bottom: 32px
.inner
  margin: 0 auto
  +pc-layout()
    display: flex
    justify-content: space-between
    width: $max-width
  +sp-layout()
    max-width: 343px
    padding-top: 64px

.header
  background-color: #fff;
  +pc-layout()
    display: none
  +sp-layout()
    fixed top 0 left 0
    size 100% 64px
.text-box
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start

.title
  margin-bottom: 22px

  & > img
    &.isPC
      +pc-layout()
        display: block
      +sp-layout()
        display: none

    &.isSP
      +pc-layout()
        display: none
      +sp-layout()
        display: block
  +sp-layout()
    margin-bottom: 26px
    & > img
      width: 100%

.list
  display: flex
  justify-content: space-between
  width: 341px
  +sp-layout()
    width: 100%

.link
  position: relative
  display: flex
  flex-direction column
  justify-content: center
  align-items: center
  background-color: $bg-black;
  cursor pointer

  & > img
    position: relative
    height: 10px;
    +sp-layout()
      size auto 10px

  &::before
    content: ""
    absolute top 2px left 2px
    $border-size = 4px
    size: "calc(100% - %s)" % $border-size
    background-color: $bg-white;
    transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1)
    transform: scaleX(0)
    transform-origin: center left
  +pc-layout()
    &:hover
      & > img
        filter: brightness(0)

      &::before
        transform: scaleX(1)

.link[data-type="ui"]
  size 57px 26px
  +sp-layout()
    size 56px 28px

.link[data-type="web"]
  size 46px 26px
  +sp-layout()
    size 49px 28px

.link[data-type="illustration"]
  size 108px 26px
  +sp-layout()
    size 114px 28px

.link[data-type="photograph"]
  size 106px 26px
  +sp-layout()
    size 112px 28px
</style>
