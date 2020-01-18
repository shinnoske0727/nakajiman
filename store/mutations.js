export default {
    setWorksData(state, data) {
        state.worksData = data
    },
    setWorksId(state, id) {
        state.worksId = id
    },
    setIsShowMenu(state, bool) {
        state.isShowMenu = bool
    },
    setIsLoadedWork(state, payload) {
        state.isLoadedWork = payload
    },
    setKVImages(state, array) {
        state.KVImages = array
    },
    setCurrentKVImages(state, array) {
        state.currentKVImages = array
    },
    setCurrentCategory(state, category) {
        state.currentCategory = category
    },
    setKVLinks(state, array) {
        state.KVLinks = array
    },
    setTopKVData(state, array) {
        state.topKVData = array
    }
}
