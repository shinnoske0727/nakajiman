<template lang="pug">
  - path = "~/assets/img/works/";
  - path = "~/assets/img/works/";
  .work-modal
    work-modal-content
    button.arrow--right 右
    button.arrow--left 左
    button.button(:data-is-open="isOpen")

</template>

<script>
import WorkModalContent from '@/components/work/WorkModalContent'
export default {
    name: 'WorkModal',
    components: { WorkModalContent }
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

  .arrow--right,
  .arrow--left
    width: 42px;
    height: 42px;
    background-color: $bg-black;

  .arrow--right
    background-image: url("~assets/img/works/icn_arrow_right.svg")

  .arrow--left
    background-image: url("~assets/img/works/icn_arrow_left.svg")
</style>
