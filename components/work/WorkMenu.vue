<template lang="pug">
  - cmnPath = "~/assets/img/common/"
  - path = "~/assets/img/works/"
  .work-menu
    nav.work-menu__nav
      ul.work-menu__list
        li.work-menu__item(:data-is-current="otherCategory")
          button.work-menu__link(@click="changeCategory('')")
            img(src=`${path}all-works.svg` alt="ALL")
        li.work-menu__item(:data-is-current="category === 'ui'")
          button.work-menu__link(@click="changeCategory('ui')")
            img(src=`${path}uiux-works.svg` alt="UIUX")
        li.work-menu__item(:data-is-current="category === 'web'")
          button.work-menu__link(@click="changeCategory('web')")
            img(src=`${path}web-works.svg` alt="WEB")
        li.work-menu__item(:data-is-current="category === 'illustration'")
          button.work-menu__link(@click="changeCategory('illustration')")
            img(src=`${path}illustration-works.svg` alt="ILLUSTRATION")
        li.work-menu__item(:data-is-current="category === 'photograph'")
          button.work-menu__link(@click="changeCategory('photograph')")
            img(src=`${path}photo-works.svg` alt="PHOTOGRAPH")
</template>

<script>
import _ from 'lodash'

export default {
    name: 'WorkMenu',
    props: {
        category: {
            default: '',
            type: String
        }
    },
    computed: {
        otherCategory() {
            return !_.includes(
                ['ui', 'web', 'photograph', 'illustration'],
                this.category
            )
        }
    },
    methods: {
        changeCategory(val) {
            this.$emit('change', val)
        }
    }
}
</script>

<style scoped lang="stylus">
  .work-menu
    background-color: $bg-white;
    box-sizing: content-box
    +pc-layout()
      size 100% 52px
      sticky top 0 left 0;
      padding-top: 40px
    +sp-layout()
      fixed left ( (375px - $max-width-sp) / 2 )
      size $max-width-sp 24px
      margin-top: 42px
      padding-top: 32px
      padding-bottom: 2px;

  .work-menu__list
    display: flex
    justify-content: center
    margin: 0 auto
    +sp-layout()
      justify-content: space-between

  .work-menu__item
    position: relative
    padding: 0 4px;
    opacity 0.3
    transition opacity 0.2s ease-in

    &:last-of-type
      margin-right: 0

    &::after
      content ""
      display block
      absolute bottom -34px left 0
      size: 100% 3px
      background-color $bg-black;
      transition transform .4s cubic-bezier(.165, .84, .44, 1)
      transform scaleX(0)

    &[data-is-current="true"]
      opacity 1

      &::after
        opacity 1
        transform scaleX(1)
    +pc-layout()
      margin-right: 48px
      &:hover
        opacity 1
        &::after
          opacity 1
          transform scaleX(1)
    +sp-layout()
      height: 10px
      padding: 0 1px;
      &::after
        absolute bottom -16px left 0
        size: 100% $bar-length-sp

  .work-menu__link
    line-height: 0
    +sp-layout()
      display: block
      height: 100%
      & > img
        height: 10px
</style>
