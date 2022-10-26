import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";
import GetUser from "@/pages/getUser/GetUser";
import CreateMeeting from "@/pages/CreateMeeting/CreateMeeting";
import GetFace from "@/pages/GetFace/GetFace";

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            name:'home',
            path:'/home',
            component: Home
        },
        {
            path:'/login',
            component: Login
        },
        {
            name: 'getUser',
            path: '/getUser',
            component: GetUser
        },
        {
            name: 'createMeeting',
            path: '/createMeeting',
            component: CreateMeeting
        },
        {
            name: 'getFace',
            path: '/getFace',
            component: GetFace
        },
        {
            path:'/',
            redirect: '/login'
        }
    ]
})

export default router;