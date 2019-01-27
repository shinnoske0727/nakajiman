<template lang="pug">
  - path = "~/assets/img/menu/"
  .menu-content(v-if="isOpen")
    .inner
      ul.list
        li.item(data-is-current="true")
          a.link(href="#home"): img(src=`${path}home-menu.svg` alt="HOME")
        li.item(data-is-current="false")
          a.link(href="#works"): img(src=`${path}works-menu.svg` alt="WORKS")
        li.item(data-is-current="false")
          a.link(href="#about"): img(src=`${path}about-menu.svg` alt="ABOUT")
        li.item(data-is-current="false")
          a.link(href="#contact"): img(src=`${path}contact-menu.svg` alt="CONTACT")
      ul.sns
        a.sns-link(href="" target="_blank"): img(src=`${path}twitter.svg` alt="twitter")
        a.sns-link(href="" target="_blank"): img(src=`${path}facebook.svg` alt="facebook")
        a.sns-link(href="" target="_blank"): img(src=`${path}instagram.svg` alt="instagram")

</template>

<script>
export default {
    name: 'MenuContent',
    props: {
        isOpen: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style scoped lang="stylus">

  .menu-content
    fixed top left
    size 100%
    background: $bg-gray

  .inner
    max-width: $max-width
    margin-top: 172px

  .item
    relative: 0 0
    margin-bottom: 56px;
    padding-left: 240px
    line-height: 0;
    opacity: 0.5

    &[data-is-current="true"],
    &:hover
      opacity: 1

    &::before
      content: ""
      absolute: top 0 left 0 bottom 0
      margin: auto 0;
      width: 0
      height: 2px
      background-color: $text-black;
      pointer-events none
      transition width 0.25s ease-out

    &[data-is-current="true"],
    &:hover
      &::before
        width: 208px

    &:last-of-type
      margin-bottom: 72px

  .link
    display: inline-block
    line-height: 1

    & > img
      display: block

  .sns
    display: flex
    justify-content: flex-start
    align-items: center
    width: 130px
    padding-left: 240px

  .sns-link
    margin-right: 8px

</style>
