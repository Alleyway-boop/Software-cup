//路由
import Vue from '@vue'
import VueRouter from 'vue-router';
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
});

export default router;