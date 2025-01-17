import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductPage from '../views/ProductPage.vue';
import ApplyForm from '../views/ApplyForm.vue';
import AboutPage from '../views/AboutPage.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/product', name: 'Product', component: ProductPage },
    { path: '/apply', name: 'Apply', component: ApplyForm },
    { path: '/about', name: 'About', component: AboutPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;