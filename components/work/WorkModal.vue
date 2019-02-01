<template lang="pug">
  - path = "~/assets/img/works/";
  - path = "~/assets/img/works/";
  .work-modal
    button.button(:data-is-open="isOpen")
    p WorkModal

</template>

<script>
export default {
    name: 'WorkModal'
}
</script>

<style scoped lang="stylus">
  .work-modal
    fixed top 0 left 0
    size 100% 100%
    opacity 0.98
    background-color $bg-white

  .button
    position: relative
    size: $menu-width $bar-length
    background-color transparent
    transition 0

    &::before,
    &::after
      content: ""
      absolute top 0 left 50%
      display: block
      width: 100%
      height: $bar-length
      background-color: $text-black
      transform-origin: 50% 0

    &::before
      transform: translate(-50%, 0) rotate(45deg);
    &::after
      transform: translate(-50%, 0) rotate(-45deg);
</style>
