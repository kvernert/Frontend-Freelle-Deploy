import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import {UserProjetoService} from '@/services';

export const useUserProjetosStore = defineStore('userProjeto', () => {
  const state = reactive({
    userProjetos: []
  });

  const userProjetos = computed(() => state.userProjetos);

  const getAllUserProjetos = async () => {
    const data = await UserProjetoService.getAllUserProjetos();
    state.userProjetos = data;
  };

  const createUserProjeto = async (userProjetoData) => {
    const data = await UserProjetoService.createUserProjeto(userProjetoData);
    state.userProjetos.push(data);
  };

  const deleteUserProjeto = async (id) => {
    await UserProjetoService.deleteUserProjeto(id);
    state.userProjetos = state.userProjetos.filter((userProjeto) => userProjeto.id !== id);
  };

  const updateUserProjeto = async (id, userProjetoData) => {
    const updatedUserProjeto = await UserProjetoService.updateUserProjeto(id, userProjetoData);
    const index = state.userProjetos.findIndex((userProjeto) => userProjeto.id === id);
    if (index !== -1) {
      state.userProjetos[index] = updatedUserProjeto;
    }
  };

  return { userProjetos, getAllUserProjetos, createUserProjeto, deleteUserProjeto, updateUserProjeto };
});
