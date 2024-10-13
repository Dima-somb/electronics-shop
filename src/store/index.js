import {createStore} from "vuex";
import ApiService from "@/api-service";

export default createStore({
    state: {
        orderingData: [],
        laptops: null,
        smartphones: null,
        powerSupplies: null,
    },

    mutations: {
        addToOrdering(state, payload) {
            const exists = state.orderingData.some(item => item.id === payload.value.id);
            if (!exists) {
                state.orderingData.push(payload.value);
            }
        },
        setDataForSpecificCategory(state, {category, value}) {
            if (category === 'laptops') {
                state.laptops = value;
            } else if (category === 'power-supplies') {
                state.powerSupplies = value;
            } else if (category === 'smartphones') {
                state.smartphones = value;
            }
        }
    },
    actions: {
        addOrderingStuffs(context, payload) {
            const existingData = JSON.parse(localStorage.getItem('orderStuff')) || [];
            const exists = existingData.some(item => item.id === payload.value.id);
            if (!exists) {
                existingData.push(payload.value);
                localStorage.setItem('orderStuff', JSON.stringify(existingData));
                context.commit('addToOrdering', payload);
            }
        },

        initializeOrderingData({ commit }) {
            const existingData = JSON.parse(localStorage.getItem('orderStuff')) || [];
            existingData.forEach(item => {
                commit('addToOrdering', { value: item });
            });
        },

        fetchCategoriesData(context, { category, queryParam }) {
             ApiService.getCategories(queryParam)
                 .then((res) => {
                     const data = res.data[0]?.products.slice(0, 6);
                     context.commit('setDataForSpecificCategory', {category, value: data});
                 });
        }
    },
    getters: {
        getOrderingData(state) {
            return state.orderingData;
        },
        orderingDataLength(state, getters) {
            return getters.getOrderingData.length;
        },

        getLaptops(state) {
            return state.laptops
        },
        getPowerSupplies(state) {
            return state.powerSupplies
        },
        getSmartphones(state) {
           return state.smartphones
        }
    }
})

