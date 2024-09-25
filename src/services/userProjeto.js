import axios from "axios";

class UserProjetoService {
    async getAllUserProjetos() {
        const response = await axios.get('user-projetos/');
        return response.data;
    }

    async deleteUserProjeto(id) {
        const response = await axios.delete(`user-projetos/${id}`);
        return response.data;
    }

    async createUserProjeto(userProjetoData) {
        const response = await axios.post('user-projetos/', userProjetoData);
        return response.data;
    }

    async updateUserProjeto(id, userProjetoData) {
        const response = await axios.put(`user-projetos/${id}/`, userProjetoData);
        return response.data;
    }
}

export default new UserProjetoService();
