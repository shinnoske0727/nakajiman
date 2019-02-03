import _ from 'lodash'
export default {
    currentIndex: function(state) {
        const currentId = state.worksId
        return _.findIndex(state.worksData, works => works.id === currentId)
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
        const currentData = state.worksData[getters.currentIndex]
        return [getters.prevData, currentData, getters.nextData]
    }
}
