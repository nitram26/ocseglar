import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import IndexOcs from '../views/IndexOcs.vue';
import HeaderUno from '../components/HeaderUno.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/indexOcs',
    name: 'IndexOcs',
    component: IndexOcs
  },
  {
    path: '/headerUno',
    name: 'HeaderUno',
    component: HeaderUno
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
