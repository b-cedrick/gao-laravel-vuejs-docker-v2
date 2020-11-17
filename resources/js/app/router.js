import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './component/layout/Home.vue'
// import Ordinateur from './component/layout/Ordinateur.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/',
            name: 'home',
            component: Home
        }
        // ,
        // { 
        //     path: '/ordi/list',
        //     name: 'list',
        //     component: Ordinateur
        // }
    ]
})
export default router