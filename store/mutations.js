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
    setIsChangeWindow(state, payload) {
        state.isChangeWindow = payload
    },
    setKVImages(state, array) {
        state.kVImages = array
    },
    setCurrentKVImages(state, array) {
        state.currentKVImages = array
    }
}
