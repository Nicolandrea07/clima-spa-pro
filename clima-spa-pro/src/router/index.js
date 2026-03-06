import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalleView from '../views/DetalleView.vue'

const router = createRouter({
  history: createWebHashHistory(), // ESTO ES CLAVE PARA GITHUB PAGES
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/lugar/:id', name: 'detalle', component: DetalleView, props: true }
  ]
})

export default router