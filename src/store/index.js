import {createStore} from "vuex";
import ApiService from "@/api-service";


function setDataWithExpiry(key, value, ttl) {
    const now = new Date();

    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
}

function getDataWithExpiry(key) {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
}

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
                setDataWithExpiry('orderStuff', existingData, 20000);
                context.commit('addToOrdering', payload);
            }
        },

        initializeOrderingData({ commit }) {
            const data = getDataWithExpiry('orderStuff');

            if (data) {
                data.forEach(item => {
                    commit('addToOrdering', { value: item });
                });
            } else {
                console.log('Термін дії даних закінчився або даних немає.');
            }
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

