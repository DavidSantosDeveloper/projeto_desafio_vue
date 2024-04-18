<template>
    <main class="home">
      <HeaderComponent msg="Welcome to Your Vue.js + TypeScript App"/>
      <!-- <MenuComponent msg="Welcome to Your Vue.js + TypeScript App"/> -->
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import MenuComponent from '@/components/Utilitarios/menu/MenuComponent.vue'; // @ is an alias to /src
  import HeaderComponent from '@/components/Utilitarios/header/HeaderComponent.vue';
  
  export default defineComponent({
    name: 'UtilitariosView',
    components: {
      HeaderComponent,
      MenuComponent
    },
  });
  </script>