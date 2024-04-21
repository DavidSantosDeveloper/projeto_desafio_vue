 import {http} from "./config"

 class UsuariosService{


    static async obterTodosUsuarios(): Promise<any> {

      const params = {
        text: ''
      };
      
      const config = {
        headers: {
          'Authorization': 'Token 8d23698c5b30fe6515331ef1ef40e7a903169829'
        }
      };
      let resposta_json;
      let resposta;
      let resposta_final
      try {
         resposta=await http.get("/a/colaborador/?text=", { params, ...config })
         resposta_json=await resposta.data 
         resposta_final=resposta_json.results
         console.log(resposta_final)
      } catch (e) {
        console.error('Erro ao fazer requisição:', e)
      }
      return resposta_final;


     
    /*
      .then(function (response) {
        console.log(response.data);
        resposta_json=response.data
      })
      .catch(function (error) {
        console.error('Erro ao fazer requisição:', error);
      });
   */
      

    }
 }

 export default UsuariosService