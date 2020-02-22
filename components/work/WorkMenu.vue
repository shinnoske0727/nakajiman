<template lang="pug">
  - cmnPath = "~/assets/img/common/"
  - path = "~/assets/img/works/"
  .work-menu
    nav.work-menu__nav
      ul.work-menu__list
        li.work-menu__item(:data-is-current="otherCategory")
          button.work-menu__link(@click="changeALL")
            img(src=`${path}all-works.svg` alt="ALL")
        li.work-menu__item(:data-is-current="isUI")
          button.work-menu__link(@click="changeUI")
            img(src=`${path}uiux-works.svg` alt="UIUX")
        li.work-menu__item(:data-is-current="isWEB")
          button.work-menu__link(@click="changeWEB")
            img(src=`${path}web-works.svg` alt="WEB")
        li.work-menu__item(:data-is-current="isILLUSTRATION")
          button.work-menu__link(@click="changeILLUSTRATION")
            img(src=`${path}illustration-works.svg` alt="ILLUSTRATION")
        li.work-menu__item(:data-is-current="isPHOTOGRAPH")
          button.work-menu__link(@click="changePHOTOGRAPH")
            img(src=`${path}photo-works.svg` alt="PHOTOGRAPH")
        li.work-menu__item(:data-is-current="isOTHER")
          button.work-menu__link(@click="changeOTHER")
            img(src=`${path}other-works.svg` alt="other")
</template>

<script>
import _ from 'lodash'
import { CATEGORY } from '../../assets/helper/const'

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
                [
                    CATEGORY.UI,
                    CATEGORY.WEB,
                    CATEGORY.PHOTOGRAPH,
                    CATEGORY.ILLUSTRATION,
                    CATEGORY.OTHER
                ],
                this.category
            )
        },
        isUI() {
            return this.category === CATEGORY.UI
        },
        isWEB() {
            return this.category === CATEGORY.WEB
        },
        isILLUSTRATION() {
            return this.category === CATEGORY.ILLUSTRATION
        },
        isPHOTOGRAPH() {
            return this.category === CATEGORY.PHOTOGRAPH
        },
        isOTHER() {
            return this.category === CATEGORY.OTHER
        }
    },
    methods: {
        changeALL() {
            this.$emit('change', CATEGORY.ALL)
        },
        changeUI() {
            this.$emit('change', CATEGORY.UI)
        },
        changeWEB() {
            this.$emit('change', CATEGORY.WEB)
        },
        changeILLUSTRATION() {
            this.$emit('change', CATEGORY.ILLUSTRATION)
        },
        changePHOTOGRAPH() {
            this.$emit('change', CATEGORY.PHOTOGRAPH)
        },
        changeOTHER() {
            this.$emit('change', CATEGORY.OTHER)
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
    size $max-width-sp 58px
    margin-top: 42px
    padding: 32px 16px 2px
    box-sizing: border-box

.work-menu__list
  display: flex
  justify-content: center
  margin: 0 auto
  +sp-layout()
    padding-bottom 16px
    justify-content flex-start
    overflow auto
    scrollbar-width none
    &::-webkit-scrollbar
        display none

.work-menu__item
  position: relative
  padding: 0 4px;
  +sp-layout()
    margin-right: 20px

  &:last-of-type
    margin-right: 0

  & .work-menu__link
    opacity 0.3
    transition opacity 0.2s ease-in

  &::after
    content ""
    display block
    absolute bottom -34px left 0
    size: 100% 3px
    background-color $bg-black;
    transition transform .4s cubic-bezier(.165, .84, .44, 1)
    transform scaleX(0)

  &[data-is-current="true"]
    & .work-menu__link
        opacity 1

    &::after
      opacity 1
      transform scaleX(1)
  +pc-layout()
    margin-right: 48px
    &:hover
      & .work-menu__link
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
