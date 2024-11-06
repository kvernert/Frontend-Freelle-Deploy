import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import ServiceView from '@/views/ServiceView.vue';
import LoginView from '@/views/LoginView.vue';
import UpdateProfile from '@/components/ProfilePage/UpdateProfile.vue';
import CadastroUsuario from '@/components/auth/CadastroUsuario.vue';
import RecuperacaoSenha from '@/components/auth/RecuperacaoSenha.vue';
import ValidacaoSenha from '@/components/auth/ValidacaoSenha.vue';

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
      component: CadastroUsuario
    },
    {
      path: '/recuperacao',
      name: 'RecuperaçaoSenha',
      component: RecuperacaoSenha
    },
    {
      path: '/validacao',
      name: 'Validacao',
      component: ValidacaoSenha
    },
    {
      path: '/update',
      name: 'Update',
      component: UpdateProfile,
     },
  ],
});

export default router;
