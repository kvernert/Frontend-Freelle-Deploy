import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import ComentarioService from '@/services/ComentarioService';

export const useComentarioStore = defineStore('comentario', () => {
  const state = reactive({
    comentarios: [],
  });

  const comentarios = computed(() => state.comentarios);

  const getAllComentarios = async () => {
    try {
      const data = await ComentarioService.getAllComentarios();
      state.comentarios = data.results;
    } catch (error) {
      console.error('Erro ao buscar comentários:', error);
    }
  };

  const createComentario = async (comentarioData) => {
    try {
      const newComentario = await ComentarioService.createComentario(comentarioData);
      state.comentarios.push(newComentario);
    } catch (error) {
      console.error('Erro ao criar comentário:', error);
    }
  };

  const deleteComentario = async (id) => {
    try {
      await ComentarioService.deleteComentario(id);
      state.comentarios = state.comentarios.filter((comentario) => comentario.id !== id);
    } catch (error) {
      console.error('Erro ao deletar comentário:', error);
    }
  };

  const updateComentario = async (id, comentarioData) => {
    try {
      const updatedComentario = await ComentarioService.updateComentario(id, comentarioData);
      const index = state.comentarios.findIndex((comentario) => comentario.id === id);
      if (index !== -1) {
        state.comentarios[index] = updatedComentario;
      }
    } catch (error) {
      console.error('Erro ao atualizar comentário:', error);
    }
  };

  return {
    comentarios,
    getAllComentarios,
    createComentario,
    deleteComentario,
    updateComentario,
  };
});
