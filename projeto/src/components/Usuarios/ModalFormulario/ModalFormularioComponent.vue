<template>
   
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
     
</template>
      
<script lang="ts">
      import { defineComponent } from 'vue';
      
 
      export default defineComponent({
        name: 'ModalFormularioComponent',
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
      