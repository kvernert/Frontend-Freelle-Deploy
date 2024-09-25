import axios from "axios";

class CategoriaService {
    async getAllCategorias() {
        const response = await axios.get('categorias/')
        return response.data
    }

    async deleteCategoria(id) {
        const response = await axios.delete(`categorias/${id}`)
        return response.data
    }

    async createCategoria(categoriaData) { 
        const response = await axios.post('categorias/', categoriaData);
        return response.data
    }

    async updateCategoria(id, categoriaData) {
        const response = await axios.put(`categorias/${id}/`, categoriaData);
        return response.data;
    }
}

export default new CategoriaService()
