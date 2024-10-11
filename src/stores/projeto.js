import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import {ProjetoService} from '@/services'

export const useProjetosStore = defineStore('projeto', () => {
  const state = reactive({
    projetos: []
  })

  const projetos = computed(() => state.projetos)

  const getAllProjetos = async () => {
    const data = await ProjetoService.getAllProjetos()
    state.projetos = data.results
  }

  const createProjeto = async (projetoData) => {
    const data = await ProjetoService.createProjeto(projetoData)
    state.projetos.push(data)
  }

  const deleteProjeto = async (id) => {
    await ProjetoService.deleteProjeto(id)
    state.projetos = state.projetos.filter((projeto) => projeto.id !== id)
  }

  const updateProjeto = async (id, projetoData) => {
    const updatedProjeto = await ProjetoService.updateProjeto(id, projetoData)
    const index = state.projetos.findIndex((projeto) => projeto.id === id)
    if (index !== -1) {
      state.projetos[index] = updatedProjeto
    }
  }

  return { projetos, getAllProjetos, createProjeto, deleteProjeto, updateProjeto }
})
