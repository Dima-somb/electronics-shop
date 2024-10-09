import {createStore} from "vuex";

export default createStore({
    state: {
        counter: 0,
        orderingData: []
    },

    mutations: {
        increment(state) {
            state.counter++;
        },
        addToOrdering(state, payload) {
            state.orderingData.push(payload.value);
        }
    },
    actions: {
        incrementCounter({commit}) {
            commit('increment')
        },
        addOrderingStuffs(context, payload) {
            context.commit('addToOrdering', payload);
        }
    },
    getters: {
        getCounter(state) {
            return state.counter;
        },
        getOrderingData(state) {
            return state.orderingData;
        },


        orderingDataLength(state, getters) {
            return getters.getOrderingData.length;
        }
    }
})

