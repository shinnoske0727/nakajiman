<template lang="pug">
  .menu-button(@click="toggleMenu")
    button.button(:data-is-open="isOpen")

</template>

<script>
export default {
    name: 'MenuButton',
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
            this.$emit('change', this.isOpen)
        }
    }
}
</script>

<style scoped lang="stylus">
  $menu-width = 42px
  $bar-length = 3px
  .menu-button
    size: $menu-width 27px;
    cursor: pointer

  .button
    position: relative
    size: $menu-width $bar-length
    background-color: $text-black
    transition 0

    &[data-is-open="true"]
      background-color transparent
      transition: 0.35s

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
      transform: translate(-50%, -12px)

    &::after
      transform: translate(-50%, 12px)

    &[data-is-open="true"]
      &::before
        animation: menuBefore 0.5s forwards

      &::after
        animation: menuAfter 0.5s forwards
</style>
