<template lang="pug">
  .menu-button(@click="toggleMenu")
    button.button(:data-is-open="isOpen" :data-is-first="isFirst")

</template>

<script>
export default {
    name: 'MenuButton',
    props: {
        isOpen: {
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            isFirst: true
        }
    },
    methods: {
        toggleMenu() {
            this.isFirst = false
            const state = !this.isOpen
            this.$emit('change', state)
        }
    }
}
</script>

<style scoped lang="stylus">
  .menu-button
    cursor: pointer
    +pc-layout()
      size: $menu-width 16px;
    +sp-layout()
      size: $menu-width-sp 16px;

  .button
    position: relative
    background-color: $text-black
    transition none
    +pc-layout()
      size: $menu-width $bar-length
    +sp-layout()
      size: $menu-width-sp $bar-length-sp

    &[data-is-open="true"]
      background-color transparent
      transition: 0.35s

    &[data-is-first="true"]
        &::before,
        &::after
          animation: none;

    &::before,
    &::after
      content: ""
      absolute top 0 left 50%
      display: block
      size: 100% $bar-length
      background-color: $text-black
      transform-origin: 50% 50%
      +sp-layout()
        size: 100% $bar-length-sp

    &::before
      +pc-layout()
        transform: translate(-50%, -7px)
        animation: menuBeforeReverse 0.5s forwards
      +sp-layout()
        transform: translate(-50%, -7px)
        animation: menuBeforeReverseSp 0.5s forwards

    &::after
      +pc-layout()
        transform: translate(-50%, 7px)
        animation: menuAfterReverse 0.5s forwards
      +sp-layout()
        transform: translate(-50%, 7px)
        animation: menuAfterReverseSp 0.5s forwards

    &[data-is-open="true"]
      &::before
        animation: menuBefore 0.5s forwards
        +sp-layout()
          animation: menuBeforeSp 0.5s forwards

      &::after
        animation: menuAfter 0.5s forwards
        +sp-layout()
          animation: menuAfterSp 0.5s forwards
</style>
