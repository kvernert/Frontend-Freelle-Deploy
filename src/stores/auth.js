import { defineStore } from 'pinia';
import AuthService from '@/services/auth';
import { reactive } from 'vue';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    token: localStorage.getItem('authToken') || null,
  });

  function setToken(newToken) {
    state.token = newToken;
    localStorage.setItem('authToken', newToken);
  }

  async function LoginUser(credentials) {
    try {
      const response = await authService.LoginUser(credentials);
      setToken(response.access); 
      return response;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  }

  function LogoutUser() {
    state.token = null;
    localStorage.removeItem('authToken');
  }

  async function RegisterUser(userData) {
    try {
      const response = await authService.RegisterUser(userData);
      return response;
    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
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

  return { state, setToken, LoginUser, LogoutUser, RegisterUser, getUserToken };
});
