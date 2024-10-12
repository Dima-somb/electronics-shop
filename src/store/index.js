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
            state.orderingData.push(payload.value);
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
            context.commit('addToOrdering', payload);
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

