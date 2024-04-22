<template>
   
   <section class="container-conteudo">
        <section class="container-menu-opcoes-principais">
            <div class="container-linha">

              <div class="card-opcoes-principais">  
                <router-link to="/usuarios">
                  <img src="../../../assets/utilitarios_opcoes_1.png"/>
                  <p>Configurações</p>
                </router-link>
              </div>
              <div class="card-opcoes-principais"> 
                <router-link to="/usuarios">
                    <img src="../../../assets/utilitarios_opcoes_2.png"/>
                    <p>Usuários</p>
                </router-link>
              </div>
              <div class="card-opcoes-principais"> 
                <router-link to="">
                    <img src="../../../assets/utilitarios_opcoes_3.png"/>
                    <p>Permissões</p>
                </router-link>
              </div>
              <div class="card-opcoes-principais"> 
                <router-link to="">
                    <img src="../../../assets/utilitarios_opcoes_4.png"/>
                    <p>Motivo de cancelamento</p>
                </router-link>
              </div>
              <div class="card-opcoes-principais"> 
                <router-link to="">
                    <img src="../../../assets/utilitarios_opcoes_5.png"/>
                    <p>Logs</p>
                </router-link>
              </div>
              <div class="card-opcoes-principais"> 
                <router-link to="">
                    <img src="../../../assets/utilitarios_opcoes_6.png"/>
                    <p>Segmentos</p>
                </router-link>
              </div>
              <div class="card-opcoes-principais"> 
                <router-link to="">
                    <img src="../../../assets/utilitarios_opcoes_7.png"/>
                    <p>Versões</p>
                </router-link>
              </div>
              <div class="card-opcoes-principais"> 
                <router-link to="">
                    <img src="../../../assets/utilitarios_opcoes_8.png"/>
                    <p>Feriados</p>
                </router-link>
              </div>

              
              
            

                <!-- <CardOpcaoComponent  rota="/" texto="Configuração" url="../../../assets/utilitarios_opcoes_1.png" /> -->
            </div>


            <div class="container-linha-pequena">
              <div class="card-opcoes-principais"> 
                <router-link to="/usuario">
                    <img src="../../../assets/utilitarios_opcoes_9.png"/>
                    <p>Laudos</p>
                </router-link>
              </div>
              <div class="card-opcoes-principais"> 
                <router-link to="/usuario">
                    <img src="../../../assets/utilitarios_opcoes_10.png"/>
                    <p>Mensagens pré-definidas</p>
                </router-link>
              </div>
            </div>

        </section>
   </section>
    
   </template>
     
     <script lang="ts">
     import { defineComponent } from 'vue';
     import CardOpcaoComponent from "@/components/Utilitarios/CardOpcao/CardOpcaoComponent.vue"

     export default defineComponent({
       name: 'ContainerPrincipalComponent',
       props: {
         msg: String,
       },
       components: {
        CardOpcaoComponent,
      },
     });
     </script>
     
     <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container-conteudo{
  margin-left:5.1646706vw;

//  border:5px solid red;
  & .container-menu-opcoes-principais{
        margin-top:10.027855vh;
        width:79.041916vw;
        min-width: fit-content;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap:10px;
       
        & .container-linha{
          // border: 3px solid green;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items:center;
          flex-wrap: wrap;

          flex-shrink: 0;
          gap:8px;
            & .card-opcoes-principais{
              min-width:125px;
              width:9.3562874vw;
              max-width:500px;

              min-height:108px;
              height:14.0625vh;
              max-height:500px;
              &:hover{
                -xpedu-transform: scale(1.3);
                -ms-transform: scale(1.3);
                transform: scale(1.1);
                transition: 0.1s ease-in-out;
              }
              & a{
                  display:flex;
                  flex-direction:column;
                  justify-content:center;
                  align-items:center;
              }

              
             
             
              border-radius: 7px;
              background-color: #0077FF;
                & p{
                  color:white;
                  text-align: center,;
                }
            }
           
        }
        & .container-linha-pequena{
            @extend .container-linha;
            justify-content: flex-start;
        }
  }
}
   
   
     
     
</style>
     