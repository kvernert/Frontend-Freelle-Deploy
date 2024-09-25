import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import {CategoriaService} from '@/services' 

export const useCategoriasStore = defineStore('categoria', () => {
  const state = reactive({
    categorias: [],
    listaCategorias: [
        { id: 1, nome: 'Categoria 1' },
        { id: 2, nome: 'Categoria 2' },
        { id: 3, nome: 'Categoria 3' }
      ]
  })

  const categorias = computed(() => state.categorias) 

  const Listacategorias = computed(() => state.listaCategorias);

  const getAllListaCategorias = () => {
    return state.listaCategorias;
  };
  const getAllCategorias = async () => { 
    const data = await CategoriaService.getAllCategorias()
    state.categorias = data
  }

  const createCategoria = async (categoriaData) => { 
    const data = await CategoriaService.createCategoria(categoriaData)
    state.categorias.push(data)
  }

  const deleteCategoria = async (id) => { 
    await CategoriaService.deleteCategoria(id)
    state.categorias = state.categorias.filter((categoria) => categoria.id !== id) 
  }

  const updateCategoria = async (id, categoriaData) => { 
    const updatedCategoria = await CategoriaService.updateCategoria(id, categoriaData)
    const index = state.categorias.findIndex((categoria) => categoria.id === id) 
    if (index !== -1) {
      state.categorias[index] = updatedCategoria
    }
  }

  return { categorias, getAllCategorias, createCategoria, deleteCategoria, updateCategoria, Listacategorias, getAllListaCategorias } 
})
