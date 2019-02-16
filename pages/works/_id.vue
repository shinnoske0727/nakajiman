<template lang="pug">
  - path = "~/assets/img/works/";
  .work(ref="modal")
    work-content(v-if="currentData" :modal-data="currentData")
    button.arrow--right(@click="goNext") 右
    button.arrow--left(@click="goPrev") 左

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import WorkModalContent from '@/components/work/WorkContent'
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
  .work
    fixed top 0 left 0
    size 100% 100%
    opacity 0.98
    background-color $bg-white
    overflow auto

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
