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
          | 1990年長野県飯田市生まれ。多摩美術大学情報デザイン学科情報デザインコース卒業後、面白法人カヤックに新卒入社。大学時代はデザイニング・エモーションゼミに所属し、人の感覚や感情に働きかけるデザインについて研究を行なっていた。ロジックとエモーションのバランスを大切にして、デザイン・設計を行なう。

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
    +pc-layout()
      width $max-width
    margin 0 auto
  .title
    size auto 23px
    padding-top $title-padding-top
    margin 0 auto 14.9vh
    line-height 0
    box-sizing: content-box
    & > img
      size 100%
    +sp-layout()
      sticky top 0 left 0
      height: 16px
      margin 0 auto 23px
      padding: $title-padding-top-sp 0;
      background-color: #fff;
      & > img
        height: 16px;
  .inner
    +pc-layout()
      display flex
      justify-content: center;
  .image-box
    +pc-layout()
      size 351px 413px
      margin-right 31px
    +sp-layout()
      size 295px 347px
      margin: 0 auto
  .picture
    display block
    size 100%
    img
      size 100%
  .text-box
    size 404px auto
    margin-top: 114px
    +sp-layout()
      size 100% auto
      margin-top: 40px
  .name
    margin-bottom 8px
    +sp-layout()
      height: 21px
      text-align: center
      margin-bottom 11px
      & > img
        height: 21px
  .name-box
    display flex
    font-size 14px
    line-height 1
    margin-bottom: 28px
    +sp-layout()
      justify-content: center
  .bar
    margin: 0 10px

  .explain
    font-size 12px
    line-height 2
    +sp-layout()
      width: 311px
      line-height 1.83
      margin: 0 auto
      padding-bottom: 68px
</style>
