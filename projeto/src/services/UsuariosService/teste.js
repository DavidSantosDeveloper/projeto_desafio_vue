import {http} from "./config.js"

class UsuariosService{


   static async obterTodosUsuarios(){

     const params = {
       text: ''
     };
     
     const config = {
       headers: {
         'Authorization': 'Token 8d23698c5b30fe6515331ef1ef40e7a903169829'
       }
     };
     let resposta_json;
     const resposta=http
     .get("/a/colaborador/?text=", { params, ...config })
     .then(function (response) {
       console.log(response.data);
       resposta_json=response.data
     })
     .catch(function (error) {
       console.error('Erro ao fazer requisição:', error);
     });

     return resposta_json;

   }
}
const teste=new UsuariosService()
UsuariosService.obterTodosUsuarios()

export default UsuariosService