import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import ServiceView from '@/views/ServiceView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'HomeView',
          component: HomeView,
        },
      ],
    },
    {
      path: '/services-design',
      name: 'design',
      component: ServiceView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
  ],
});

export default router;
