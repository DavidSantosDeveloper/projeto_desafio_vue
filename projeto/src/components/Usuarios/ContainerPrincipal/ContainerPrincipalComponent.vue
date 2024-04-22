<template>
   
   <section class="container-conteudo">
        <section class="container-menu-opcoes-principais">
            <section class="opcoes">
                  <h1>Usuários</h1>
                  <button type="button"> <img src="../../../assets/usuarios_butao_mais.png" alt="" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> </button>
            </section>

        </section>

        <section class="container-lista-de-usuarios" >
             <MensagemSemUsuariosComponent  v-if="this.dadosEstaoCarregados.value==false"/>
             <ModalFormularioComponent  />

             <div v-for="funcionario in usuarios" :key="funcionario.id">
                <CardFuncionarioComponent 
                :id="funcionario.id"
                :nome="funcionario.nome" 
                :cpf_cnpj_formatado="funcionario.cpf_cnpj_formatado" 
                :cidade="funcionario.cidade"
                :endereco_residencial="funcionario.endereco_residencial"
                :perfil_str="funcionario.perfil_str"
                :status="funcionario.status"
                />
             </div>
              

             
        </section>
   </section>
    
   </template>
     
     <script lang="ts">
     import { defineComponent,reactive } from 'vue';
     import CardOpcaoComponent from "@/components/Utilitarios/CardOpcao/CardOpcaoComponent.vue"
     import MensagemSemUsuariosComponent from '@/components/Usuarios/MensagemSemUsuarios/MensagemSemUsuariosComponent.vue'
     import ModalFormularioComponent from "@/components/Usuarios/ModalFormulario/ModalFormularioComponent.vue"
     import CardFuncionarioComponent from "@/components/Usuarios/CardFuncionario/CardFuncionarioComponent.vue"
     import UsuariosService from "../../../services/UsuariosService/UsuariosService"
     
     export default defineComponent({
       name: 'ContainerPrincipalComponent',
       props: {
         msg: String,
       },
       components: {
        CardOpcaoComponent,
        MensagemSemUsuariosComponent,
        ModalFormularioComponent,
        CardFuncionarioComponent
      },
      data() {
              return {usuarios: [] ,dadosEstaoCarregados:reactive({value:false})};
          },
      mounted() {
          this.carregarUsuarios();
          // UsuariosService.cadrastrarUsuario({cidade:'TERESINA',bairro:'SACI'})

          
      },
      methods:{
            async carregarUsuarios() {
              try {
                const response_json = await UsuariosService.obterTodosUsuarios();
                this.usuarios = [...response_json];
                this.dadosEstaoCarregados.value=true
            
              } catch (error) {
                console.error(error);
              }
            }
       },
        
       
     });
     </script>
     
     <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container-conteudo{
  margin-left:0.5vw;
  display: flex;
  flex-direction: column;



  & .container-menu-opcoes-principais{
   
        margin-top:10.027855vh;
        margin-bottom: 20px;
        width:79.041916vw;
        min-width: fit-content;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap:10px;    
  }
  & .opcoes{
   
    min-width: 367px;
    width:27.470059vw;
    display:flex;
    justify-content: space-between;
    align-items:center;
    & h1{
      font-size: 16px;
    }
    & img{
      min-height:35px;
      background-color: #0077FF;
      border-radius:10px;
    }
    & button{
      border:0px solid transparent;
    }

  }
  & .container-lista-de-usuarios{
     
      display:flex;
      flex-direction:column;
      gap:20px;
  }

}
   
   
     
     
</style>
     