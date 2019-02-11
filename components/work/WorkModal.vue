<template lang="pug">
  - path = "~/assets/img/works/";
  - path = "~/assets/img/works/";
  .work-modal(ref="modal")
    work-modal-content(v-if="currentData" :modal-data="currentData")
    button.arrow--right(@click="goNext") 右
    button.arrow--left(@click="goPrev") 左
    .button-wrapper
      button.button(@click="closeModal")

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import WorkModalContent from '@/components/work/WorkModalContent'
export default {
    name: 'WorkModal',
    components: { WorkModalContent },
    props: {
        worksData: {
            default: function() {
                return []
            },
            type: Array
        }
    },
    computed: {
        ...mapGetters(['currentData'])
    },
    methods: {
        ...mapActions(['increaseId', 'decreaseId']),
        goNext() {
            this.increaseId()
        },
        goPrev() {
            this.decreaseId()
        },
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped lang="stylus">
  .work-modal
    fixed top 0 left 0
    size 100% 100%
    opacity 0.98
    background-color $bg-white
    overflow auto

  .button-wrapper
    padding: 0 0 20px 0;
    box-sizing: content-box
    +pc-layout()
      fixed top 32px left 32px
    +sp-layout()
      fixed top 24px right 16px

  .button
    position: relative
    size: $menu-width $bar-length
    background-color transparent
    transition none
    +pc-layout()
      size: $menu-width $bar-length
    +sp-layout()
      size: $menu-width-sp $bar-length-sp

    &::before,
    &::after
      content: ""
      absolute top 0 left 50%
      display: block
      width: 100%
      height: $bar-length
      background-color: $text-black
      transform-origin: 50% 50%
      +sp-layout()
        size: 100% $bar-length-sp

    &::before
      transform: translate(-50%, 0) rotate(45deg);
    &::after
      transform: translate(-50%, 0) rotate(-45deg);

  .arrow--right,
  .arrow--left
    background-color: $bg-black;
    background-size: 12px 22px
    hide-text()
    +pc-layout()
      fixed top 312px
      size 42px
    +sp-layout()
      fixed top 493px
      size 38px

  .arrow--right
    background-image: url("~assets/img/works/icn_arrow_right.svg")
    +pc-layout()
      right: 32px
    +sp-layout()
      right: 16px

  .arrow--left
    background-image: url("~assets/img/works/icn_arrow_left.svg")
    +pc-layout()
      left: 32px
    +sp-layout()
      left: 16px
</style>
