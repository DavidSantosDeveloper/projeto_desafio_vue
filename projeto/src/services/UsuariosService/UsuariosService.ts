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
    static async obterCidade(nome_cidade:String){
          const params = {
            nome:nome_cidade 
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
            resposta=await http.get("/a/cidade/", { params, ...config })
            resposta_json=await resposta.data 
            resposta_final=await resposta_json
            console.log(resposta_final)
          } catch (e) {
            console.error('Erro ao fazer requisição:', e)
          }
          return resposta_final;
    }
    static async obterBairro(cidade_id:Number,nome_bairro:String){
      const params = {
        cidade_id:cidade_id
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
        resposta=await http.get("/a/bairro/", { params, ...config })
        resposta_json=await resposta.data 
        resposta_final=await resposta_json
        console.log(resposta_final)
      } catch (e) {
        console.error('Erro ao fazer requisição:', e)
      }
      return resposta_final;
}
    static async cadrastrarUsuario(dados_do_formulario:any):Promise<any>{
      console.log(">>>>>>>>>>>>>>>>>dados do formulario<<<<<<")
        console.log(dados_do_formulario)
        // obter id da cidade
        let cidade_formulario=await UsuariosService.obterCidade(dados_do_formulario.cidade.toUpperCase())
        let id_cidade_formulario=await cidade_formulario[0].id
        console.log(cidade_formulario)
        console.log(id_cidade_formulario)
      // obter id do bairro
      let bairros=await UsuariosService.obterBairro(id_cidade_formulario,dados_do_formulario.bairro)
      let bairro=await bairros.filter(bairro => bairro.nome.toLowerCase().includes(dados_do_formulario.bairro.toLowerCase()))[0]

      console.log(bairro)
        
    
        const config = {
          headers: {
            'Authorization': 'Token 8d23698c5b30fe6515331ef1ef40e7a903169829',
            'Content-Type': 'application/json'
          }
        };
        let dados={
                endereco_residencial: {
                  cep: dados_do_formulario.cep_endereco || "",
                  cidade: (cidade_formulario[0].id!=undefined) ? cidade_formulario[0].id+"" : "",
                  bairro: (bairro.id!=undefined) ? bairro.id+"" : "",
                  logradouro: dados_do_formulario.logradouro_endereco|| "",
                  numero: dados_do_formulario.numero || "",
                  complemento: dados_do_formulario.complemento || "",
                  referencia: dados_do_formulario.referencia || ""
              },
              estado_civil: dados_do_formulario.estado_civil || "",
              naturalidade:dados_do_formulario.naturalidade || "",
              nome_pai: dados_do_formulario.nome_pai || "",
              nome_mae: dados_do_formulario.nome_mae || "",
              numero_identidade: dados_do_formulario.numero_identidade || "",
              orgao_emissor_identidade: dados_do_formulario.emissao_carteira_de_trabalho || "",
              uf_identidade: dados_do_formulario.uf_indentidade || "",
              numero_titulo_eleitor: dados_do_formulario.titulo_eleitor || "",
              secao_titulo_eleitor:dados_do_formulario.secao_titulo || "" ,
              zona_titulo_eleitor: dados_do_formulario.zona_titulo || "",
              numero_carteira_trabalho:dados_do_formulario.numero_carteira_de_trabalho || "",
              serie_carteira_trabalho:dados_do_formulario.serie_carteira_de_trabalho || "",
              data_emissao_carteira_trabalho: (dados_do_formulario.emissao_carteira_de_trabalho!="")?dados_do_formulario.emissao_carteira_de_trabalho:null,
              uf_carteira_trabalho: dados_do_formulario.uf_carteira_de_trabalho || "",
              data_admissao: null,
              data_demissao: null,
              perfil: dados_do_formulario.perfil || "",
              funcao: dados_do_formulario.funcao || "",
              pix_key: dados_do_formulario.chave_pix || "",
              nome: dados_do_formulario.nome || "",
              apelido: dados_do_formulario.apelido || "",
              cpf_cnpj: dados_do_formulario.cpf || "",
              telefone: dados_do_formulario.telefone || "",
              email: dados_do_formulario.email || "",
              data_nascimento:dados_do_formulario.data_de_nascimento || null,
              horario_colaborador: {
                  dia_util_inicio_manha: dados_do_formulario.horario_semana_inicio || null,
                  dia_util_fim_manha: "12:00" ,
                  dia_util_inicio_tarde: "14:00",
                  dia_util_fim_tarde: dados_do_formulario.horario_semana_fim || null,
                  sabado_inicio: dados_do_formulario.horario_fim_semana_inicio|| null,
                  sabado_fim: dados_do_formulario.horario_fim_semana_fim || null
              }       
        }
        console.log(dados)
    
        try {
          const resposta = await http.post('/a/colaborador/', dados, {  ...config });
          console.log(">>>>>>CADRASTRO REALIZADO<<<<<<<")
          let resposta_json=await resposta.data
          console.log("status code: ",resposta.status)
          console.log(resposta)
          return resposta.data;
        } catch (error) {
          console.error('Erro ao fazer requisição:', error);
          throw error; // Re-throw para quem chama lidar com o erro
        }

      
      /*
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

 export default UsuariosService