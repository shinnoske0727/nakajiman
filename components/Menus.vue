<template lang="pug">
  .menus
    menu-content(:is-open="isOpen" @change="onChangeMenuState")
    menu-button(@change="onChangeMenuState" :is-open="isOpen")

</template>

<script>
import MenuButton from '@/components/MenuButton'
import MenuContent from '@/components/MenuContent'

export default {
    name: 'Menus',
    components: { MenuContent, MenuButton },
    data() {
        return {
            isOpen: false
        }
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
    position: absolute
    top: 32px
    left: 32px

</style>
