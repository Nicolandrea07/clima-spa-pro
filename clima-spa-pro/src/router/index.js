import { createRouter, createWebHashHistory } from 'vue-router' // Cambia esto

const router = createRouter({
  history: createWebHashHistory(), // Cambia a Hash History
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/lugar/:id', name: 'Detalle', component: DetalleView, props: true }
  ]
})
