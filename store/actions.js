export default {
    loadWorksData({ commit }, data) {
        commit('setWorksData', data)
    },
    registerWorksId({ commit }, id) {
        commit('setWorksId', id)
    },
    increaseId({ commit, getters }) {
        const next = getters.nextData
        commit('setWorksId', next.id)
    },
    decreaseId({ commit, getters }) {
        const prev = getters.prevData
        commit('setWorksId', prev.id)
    },
    showMenu({ commit }) {
        commit('setIsShowMenu', true)
    },
    hideMenu({ commit }) {
        commit('setIsShowMenu', false)
    },
    updateLoadedWork({ commit }, state) {
        // state { start : アニメーション開始, covered: アニメーション前半終了 loaded: loading完了, end: アニメーション終了 }
        commit('setIsLoadedWork', state)
    },
    registerKVImages({ commit }, array) {
        commit('setKVImages', array)
    },
    registerCurrentKVImages({ commit }, array) {
        commit('setCurrentKVImages', array)
    },
    registerCurrentCategory({ commit }, category) {
        commit('setCurrentCategory', category)
    },
    registerKVLinks({ commit }, array) {
        commit('setKVLinks', array)
    }
}
