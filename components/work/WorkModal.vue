<template lang="pug">
  - path = "~/assets/img/works/";
  - path = "~/assets/img/works/";
  .work-modal(ref="modal")
    work-modal-content(v-if="currentData" :modal-data="currentData")
    button.arrow--right(@click="goNext") 右
    button.arrow--left(@click="goPrev") 左
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

  .button
    fixed top 32px left 32px
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
    absolute: top 312px
    width: 42px;
    height: 42px;
    background-color: $bg-black;
    background-size: 12px 22px
    hide-text()

  .arrow--right
    right: 32px
    background-image: url("~assets/img/works/icn_arrow_right.svg")

  .arrow--left
    left: 32px
    background-image: url("~assets/img/works/icn_arrow_left.svg")
</style>
