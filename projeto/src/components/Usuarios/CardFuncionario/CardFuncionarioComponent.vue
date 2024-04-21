<template>
   
    <section class="container-card">
        <div class="container-nome">
            <p>{{ nome }}</p>
            <p>{{ perfil_str }}</p>
        </div>
        <div class="container-status">
            <p>{{ status }}</p>
        </div>
        <div class="container-documento">
            <img src="../../../assets/card_funcionario_icone_cpf_cnpj.png" alt="">
            <p>{{ cpf_cnpj_formatado }}</p>
        </div>
        <div class="container-endereco">
            <img src="../../../assets/card_funcionario_icone_endereco.png" alt="">
            <div>
               <p>{{ endereco_residencial }}</p>
               <p>{{ cidade }}</p>
            </div>
          
        </div>

       
    </section>
     
</template>
      
<script lang="ts">
      import { defineComponent } from 'vue';
      
 
      export default defineComponent({
        name: 'CardFuncionarioComponent',
        props: {
          nome: String,
          cpf_cnpj_formatado:String,
          cidade:String,
          endereco_residencial:String,
          perfil_str:String,
          status:String
        },
        components: {

       },
      });
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
 .container-card{
  border:1px solid #000000;
  width:100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  
  & .container-status{
    background-color: #AEF5E4;
    display:flex;
    justify-content:center;
    align-items:center;
    & p{
      padding:0px;
      color:#038868;
      
    }
  }
  & .container-documento{
     display: flex;
     justify-content: center;
     align-items: center;
     
    //  border:3px solid blue;
     & img{
        min-width:21.13px;
        width:1.581586vw;
     }
  }
  & .container-endereco{
     display:flex;
     justify-content:center;
     align-items:center;
     & div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

     }
     & img{
        min-width:21.13px;
        width:1.581586vw;
     }
  }
  
 }
 p{
  margin:0px;
 }
         
 </style>
      