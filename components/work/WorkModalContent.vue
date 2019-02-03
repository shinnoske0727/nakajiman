<template lang="pug">
  - path = "~/assets/img/works/";
  - path = "~/assets/img/works/";
  .work-modal-content
    .content
      .kv
      .title
      p.explain
        | あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      .role
        ul.role-list
          li.role-item CLIENT：UNIQLO
          li.role-item ART DIRECTOR：TORU OBARA
          li.role-item DESIGNER：KENTA NAKAJIMA

</template>

<script>
  export default {
    name: 'WorkModalContent'
  }
</script>

<style scoped lang="stylus">
  .kv
    margin-bottom: 96px
  .title
    margin-bottom: 48px

  .explain
    width 39em
    height 236px
    font-size 14px
    line-height 2
    letter-spacing normal
    color $text-black
</style>
