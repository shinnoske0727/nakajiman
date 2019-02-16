export default {
    loadWorksData({ commit }, data) {
        commit('setWorksData', data)
    },
    registerWorksId({ commit }, id) {
        commit('setWorksId', id)
    },
    increaseId({ commit, getters }) {
        const next = getters.nextData
        console.log(next.id)
        commit('setWorksId', next.id)
    },
    decreaseId({ commit, getters }) {
        const prev = getters.prevData
        console.log(prev.id)
        commit('setWorksId', prev.id)
    },
    showMenu({ commit }) {
        commit('setIsShowMenu', true)
    },
    hideMenu({ commit }) {
        commit('setIsShowMenu', false)
    },
    changeWindow({ commit }) {
        commit('setIsChangeWindow', true)
    },
    waitWindow({ commit }) {
        commit('setIsChangeWindow', false)
    }
}
