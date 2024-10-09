import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import FavoritoService from '@/services/favoritos';

export const useFavoritosStore = defineStore('favorito', () => {
  const state = reactive({
    favoritos: []
  });

  const favoritos = computed(() => state.favoritos);

  const getAllFavoritos = async () => {
    const data = await FavoritoService.getAllFavoritos();
    state.favoritos = data.results;
  };

  const createFavorito = async (favoritoData) => {
    const data = await FavoritoService.createFavorito(favoritoData);
    state.favoritos.push(data);
  };

  const deleteFavorito = async (id) => {
    await FavoritoService.deleteFavorito(id);
    state.favoritos = state.favoritos.filter((favorito) => favorito.id !== id);
  };

  const updateFavorito = async (id, favoritoData) => {
    const updatedFavorito = await FavoritoService.updateFavorito(id, favoritoData);
    const index = state.favoritos.findIndex((favorito) => favorito.id === id);
    if (index !== -1) {
      state.favoritos[index] = updatedFavorito;
    }
  };

  return { favoritos, getAllFavoritos, createFavorito, deleteFavorito, updateFavorito };
});
