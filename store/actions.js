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
    changeWindow({ commit }, direction = 'right') {
        commit('setIsChangeWindow', { state: true, direction })
    },
    waitWindow({ commit }) {
        commit('setIsChangeWindow', { state: false, direction: 'right' })
    },
    registerKVImages({ commit }, array) {
        commit('setKVImages', array)
    },
    registerCurrentKVImages({ commit }, array) {
        commit('setCurrentKVImages', array)
    },
    registerCurrentCategory({ commit }, category) {
        commit('setCurrentCategory', category)
    }
}
