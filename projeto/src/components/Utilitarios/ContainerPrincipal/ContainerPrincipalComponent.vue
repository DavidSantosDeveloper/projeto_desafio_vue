<template>
   
   <div class="container-menu-lateral">
   
   
   </div>
    
   </template>
     
     <script lang="ts">
     import { defineComponent } from 'vue';
     
     export default defineComponent({
       name: 'ContainerPrincipalComponent',
       props: {
         msg: String,
       },
     });
     </script>
     
     <!-- Add "scoped" attribute to limit CSS to this component only -->
     <style scoped lang="scss">
   .container-menu-lateral{
      background-color: #0091FF;
      display:flex;
      flex-direction: column;
      justify-content: space-around; 
      & nav{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height:335px;
        height:43.619791vh;
        width:max-content;
        border:2px solid white;
      }
   }
   
   
     
     
     </style>
     