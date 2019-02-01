<template lang="pug">
  section.works
    work-menu(@change="changeCategory" :category="currentCategory")
    .inner
      template(v-for="image in visbleImages")
        .dammy-image(:data-category="image.category" :key="image.id") {{ image.name }}
    work-modal
</template>

<script>
import _ from 'lodash'
import WorkMenu from '@/components/work/WorkMenu'
import WorkModal from '@/components/work/WorkModal'

const dammyData = [
    {
        name: 'イラスト',
        category: 'illustration',
        id: 1
    },
    {
        name: 'UI',
        category: 'ui',
        id: 2
    },
    {
        name: 'WEB',
        category: 'web',
        id: 3
    },
    {
        name: 'PHOTOGRAPH',
        category: 'photograph',
        id: 4
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
    name: 'Works',
    components: {
      WorkModal,
        WorkMenu
    },
    data() {
        return {
            currentCategory: this.$route.params.id
        }
    },
    computed: {
        visbleImages() {
            if (!this.currentCategory) return dammyData
            return _.filter(
                dammyData,
                data => data.category === this.currentCategory
            )
        }
    },
    mounted() {},
    methods: {
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
