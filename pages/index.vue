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
            .link(data-type="ui" @click="move({ name: 'works', params: { id: 'ui' } })")
              img(src=`${path}ui-white.svg` alt="UI")
          li.item
            .link(data-type="web" @click="move({ name: 'works', params: { id: 'web' } })")
              img(src=`${path}web-white.svg` alt="WEB")
          li.item
            .link(data-type="illustration" @click="move({ name: 'works', params: { id: 'illustration' } })")
              img(src=`${path}illust-white.svg` alt="ILLUST")
          li.item
            .link(data-type="photograph" @click="move({ name: 'works', params: { id: 'photograph' } })")
              img(src=`${path}photograph-white.svg` alt="PHOTOGRAPH")
      keyvisual-pc
</template>

<script>
import _ from 'lodash'
import { mapActions } from 'vuex'
import { dammyData } from '@/assets/data/dammyData'
import { preloadImages } from '@/assets/helper/preloadImage'
import KeyvisualPc from '../components/top/KeyvisualPc'
import KeyvisualSp from '@/components/top/KeyvisualSp'

export default {
    name: 'Top',
    async fetch({ store }) {
        const kvImageArray = _.map(dammyData, data =>
            require(`@/assets/data/${data.top.kv}`)
        )
        const images = await preloadImages(kvImageArray)
        store.dispatch('registerKVImages', images.map(img => img.src))
    },
    components: { KeyvisualSp, KeyvisualPc },
    methods: {
        ...mapActions(['changeWindow']),
        move(option) {
            this.changeWindow()
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
  .inner
    margin: 0 auto
    +pc-layout()
      display: flex
      justify-content: space-between
      width: $max-width
    +sp-layout()
      max-width: $max-width-sp
      padding-top: 64px

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
      margin-bottom: 24px
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
      transition: filter 0.35s ease-in
      +sp-layout()
        size auto 9px

    &::before
      content: ""
      absolute top 3px left 3px
      $border-size = 6px
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
    size 40px 26px
    +sp-layout()
      size 40px 28px

  .link[data-type="web"]
    size 56px 26px
    +sp-layout()
      size 55px 28px

  .link[data-type="illustration"]
    size 111px 26px
    +sp-layout()
      size 119px 28px

  .link[data-type="photograph"]
    size 110px 26px
    +sp-layout()
      size 117px 28px

</style>
