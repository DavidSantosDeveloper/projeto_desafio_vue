import {http} from "./config.js"
import axios from 'axios'
class UsuariosService{


  static async obterTodosUsuarios()  {

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
  static async obterCidades(){
      
        const config = {
          headers: {
            'Authorization': 'Token 8d23698c5b30fe6515331ef1ef40e7a903169829'
          }
        };
        let resposta_json;
        let resposta;
        let resposta_final
        try {
          resposta=await axios.get("https://api-manager-test.infog2.com.br.infog2.com.br/a/cidade/", config )
          resposta_json=await resposta.data 
          resposta_final=resposta_json
          console.log(resposta_final)
        } catch (e) {
          console.error('Erro ao fazer requisição:', e)
        }
        return resposta_final;
  }
  static async cadrastrarUsuario(dados){
      // obter id da cidade

      const params = {
        text: ''
      };
  
      const config = {
        headers: {
          'Authorization': 'Token 8d23698c5b30fe6515331ef1ef40e7a903169829'
        }
      };
  
      try {
        const resposta = await http.post('/a/colaborador/', dados, { params, ...config });
        return resposta.data;
      } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error; // Re-throw para quem chama lidar com o erro
      }

    /*
    const params = {
      text: ''
    };
    
    const config = {
      headers: {
        'Authorization': 'Token 8d23698c5b30fe6515331ef1ef40e7a903169829'
      }
    };
       http.post('/a/colaborador/', dados,{ params, ...config })
      .then(response => {
        // Manipula a resposta

      })
      .catch(error => {
        // Manipula erros
      });
      */

  }
}

UsuariosService.obterCidades()

export default UsuariosService