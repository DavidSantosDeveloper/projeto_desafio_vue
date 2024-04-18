<template>

<div>
    <!-- <router-link :to="rota"> -->
        <img :src="url" />
         <p>{{ texto }}</p>
         <span>{{ absoluteImagePath}}</span>
    <!-- </router-link>  -->
</div>
   
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CardOpcaoComponent',
    props: {
      rota: String,
      texto:String,
      url:String,
    },
    computed: {
    absoluteImagePath() {
      const baseURL = window.location;
      return `${baseURL}`;
    }
  }
    
  });
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
 div{
    background-color: blue;
    & a{
      display:block !important;
      & img{
        width:30px;
        height:30px;
      }
    }
 }
  
  </style>
  