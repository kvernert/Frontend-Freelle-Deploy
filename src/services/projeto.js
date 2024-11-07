import axios from "axios";
class ProjetoService {
    async getAllProjetos() {
        const response = await axios.get('projetos/')
        return response.data
    }
    async deleteProjeto(id) {
        const response = await axios.delete(`projetos/${id}`)
        return response.data
    }
    async createProjeto(projetoData){
        const response = await axios.post('projetos/', projetoData);
        return response.data
    }
    async updateProjeto(id, projetoData) {
            const response = await axios.put(`projetos/${id}/`, projetoData);
            return response.data;
    }
  async getProjetosyCategoria(categoriaId) {
    try {
        const response = await axios.get(`projetos/?categoria_id=${categoriaId}`);
        return response.data.results;
      } catch (error) {
        console.error('Erro ao buscar projetos por categoria:', error);
        throw error;
      }
  }

}

export default new ProjetoService()