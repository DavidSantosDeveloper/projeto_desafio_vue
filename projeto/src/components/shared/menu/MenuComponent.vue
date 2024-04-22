<template>

<div class="container-menu-lateral">
  <nav >
      <a href=""> <img src="../../../assets/menu_icone_1.png" alt="" /> </a>
      <a href=""> <img src="../../../assets/menu_icone_2.png" alt="" /> </a>
      <a href=""> <img src="../../../assets/menu_icone_3.png" alt="" /> </a>
      <a href=""> <img src="../../../assets/menu_icone_4.png" alt="" /> </a>
      <a href=""> <img src="../../../assets/menu_icone_5.png" alt="" /> </a>
      <a href=""> <img src="../../../assets/menu_icone_6.png" alt="" /> </a>
    
  </nav>
  <div class="container-da-logo">
        <img src="../../../assets/menu_icone_7.png" alt="" />
  </div>

</div>
 
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'MenuComponent',
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

   }
}


  
  
  </style>
  