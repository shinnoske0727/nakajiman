<template lang="pug">
  .menu-button(@click="toggleMenu")
    button.button(:data-is-open="isOpen")

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
    methods: {
        toggleMenu() {
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
      size: $menu-width 27px;
    +sp-layout()
      size: $menu-width-sp 27px;

  .button
    position: relative
    background-color: $text-black
    transition 0
    +pc-layout()
      size: $menu-width $bar-length
    +sp-layout()
      size: $menu-width-sp $bar-length-sp

    &[data-is-open="true"]
      background-color transparent
      transition: 0.35s

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
      transform: translate(-50%, -12px)
      +sp-layout()
        transform: translate(-50%, -9px)

    &::after
      transform: translate(-50%, 12px)
      +sp-layout()
        transform: translate(-50%, 9px)

    &[data-is-open="true"]
      &::before
        animation: menuBefore 0.5s forwards

      &::after
        animation: menuAfter 0.5s forwards
</style>
