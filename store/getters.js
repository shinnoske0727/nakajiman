import _ from 'lodash'
export default {
    currentIndex: state => {
        const currentId = state.worksId
        return _.findIndex(state.worksData, works => works.id === currentId)
    },
    currentData(state, getters) {
        return state.worksData[getters.currentIndex]
    },
    prevData(state, getters) {
        const index = getters.currentIndex - 1
        return state.worksData[index] || _.last(state.worksData)
    },
    nextData(state, getters) {
        const index = getters.currentIndex + 1
        return state.worksData[index] || _.first(state.worksData)
    },
    modalData(state, getters) {
        return [getters.prevData, getters.currentData, getters.nextData]
    },
    KVImageMap(state) {
        return state.KVLinks.reduce(
            (acc, cur, index) => acc.set(state.KVImages[index], cur),
            new Map()
        )
    }
}
