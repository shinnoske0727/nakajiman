<template lang="pug">
  .menus(:data-is-hide="!isShowMenu")
    transition(name="slide")
      menu-content(v-if="isOpen" :is-open="isOpen" @change="onChangeMenuState").menu-content
    menu-button(@change="onChangeMenuState" :is-open="isOpen")

</template>

<script>
import { mapState } from 'vuex'
import MenuButton from '@/components/menu/MenuButton'
import MenuContent from '@/components/menu/MenuContent'

export default {
    name: 'Menus',
    components: { MenuContent, MenuButton },
    data() {
        return {
            isOpen: false
        }
    },
    computed: {
        ...mapState(['isShowMenu'])
    },
    methods: {
        onChangeMenuState(state) {
            this.isOpen = state
        }
    }
}
</script>

<style lang="stylus" scoped>
  .menus
    +pc-layout()
      fixed top 32px left 32px
    +sp-layout()
      fixed top 24px right 16px
    &[data-is-hide="true"]
      visibility hidden
      pointer-events none

  .menu-content
    transition: height 1s cubic-bezier(0.75, 0, 0.25, 1)

  .slide-enter-active, .slide-leave-active
    height: 100%

  .slide-enter, .slide-leave-to
    height: 0

</style>
