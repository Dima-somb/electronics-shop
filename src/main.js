import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from "@/pages/home-page";
import {createRouter, createWebHistory} from "vue-router";
import NotFoundPage from "@/pages/not-found-page";
import CategoryPage from "@/pages/category-page";
import axios from "axios";


const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/categories/:prm',
        component: CategoryPage,
        props: true,
        name: 'Electronic',
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active'
})

axios.defaults.baseURL = 'http://localhost:3000';

createApp(App)
    .use(router)
    .mount('#app')
