<template>
    <main class="home">
      <HeaderComponent msg=""/>
      <MenuComponent msg=""/>
      <ContainerPrincipalComponent  />
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import MenuComponent from '@/components/shared/menu/MenuComponent.vue'; // @ is an alias to /src
  import HeaderComponent from '@/components/shared/header/HeaderComponent.vue';
  import ContainerPrincipalComponent from '@/components/Usuarios/ContainerPrincipal/ContainerPrincipalComponent.vue';
  
  
  export default defineComponent({
    name: 'UsuariosView',
    components: {
      HeaderComponent,
      MenuComponent,
      ContainerPrincipalComponent
    }, 
  });
  </script>
<style scoped lang="scss">
main{
    width:100vw;
    height:100vh;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: max-content 1fr;
    grid-template-areas: "header header" "menu container-conteudo";
    
    & header{
       grid-area:header;
    }
    & .container-menu-lateral{
      grid-area:menu;
    }
    & .container-conteudo{
      grid-area:container-conteudo;
    }

}
  
    
</style>
   