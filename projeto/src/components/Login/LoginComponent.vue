<template>

  <main>
        <section class="login">
          <form class="" id="formulario_login" @submit.prevent="handleSubmit">
              <h1 class="">Login</h1>
              <div class="container-input-email">
                <label for="staticEmail2" class="">Email</label>
                <input type="text"  class=""  placeholder="" id="username" v-model="this.username" required>
              </div>
              <div class="container-input-senha">
                <label for="inputPassword2" class="">Senha</label>
                <input type="password" class="" placeholder="" id="password" v-model="this.password" required>
              </div>
              <p v-if="this.dadosEstaoIncorretos.value==true" >Email ou senha incorretos!</p>
             
              <div class=" d-flex justify-content-between container-opcoes justify-content-between">
                <a href="" class="">Esqueceu a senha?</a>
                <button type="submit" class="butao-entrar">Entrar</button>
                
              </div>
             
        </form>
      </section>
      <section class="container-banner">
         <img src="../../assets/login_image.png" alt="">
      </section>
  </main>



 
</template>

<script lang="ts">
import { defineComponent,reactive} from 'vue';
import LoginService from "../../services/LoginService/LoginService"
import router from '../../../src/router/index';

export default defineComponent({
  name: 'LoginComponent',
  username:"",
  password:"",
  props: {
    msg: String,
  },
  setup(){
      return{dadosEstaoIncorretos:reactive({value:false})}
  },
  methods:{
    async handleSubmit() {
      try {
        const response = await LoginService.Autentificar(this.username, this.password);
        if(response.token!=undefined){
            // Armazenar token de autenticação 
            localStorage.setItem('authToken', response.token);
            this.dadosEstaoIncorretos.value=false
            // Redirecionar para página principal após login
            router.push('/utilitarios');
        }
       
      } catch (error) {
        this.dadosEstaoIncorretos.value=true
        window.alert("email ou senha errados!")
      }
    },
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  box-sizing: border-box;
  padding: 0px;
  margin: 0;
  font-family: "Rubik", sans-serif;
  color: black;

}
html,body{
  font-size: 16px;

}
main{
    display: grid;
    // 727/1336px =54,41% da largura da tela
    grid-template-columns: 54.41vw 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: "banner login";
}
section.login{
  grid-area: login;
 // 146/768=19.0104% 
  padding-top: 19.0104vh;
   // /117/45,59vw => 609px(containe login)=> 117px/609px =19.21%
  padding-left: 117px;
}

#formulario_login{
  // border: 1px solid green;
  height: 44.27vh;
  min-height: 340px;
  width:28.06vh;
  min-width: 375px;


  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:flex-end;
  gap: 36px;
  & h1{
   align-self: center;
   font-weight: bold;
  }
  & label{
    display: block;
    width: 100%;
    text-align: start;
    font-weight: bold;
  }
  & input{
    padding: 8px 5px;
  }
  & div.container-input-email{
      display: flex;
      flex-direction: column;
      align-items: stretch;
      
      width:100%;
      margin-top: 28px;

  }
  & div.container-input-senha{
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width:100%;
  }

  & div.container-opcoes{
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border:1px solid red;
    width: 100%;
    & a{
      color: black;
      font-weight: bold;
      text-decoration: none;
      font-size: 1.15rem;
    }
    & .butao-entrar{
      background-color: #000000;
      color: white;

      padding: 5px 40px;
    }
  }
 

 
}
p{
    color: red;
    margin:0px;
    padding:0px;
  }

.container-banner{
  grid-area: banner;
  height: 100vh;
  overflow: hidden; 
  position: relative;

  & img{
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    position: absolute; 
    top: 0; 
    left: 0; 
    background-image: linear-gradient(90deg, rgba(33,150,246,0.8), rgba(0,229,253,0.8));
    z-index: 0;
  
  }

}

.container-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(33,150,246,0.8), rgba(0,229,253,0.8));
  z-index: 999;
}


</style>
