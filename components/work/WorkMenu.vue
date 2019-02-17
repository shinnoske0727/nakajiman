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
            img(src=`${path}ui-works.svg` alt="UI")
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
    size 100% 51px
    box-sizing: content-box
    +pc-layout()
      sticky top 0 left 0;
      padding-top: 40px
    +sp-layout()
      fixed left 0
      size 100% 24px
      margin-top: 42px
      padding-top: 34px

  .work-menu__list
    display: flex
    justify-content: center
    margin: 0 auto

  .work-menu__item
    position: relative
    padding: 0 8px;
    margin-right: 48px
    opacity 0.3
    transition opacity 0.2s ease-in

    &:last-of-type
      margin-right: 0

    &::after
      content ""
      display block
      absolute bottom -33px left 0
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
      &:hover
        opacity 1
        &::after
          opacity 1
          transform scaleX(1)
    +sp-layout()
      height: 10px
      padding: 0 1px;
      margin-right: 20px
      &::after
        absolute bottom -14px left 0
        size: 100% $bar-length-sp

  .work-menu__link
    +sp-layout()
      display: block
      height: 100%
      & > img
        height: 100%
</style>
