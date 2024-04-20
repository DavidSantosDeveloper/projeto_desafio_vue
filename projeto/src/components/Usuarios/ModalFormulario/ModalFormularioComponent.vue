<template>
  
<!-- Modal -->
<div class="modal fade modal-dialog-scrollable modal_formulario" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" id="container_header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" id="butao-fechar" class="" data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div class="modal-body">
           <form id="formulario" action="">
                  <fieldset>
                       <legend>Dados básicos</legend>
                       <div class="custom-file-upload">
                          <input type="file" id="fileInput" accept="image/*">
                          <label for="fileInput">
                            <img src="../../../assets/modal_formulario_img.png" alt="Upload Icon">
                          </label>
                        </div>
                       <label for="nome">Nome:</label>
                       <input type="text" name="nome" id="nome" required>
                       <label for="nome">Nome da Mãe:</label>
                       <input type="text" name="nome_mae" id="nome_mae" >
                       <label for="nome">Nome do Pai:</label>
                       <input type="text" name="nome_pai" id="nome_pai" >
                       <label for="nome">CPF:</label>
                       <input type="text" name="cpf" id="cpf" required>
                       <label for="estado_civil">Estado Civil:</label>
                        <select id="estado_civil" name="estado_civil">
                          <option value="solteiro">Solteiro</option>
                          <option value="casado">Casado</option>
                          <!-- Adicione mais opções conforme necessário -->
                        </select>

                        <input list="opcoes" name="opcao" >
                        <datalist id="opcoes">
                          <option value="Opção 1"/>
                          <option value="Opção 2"/>
                          <option value="Opção 3"/>
                        </datalist>
                        
                      <label for="data_de_nascimento">Data de nascimento:</label>
                      <input type="date" name="data_de_nascimento" id="data_de_nascimento" required>
                      <label for="apelido">Apelido:</label>
                      <input type="text" name="apelido" id="apelido" >

                  </fieldset>
                  
                  <fieldset>
                    <legend>Dados Complementares</legend>
                    <label for="perfil">Perfil:</label> 
                    <input list="perfil" name="perfil">
                    <datalist id="perfil">
                          <option value="Admin"/>
                          <option value="Gerente"/>
                          <option value="Funcionário"/>
                    </datalist>

                    <label for="funcao">Função:</label>
                    <input type="text" name="funcao" id="funcao" >
                    <label for="naturalidade">Naturalidade:</label>
                    <input type="text" name="naturalidade" id="naturalidade" >
                    <label for="chave_pix">Chave PIX:</label>
                    <input type="text" name="chave_pix" id="chave_pix" >

                  </fieldset>

                  <fieldset>
                      <legend>Horário de Trabalho</legend>
                      <p>Dias da Semana:</p>
                      <label for="horario_semana_inicio">Inicio:</label>
                      <input type="time" name="horario_semana_inicio" id="horario_semana_inicio">
                      <label for="horario_semana_inicio">Fim:</label>
                      <input type="time" name="horario_semana_inicio" id="horario_semana_inicio">
                      
                      <p>Sábado:</p>
                      <label for="horario_fim_semana_inicio">Inicio:</label>
                      <input type="time" name="horario_fim_semana_inicio" id="horario_fim_semana_inicio">
                      <label for="horario_fim_semana_inicio">Fim:</label>
                      <input type="time" name="horario_fim_semana_inicio" id="horario_fim_semana_inicio">
                  </fieldset>

                  <fieldset>
                      <legend>Documentos</legend>
                     
                      <label for="numero_indentidade">Número da indentidade:</label>
                      <input type="text" name="numero_indentidade" id="numero_indentidade">
                      <label for="emmisor_indentidade">Orgão emissor da indentidade:</label>
                      <input type="text" name="emmisor_indentidade" id="emmisor_indentidade">

                      <label for="uf_indentidade">UF Indentidade:</label> 
                      <input list="uf_indentidade" name="uf_indentidade">
                      <datalist id="uf_indentidade">
                        <option value="AC"/>
                        <option value="AL"/>
                        <option value="AP"/>
                        <option value="AM"/>
                        <option value="BA"/>
                        <option value="CE"/>
                        <option value="DF"/>
                        <option value="ES"/>
                        <option value="GO"/>
                        <option value="MA"/>
                        <option value="MT"/>
                        <option value="MS"/>
                        <option value="MG"/>
                        <option value="PA"/>
                        <option value="PB"/>
                        <option value="PR"/>
                        <option value="PE"/>
                        <option value="PI"/>
                        <option value="RJ"/>
                        <option value="RN"/>
                        <option value="RS"/>
                        <option value="RO"/>
                        <option value="RR"/>
                        <option value="SC"/>
                        <option value="SP"/>
                        <option value="SE"/>
                        <option value="TO"/>
                      </datalist>

                      <label for="titulo_eleitor">Título de eleitor:</label>
                      <input type="text" name="titulo_eleitor" id="titulo_eleitor">
                      <label for="secao_titulo">Seção do eleitor:</label>
                      <input type="text" name="secao_titulo" id="secao_titulo">
                      <label for="zona_titulo">Zona do título:</label>
                      <input type="text"  id="zona_titulo">

                      <label for="numero_carteira_de_trabalho">Carteira de Trabalho:</label>
                      <input type="text"  id="numero_carteira_de_trabalho">
                      <label for="serie_carteira_de_trabalho">Série da Carteira:</label>
                      <input type="text" id="serie_carteira_de_trabalho">
                      <label for="emissao_carteira_de_trabalho">Data de emissão da carteira:</label>
                      <input type="text" name="emissao_carteira_de_trabalho" id="emissao_carteira_de_trabalho">
                      <label for="uf_carteira_de_trabalho">Carteira de Trabalho:</label>
                      <input type="text" name="uf_carteira_de_trabalho" id="uf_carteira_de_trabalho">
                      

                  </fieldset>

                  <fieldset>
                        <legend>Endereço</legend>

                        <label for="cep_endereco">CEP:</label>
                        <input type="text"  id="cep_endereco" required>
                        <a href="">Maps</a>
                        <label for="logradouro_endereco">Logradouro:</label>
                        <input type="text"  id="cep_endereco" required>
                        <label for="numero">Número:</label>
                        <input type="text"  id="numero" required>
                        
                      <label for="estado">Estado:</label> 
                      <input list="estado" name="estado">
                      <datalist id="estado">
                        <option value="AC"/>
                        <option value="AL"/>
                        <option value="AP"/>
                        <option value="AM"/>
                        <option value="BA"/>
                        <option value="CE"/>
                        <option value="DF"/>
                        <option value="ES"/>
                        <option value="GO"/>
                        <option value="MA"/>
                        <option value="MT"/>
                        <option value="MS"/>
                        <option value="MG"/>
                        <option value="PA"/>
                        <option value="PB"/>
                        <option value="PR"/>
                        <option value="PE"/>
                        <option value="PI"/>
                        <option value="RJ"/>
                        <option value="RN"/>
                        <option value="RS"/>
                        <option value="RO"/>
                        <option value="RR"/>
                        <option value="SC"/>
                        <option value="SP"/>
                        <option value="SE"/>
                        <option value="TO"/>
                      </datalist>
                      <label for="cidade">Cidade:</label> 
                      <input list="cidade" name="cidade" required>
                      <datalist id="cidade">
                      </datalist>
                      <label for="bairro">Bairro:</label>
                      <input type="text"  id="bairro" required>
                      <label for="referencia">Referência:</label>
                      <input type="text"  id="referencia" >
                      <label for="complemento">Complemento:</label>
                      <input type="text"  id="complemento" >          
                  </fieldset>

                  <fieldset>
                      <legend>Contato:</legend>
                      <label for="telefone">Telefone:</label>
                      <input type="text"  id="telefone" required>
                      <label for="email">Email:</label>
                      <input type="text"  id="email" required>
                  </fieldset>

                  <button type="submit">Cadrastrar</button>
           </form>
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
div.modal_formulario{
    #container_header{
        background-color: #0091FF;
        & h1#staticBackdropLabel{
          color: #ffffff;
        }
        & button#butao-fechar{
            border: 0px solid #0091FF;
            background-color:#0091FF;
            color:#ffffff ;
            height: 100%;
            font-size: large;
        }
    }
}




// INPUT IMG personalizado
.custom-file-upload input[type="file"] {
  display: none; /* Oculta o botão de upload padrão */
}

.custom-file-upload label {
  display: inline-block;
 
  border-radius: 5px;
  cursor: pointer;
}

.custom-file-upload img {
  height: 100%;
  vertical-align: middle;
}
         
 </style>
      