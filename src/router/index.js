import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../views/Login'
import HomeComponent from '../views/Home'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: "login-component",
            component: LoginComponent
        },
        {
            path: "/home",
            name: "home-component",
            component: HomeComponent
        }
    ]
})