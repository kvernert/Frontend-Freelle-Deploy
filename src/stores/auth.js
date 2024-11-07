import { defineStore } from 'pinia';
import AuthService from '@/services/auth';
import { reactive, computed } from 'vue';
import { useLoadingStore } from '@/stores/loading';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    token: localStorage.getItem('authToken') || null,
  });

  const loadingStore = useLoadingStore();

  const isLogged = computed(() => !!state.token);  

  function setToken(newToken) {
    state.token = newToken;
    localStorage.setItem('authToken', newToken);
  }

  async function LoginUser(credentials) {
    loadingStore.startLoading();
    try {
      const response = await authService.LoginUser(credentials);
      setToken(response.access);
      return response;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    } finally {
      loadingStore.stopLoading();
    }
  }

  function LogoutUser() {
    state.token = null;
    isLogged.value = false;
    localStorage.removeItem('authToken');
  }

  async function RegisterUser(userData) {
    loadingStore.startLoading();
    try {
      const response = await authService.RegisterUser(userData);
      return response;
    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
    } finally {
      loadingStore.stopLoading();
    }
  }

  async function getUserToken() {
    if (!state.token) return null;
    try {
      const response = await authService.postUserToken(state.token);
      return response;
    } catch (error) {
      console.error('Erro ao obter o token do usuário:', error);
      throw error;
    }
  }

  return { state, setToken, LoginUser, LogoutUser, RegisterUser, getUserToken, isLogged };
});
