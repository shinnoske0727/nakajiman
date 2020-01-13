<template lang="pug">
  div
    nuxt
    template(v-if="page !== 'works-id'")
      menus
    slider
    p.loading(v-if="isLoadedWork === 'covered'") LOADING
</template>

<script>
import Menus from '@/components/menu/Menus'
import Slider from '@/components/Slider'
import { mapState } from 'vuex'

export default {
    components: {
        Menus,
        Slider
    },
    computed: {
        ...mapState(['isLoadedWork']),
        page() {
            return this.$route.name
        },
        id() {
            return this.$route.params ? this.$route.params.id : null
        }
    }
}
</script>

<style lang="stylus" scoped>
.loading
    position: fixed
    top: 50%
    left: 50%
    display flex
    justify-content center
    align-items center
    width: 100%
    height: 100%
    font-family: GillSans;
    font-size: 12px;
    letter-spacing: 1.71px;
    color: #000000;
    transform : translate(-50%, -50%)
    z-index: 4
    animation blight 0.12s infinite
</style>
