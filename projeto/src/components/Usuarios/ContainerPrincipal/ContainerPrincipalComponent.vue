<template>
   
   <section class="container-conteudo">
        <section class="container-menu-opcoes-principais">
            <section class="opcoes">
                  <h1>Usuários</h1>
                  <a href=""> <img src="../../../assets/usuarios_butao_mais.png" alt=""> </a>
            </section>

        </section>

        <section class="container-lista-de-usuarios">
             <!-- <MensagemSemUsuariosComponent /> -->
              <ModalFormularioComponent/>
        </section>
   </section>
    
   </template>
     
     <script lang="ts">
     import { defineComponent } from 'vue';
     import CardOpcaoComponent from "@/components/Utilitarios/CardOpcao/CardOpcaoComponent.vue"
     import MensagemSemUsuariosComponent from '@/components/Usuarios/MensagemSemUsuarios/MensagemSemUsuariosComponent.vue'
     import ModalFormularioComponent from "@/components/Usuarios/ModalFormulario/ModalFormularioComponent.vue"
     
     export default defineComponent({
       name: 'ContainerPrincipalComponent',
       props: {
         msg: String,
       },
       components: {
        CardOpcaoComponent,
        MensagemSemUsuariosComponent,
        ModalFormularioComponent
      },
     });
     </script>
     
     <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container-conteudo{
  margin-left:0.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 border:5px solid red;
  & .container-menu-opcoes-principais{
    border:5px solid rgb(224, 224, 145);
        margin-top:10.027855vh;
        width:79.041916vw;
        min-width: fit-content;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap:10px;    
  }
  & .opcoes{
    border:5px solid blue;
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
    }

  }
  & .container-lista-de-usuarios{
      border: 3px solid brown;
      // yyflex-grow: 1;
  }

}
   
   
     
     
</style>
     