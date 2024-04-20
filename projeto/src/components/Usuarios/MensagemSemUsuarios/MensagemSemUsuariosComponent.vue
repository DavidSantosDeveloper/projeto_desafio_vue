<template>
   
    <section class="container-conteudo">
        <img src="../../../assets/mesagem_icone_sem_usuarios.png" alt="">
        <p>Não há usuarios.clique no ícone acima para adicionar</p>
    </section>
     
</template>
      
<script lang="ts">
      import { defineComponent } from 'vue';
      
 
      export default defineComponent({
        name: 'MensagemSemUsuariosComponent',
        props: {
          msg: String,
        },
        components: {

       },
      });
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
 .container-conteudo{
  border:5px solid lightblue;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img{
      min-width:233px;
      min-height:233px;
      width:17.440119vw ;
  }
  & p{
    color:#939393;
  }
  
 }
         
 </style>
      