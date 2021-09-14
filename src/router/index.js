import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import MusicDetails from '/src/components/MusicDetails.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/musicdetails/:browseId',
        name: 'MusicDetails',
        component: MusicDetails,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router