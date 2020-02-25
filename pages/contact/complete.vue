<template lang="pug">
  - cmnPath = "~/assets/img/common/"
  - path = "~/assets/img/contact/"
  section.contact
    h1.title
      img(src=`${cmnPath}txt_contact.svg` alt="CONTACT")
    .inner
      p.status 送信完了
      p.text
        | この度はお問い合わせくださいましてありがとうございます。
        br
        | 頂いたメッセージは2日以内に返答させていただきますので、今しばらくお待ちください。
      nuxt-link.link(to="/")
        img(src=`${cmnPath}txt_home.svg` alt="HOME")


</template>

<style lang="stylus" scoped>
.contact
  max-width: $max-width
  margin: 0 auto
  padding-top: $title-padding-top
  +sp-layout()
    max-width: $max-width-sp
    padding: $title-padding-top-sp 16px 0;
    overflow: hidden
.title
  size auto 23px
  margin 0 auto 177px
  line-height 0
  & > img
    size 100%
  +sp-layout()
    size auto 16px
    margin 0 auto 148px
.inner
  margin 0 auto
  text-align: center

.status
  margin-bottom: 37px
  font-size 14px
  font-weight: bold
  color $text-black
  +sp-layout()
    font-size: 12px

.text
  width: 392px;
  margin: 0 auto 87px
  line-height: 2
  font-size 14px
  +sp-layout()
    width: 336px;
    margin: 0 auto 91px
    line-height: 1.83;
    font-size: 12px

.link
  display inline-block
  height 10px
  margin 0 auto
  padding-bottom 1px
  border-bottom 1px solid #000
  box-sizing content-box
  & > img
    display block
    margin 0 auto
    height 100%
</style>
