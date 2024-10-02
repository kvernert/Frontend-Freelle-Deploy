import axios from "axios";

class FavoritoService {
    async getAllFavoritos() {
        const response = await axios.get('favoritos/');
        return response.data;
    }

    async deleteFavorito(id) {
        const response = await axios.delete(`favoritos/${id}`);
        return response.data;
    }

    async createFavorito(favoritoData) {
        const response = await axios.post('favoritos/', favoritoData);
        return response.data;
    }

    async updateFavorito(id, favoritoData) {
        const response = await axios.put(`favoritos/${id}/`, favoritoData);
        return response.data;
    }
}

export default new FavoritoService();
