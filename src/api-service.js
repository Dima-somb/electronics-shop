import axios from "axios";

export default {

    // getBrands(queryParam) {
    //     return axios.get(`/brands?name=${queryParam}`)
    // },

    getCategories(queryParam) {
        return axios.get(`/categories?name=${queryParam}`)
    }
}
