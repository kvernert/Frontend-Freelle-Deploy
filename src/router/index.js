
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import ServiceView from '@/views/ServiceView.vue';
import LoginView from '@/views/LoginView.vue';
import CadastroView from '@/views/CadastroView.vue';
import RecuperacaoView from '@/views/RecuperacaoView.vue';
import ValidacaoView from '@/views/ValidacaoView.vue';
import UpdateProfile from '@/components/ProfilePage/UpdateProfile.vue';
import JobView from '@/views/JobView.vue';

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
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: CadastroView
    },
    {
      path: '/recuperacao',
      name: 'RecuperaçaoSenha',
      component: RecuperacaoView
    },
    {
      path: '/validacao',
      name: 'Validacao',
      component: ValidacaoView
    },
    {
      path: '/update',
      name: 'Update',
      component: UpdateProfile
    }
    {
      path: '/job-page',
      name: 'Job',
      component: JobView,
    }
  ],
});

export default router;
