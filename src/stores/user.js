import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import UserService from '@/services/user';
import { useLoadingStore } from '@/stores/loading'; 

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    users: [],
    currentUser: null,  
  });

  const users = computed(() => state.users);
  const UsersLimeted = computed(() => state.users.slice(0, 3));
  const currentUser = computed(() => state.currentUser); 

  const loadingStore = useLoadingStore();

  const getAllUsers = async () => {
    loadingStore.startLoading(); 

    try {
      const data = await UserService.getAllUsers();
      state.users = data.results;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  const getMeUser = async (token) => {
    loadingStore.startLoading(); 

    try {
      const data = await UserService.getMeUser(token);  
      state.currentUser = data;  
    } catch (error) {
      console.error('Erro ao buscar o usuário logado:', error);
    } finally {
      loadingStore.stopLoading();
    }
  };

  return { users, getAllUsers, UsersLimeted, currentUser, getMeUser };
});
