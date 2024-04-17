<template>
  <div class="home">
   
    <LoginComponent msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginComponent from '@/components/Login/LoginComponent.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'LoginView',
  components: {
   LoginComponent,
  },
});
</script>
