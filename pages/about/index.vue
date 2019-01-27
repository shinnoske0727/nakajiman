<template lang="pug">
  - cmnPath = "~/assets/img/common/"
  - path = "~/assets/img/about/"
  section.about
    h1.title
      img(src=`${cmnPath}txt_about.svg` alt="ABOUT")
    .inner
      .image-box
        picture.picture
          img(src=`${path}illust-about@2x.png` alt="")
      .text-box
        p.name: img(src=`${path}kenta-nakajima.svg` alt="KENTA NAKAJIMA")
        .name-box
          p.small-name 中島 健太
          p.bar |
          p.role UI Designer
        p.explain
          | 1990年長野県飯田市生まれ。多摩美術大学情報デザイン学科情報デザインコース卒業後、面白法人カヤックに新卒入社。大学時代はデザイニング・エモーションゼミに所属し、人の感覚や感情に働きかけるデザインについて研究を行なっていた。ユーザビリティ&エモーションを念頭に置いて、設計を行う。

</template>

<script>
export default {
    components: {
        name: 'about'
    }
}
</script>

<style lang="stylus" scoped>
  .about
    max-width $max-width
    margin 0 auto
    padding-top 32px
  .title
    size auto 23px
    margin 0 auto 104px
    line-height 0
    & > img
      size 100%
  .inner
    display flex
  .image-box
    size 351px 413px
    margin-right 31px
  .picture
    display block
    size 100%
    img
      size 100%
  .text-box
    size 404px auto
  .name
    margin-bottom 9px
  .name-box
    display flex
    font-size 14px
    line-height 22px / 14px
    margin-bottom: 32px
  .bar
    margin: 0 12px

  .explain
    font-size 12px
    line-height 2
</style>
