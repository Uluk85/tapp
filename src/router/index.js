import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Login from '/src/components/Login.vue'
import Dashboard from '/src/views/Dashboard.vue';
import Offers from '/src/views/Offers.vue';
import Tasks from '/src/views/Tasks.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/offers',
        name: 'Offers',
        component: Offers,
    },
    {
        path: '/tasks',
        name: 'Tasks',
        component: Tasks,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
