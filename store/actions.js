export default {
    loadWorksData({ commit }, data) {
        commit('setWorksData', data)
    },
    registerWorksId({ commit }, id) {
        commit('setWorksId', id)
    }
}
