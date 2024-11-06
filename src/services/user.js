import axios from "axios";

class UserService {
    async getAllUsers() {
        const response = await axios.get('usuarios/');
        return response.data;
    }

    async getMeUser(token){
        const response = await axios.get('/usuarios/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response.data;
    }
}

export default new UserService();
