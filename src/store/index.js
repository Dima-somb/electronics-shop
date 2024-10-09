import {createStore} from "vuex";

export default createStore({
    state: {
        counter: 7
    },

    mutations: {
        increment(state) {
            state.counter++;
        }
    },
    actions: {
        incrementCounter({commit}) {
            commit('increment')
        }
    },
    getters: {
        getCounter(state) {
            return state.counter;
        }
    }
})
