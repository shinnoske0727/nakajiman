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
        state.KVImages = array
    },
    setCurrentKVImages(state, array) {
        state.currentKVImages = array
    }
}
