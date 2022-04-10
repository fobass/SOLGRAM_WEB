import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Trade from '@/views/workspace/Trade.vue'
import Market from '@/views/workspace/Market.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        redirect: '/trade'
    },
    // {
        // path: '/main',
        // name: 'Main',
        // component: () => import('../views/Main.vue'),
    // },
    {
        path: '/market',
        name: 'Market',
        component: Market
    },
    {
        path: '/trade',
        name: 'Trade',
        component: Trade
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass: "active" 
})

export default router