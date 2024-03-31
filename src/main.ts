import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import Homeview from './views/Home.vue'
import AboutView from './views/About.vue'
import GameView from './views/Game.vue'

const routes = [
    { path: '/', name: 'home', component: Homeview},
    { path: '/about', name: 'about', component: AboutView},
    { path: '/game/:id', name: 'game', component: GameView},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

createApp(App).use(router).mount('#app')
