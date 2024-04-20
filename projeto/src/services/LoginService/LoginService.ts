 import {http} from "./config"

 class LoginService{


    static async Autentificar(username: string, password: string): Promise<any> {
        const response = await http.post(`/a/auth/login_colaborador/`, {
          username,
          password
        });
        return response.data;
      }
 }

 export default LoginService