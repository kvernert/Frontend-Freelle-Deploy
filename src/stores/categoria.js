import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { CategoriaService } from '@/services'

export const useCategoriasStore = defineStore('categoria', () => {
  const state = reactive({
    categorias: [],
  })

  const categorias = computed(() => state.categorias) 

  const getAllCategorias = async () => { 
    try {
      const data = await CategoriaService.getAllCategorias()
      console.log('Resposta da API:', data.results)
      state.categorias = data.results
      console.log('Categorias:', categorias.value)
    } catch (error) {
      console.error('Erro ao buscar categorias:', error)
    }
  }

  const createCategoria = async (categoriaData) => { 
    try {
      const data = await CategoriaService.createCategoria(categoriaData)
      state.categorias.push(data)
    } catch (error) {
      console.error('Erro ao criar categoria:', error)
    }
  }

  const deleteCategoria = async (id) => { 
    try {
      await CategoriaService.deleteCategoria(id)
      state.categorias = state.categorias.filter((categoria) => categoria.id !== id) 
    } catch (error) {
      console.error('Erro ao deletar categoria:', error)
    }
  }

  const updateCategoria = async (id, categoriaData) => { 
    try {
      const updatedCategoria = await CategoriaService.updateCategoria(id, categoriaData)
      const index = state.categorias.findIndex((categoria) => categoria.id === id) 
      if (index !== -1) {
        state.categorias[index] = updatedCategoria
      }
    } catch (error) {
      console.error('Erro ao atualizar categoria:', error)
    }
  }

  return { categorias, getAllCategorias, createCategoria, deleteCategoria, updateCategoria } 
})
