<template lang="pug">
  - path = "~/assets/img/menu/"
  - cmnPath = "~/assets/img/common/"
  .menu-content
    .inner
      ul.list
        li.item(:data-is-current="current === 'index'")
          a.link(data-href="/" @click.prevent="clickLink"): img(src=`${cmnPath}txt_home.svg` alt="HOME")
        li.item(:data-is-current="current === 'works'")
          a.link(data-href="/works/" @click.prevent="clickLink"): img(src=`${cmnPath}txt_works.svg` alt="WORKS")
        li.item(:data-is-current="current === 'about'")
          a.link(data-href="/about/" @click.prevent="clickLink"): img(src=`${cmnPath}txt_about.svg` alt="ABOUT")
        li.item(:data-is-current="current === 'contact'")
          a.link(data-href="/contact/" @click.prevent="clickLink"): img(src=`${cmnPath}txt_contact.svg` alt="CONTACT")
      ul.sns
        a.sns-link(href="https://twitter.com/nakaj1_man" target="_blank"): img(src=`${path}twitter.svg` alt="twitter")
        a.sns-link(href="https://www.facebook.com/kenta.nakajima.7399" target="_blank"): img(src=`${path}facebook.svg` alt="facebook")
        a.sns-link(href="https://www.instagram.com/nakaj1_man/" target="_blank"): img(src=`${path}instagram.svg` alt="instagram")

</template>

<script>
export default {
    name: 'MenuContent',
    props: {
        isOpen: {
            default: false,
            type: Boolean
        }
    },
    computed: {
        current() {
            return this.$route.name
        }
    },
    methods: {
        clickLink(e) {
            const link = e.currentTarget.getAttribute('data-href')
            this.$router.push(link)
            this.$emit('change', false)
        }
    }
}
</script>

<style scoped lang="stylus">

  .menu-content
    fixed top left
    size 100%
    background: $bg-gray
    overflow: hidden

  .inner
    max-width: $max-width
    margin-top: 172px

  .item
    relative: 0 0
    margin-bottom: 56px;
    padding-left: 240px
    line-height: 0;
    opacity: 0.5
    &.disabled {
      opacity 0.2
    }
    +sp-layout()
      height: 15px
      margin-bottom: 40px;
      padding-left: 64px

    &:not(.disabled)
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
            +sp-layout()
              width: 44px

    &:last-of-type
      margin-bottom: 64px
      +sp-layout()
        margin-bottom: 44px;

  .link
    display: inline-block
    line-height: 1
    +sp-layout()
      height: 100%

    & > img
      display: block
      +sp-layout()
        height: 15px

  .sns
    display: flex
    justify-content: flex-start
    align-items: center
    width: 130px
    padding-left: 233px
    +sp-layout()
      width: auto;
      padding-left: 59px

  .sns-link
    margin-right: 8px
    & > img
      display: block
    +pc-layout()
      opacity 0.5
      &:hover
        opacity 1
    +sp-layout()
      size 28px 28px
      margin-right: 12px
      & > img
        size 100% 100%

</style>
