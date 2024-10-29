import axios from "axios";

class UserService {
    async getAllUsers() {
        const response = await axios.get('usuarios/');
        return response.data;
    }
}

export default new UserService();
