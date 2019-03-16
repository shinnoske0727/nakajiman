<template lang="pug">
  div
    nuxt
    template(v-if="page !== 'works-id'")
      menus
    slider
</template>

<script>
import Menus from '@/components/menu/Menus'
import Slider from '@/components/Slider'

export default {
    components: {
        Menus,
        Slider
    },
    computed: {
        page() {
            return this.$route.name
        },
        id() {
            return this.$route.params ? this.$route.params.id : null
        }
    }
}
</script>

<style lang="stylus">
</style>
