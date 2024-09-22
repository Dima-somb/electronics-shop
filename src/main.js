import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from "@/pages/home-page";
import {createRouter, createWebHistory} from "vue-router";
import NotFoundPage from "@/pages/not-found-page";
import CategoryPage from "@/pages/category-page";


const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/categories/:category',
        component: CategoryPage,
        props: true,
        name: 'Categories'
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

createApp(App)
    .use(router)
    .mount('#app')
