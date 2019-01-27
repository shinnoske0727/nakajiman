<template lang="pug">
  - cmnPath = "~/assets/img/common/"
  - path = "~/assets/img/contact/"
  section.contact
    h1.title
      img(src=`${cmnPath}txt_contact.svg` alt="CONTACT")
    .inner
      p 送信完了

</template>

<style lang="stylus" scoped>
  .contact
    max-width: $max-width
    margin: 0 auto
    padding-top: 32px
  .title
    size auto 23px
    margin 0 auto 88px
    line-height 0
    & > img
      size 100%
  .inner
    size 546px auto
    margin 0 auto

</style>
