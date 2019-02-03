<template lang="pug">
  section.works
    work-menu(@change="changeCategory" :category="currentCategory")
    .inner
      template(v-for="data in visibleData")
        .dammy-image(@click="openModal(data.id)" :data-category="data.category" :key="data.id") {{ data.name }}
    menus
    work-modal(v-if="isOpenModal" @close="closeModal" :works-data="visibleData")
</template>

<script>
import { mapActions } from 'vuex'
import filter from 'lodash/filter'
import WorkMenu from '@/components/work/WorkMenu'
import WorkModal from '@/components/work/WorkModal'
import Menus from '@/components/menu/Menus'

const dammyData = [
    {
        name: 'イラスト',
        category: 'illustration',
        id: 1,
        explain:
            'イラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラストイラスト'
    },
    {
        name: 'UI',
        category: 'ui',
        id: 2,
        explain: 'UIUIUIUIUIUIUIUIUIUIUI'
    },
    {
        name: 'WEB',
        category: 'web',
        id: 3,
        explain:
            'WEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEBWEB'
    },
    {
        name: 'PHOTOGRAPH',
        category: 'photograph',
        id: 4,
        explain:
            'photographphotographphotographphotographphotographphotographphotographphotographphotographphotographphotograph'
    },
    {
        name: 'イラスト',
        category: 'illustration',
        id: 5
    },
    {
        name: 'UI',
        category: 'ui',
        id: 6
    },
    {
        name: 'WEB',
        category: 'web',
        id: 7
    },
    {
        name: 'PHOTOGRAPH',
        category: 'photograph',
        id: 8
    },
    {
        name: 'イラスト',
        category: 'illustration',
        id: 9
    },
    {
        name: 'UI',
        category: 'ui',
        id: 10
    },
    {
        name: 'WEB',
        category: 'web',
        id: 11
    },
    {
        name: 'PHOTOGRAPH',
        category: 'photograph',
        id: 12
    }
]
export default {
    layout: 'hasModalLayout',
    name: 'Works',
    async fetch({ store }) {
        return store.dispatch('loadWorksData', dammyData)
    },
    components: {
        Menus,
        WorkModal,
        WorkMenu
    },
    data() {
        return {
            currentCategory: this.$route.params.id,
            isOpenModal: false
        }
    },
    computed: {
        visibleData() {
            if (!this.currentCategory) return dammyData
            return filter(
                dammyData,
                data => data.category === this.currentCategory
            )
        }
    },
    watch: {
        visibleData: function(newData) {
            this.loadWorksData(newData)
        }
    },
    methods: {
        ...mapActions(['loadWorksData', 'registerWorksId']),
        openModal(id) {
            this.registerWorksId(id)
            this.isOpenModal = true
        },
        closeModal() {
            this.isOpenModal = false
        },
        changeCategory(val) {
            this.currentCategory = val
        }
    }
}
</script>

<style lang="stylus" scoped>
  .works
    padding-top 91px

  .inner
    size 100%
    display grid
    grid-template-columns: auto auto auto


  .dammy-image
    min-size 480px 270px
    background-color red
    box-sizing border-box
    line-height: 270px;
    text-align: center
    &[data-category="ui"]
      background-color: #FFC1CF;
    &[data-category="web"]
      background-color: #E8FFB6;
    &[data-category="illustration"]
      background-color: #E2A0FF;
    &[data-category="photograph"]
      background-color: #C4F5FC;
</style>
