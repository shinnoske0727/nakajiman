<template lang="pug">
  - path = "~/assets/img/common/";
  div
    nuxt
    template(v-if="page !== 'works-id'")
      menus
    slider
    p.loading(v-if="isLoadedWork.state === 'covered'")
      img.loading__image(src=`${path}txt_loading.svg` alt="LOADING")
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
    transform : translate(-50%, -50%)
    z-index: 4
    animation blight 0.12s infinite

.loading__image
    height 10px
    +sp-layout()
      height 8px
</style>
