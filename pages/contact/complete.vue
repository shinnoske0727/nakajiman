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
      nuxt-link.link(to="/") HOME

</template>

<style lang="stylus" scoped>
  .contact
    max-width: $max-width
    margin: 0 auto
    padding-top: 32px
  .title
    size auto 23px
    margin 0 auto 176px
    line-height 0
    & > img
      size 100%
    +sp-layout()
      size auto 16px
      margin 0 auto 146px
  .inner
    margin 0 auto
    text-align: center

  .status
    margin-bottom: 40px
    font-size 14px
    font-weight: bold
    color $text-black
    +sp-layout()
      font-size: 12px

  .text
    width: 392px;
    margin: 0 auto 96px
    line-height: 2
    font-size 14px
    +sp-layout()
      width: 336px;
      line-height: 1.83;
      font-size: 12px

  .link
    text-decoration: underline
    font-size 14px
    font-weight: bold
    color $text-black
    +sp-layout()
      font-size: 12px



</style>
