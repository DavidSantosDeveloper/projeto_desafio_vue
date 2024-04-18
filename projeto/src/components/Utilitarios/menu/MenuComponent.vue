<template>
 <!--  
   <nav class="navbar navbar-light border border-5" aria-label="First navbar example" id="teste">
    <div class="container-fluid text-dark">
      <button class="navbar-toggler collapsed text-dark"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        
        <span class="text-dark">
          <span class="navbar-toggler-icon text-light" id="icone_menu_hamburguer" ></span>Utilitarios</span>
      </button>
      <a class="navbar-brand" href="#">Never expand</a>
    

      <div class="navbar-collapse collapse" id="navbarsExample01" style="">
        <ul class="navbar-nav me-auto mb-2">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form role="search">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav>
 -->
  
  <nav >
    <div class="container-marca">
        <img src="" />
        <a>Utilitarios</a>    
    </div>
    <div class="container-manager">
        <a>Manager</a>
    </div>
    
  </nav>
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
.navbar-toggler-icon{
  color:white !important;
}


  
  
  </style>
  