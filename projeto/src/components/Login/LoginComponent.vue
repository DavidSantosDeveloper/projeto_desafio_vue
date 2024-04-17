<template>

  <main>
        <section class="login">
          <form class="" id="formulario_login">
              <h1 class="">Login</h1>
              <div class="container-input-email">
                <label for="staticEmail2" class="">Email</label>
                <input type="text"  class="" id="staticEmail2" placeholder="">
              </div>
              <div class="container-input-senha">
                <label for="inputPassword2" class="">Senha</label>
                <input type="password" class="" id="inputPassword2" placeholder="">
              </div>
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginComponent',
  props: {
    msg: String,
  },
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
