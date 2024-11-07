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
  

}

export default new ProjetoService()