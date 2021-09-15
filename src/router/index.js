import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'
import Contact from '/src/components/Contact.vue'
import SongDetails from '/src/components/details/SongDetails.vue'
import ArtistDetails from '/src/components/details/ArtistDetails.vue'
import AlbumDetails from '/src/components/details/AlbumDetails.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/songdetails/:videoId',
        name: 'SongDetails',
        component: SongDetails,
    },
    {
        path: '/albumdetails/:browseId',
        name: 'AlbumDetails',
        component: AlbumDetails,
    },
    {
        path: '/artistdetails/:browseId',
        name: 'ArtistDetails',
        component: ArtistDetails,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router