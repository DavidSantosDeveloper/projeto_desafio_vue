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
           <form id="formulario" action="" @submit.prevent="submitForm">
                  <fieldset>
                       <legend>Dados básicos</legend>
                       <div class="custom-file-upload">
                          <input type="file" id="fileInput" accept="image/*" >
                          <label for="fileInput">
                            <img src="../../../assets/modal_formulario_img.png" alt="Upload Icon">
                          </label>
                        </div>
                       <label for="nome">Nome:</label>
                       <input type="text" name="nome" id="nome" v-model="nome" required>
                       <label for="nome">Nome da Mãe:</label>
                       <input type="text" name="nome_mae" id="nome_mae" v-model="nome_mae" >
                       <label for="nome">Nome do Pai:</label>
                       <input type="text" name="nome_pai" id="nome_pai" v-model="nome_pai" >
                       <label for="nome">CPF:</label>
                       <input type="text" name="cpf" id="cpf" v-model="cpf" required>
                       <label for="estado_civil">Estado Civil:</label>
                        <select id="estado_civil" name="estado_civil" v-model="estado_civil">
                          <option value="1">Solteiro</option>
                          <option value="2">Casado</option>
                          <option value="3">Divorciado</option>
                          <option value="4">Viuvo</option>
                          <option value="5">Separado</option>
                          <!-- Adicione mais opções conforme necessário -->
                        </select>

                        <input list="opcoes" name="opcao"  >
                        <datalist id="opcoes">
                          <option value="Opção 1"/>
                          <option value="Opção 2"/>
                          <option value="Opção 3"/>
                        </datalist>
                        
                      <label for="data_de_nascimento">Data de nascimento:</label>
                      <input type="date" name="data_de_nascimento" id="data_de_nascimento" v-model="data_de_nascimento" required>
                      <label for="apelido">Apelido:</label>
                      <input type="text" name="apelido" id="apelido" v-model="apelido" >

                  </fieldset>
                  
                  <fieldset>
                    <legend>Dados Complementares</legend>
                    <label for="perfil">Perfil:</label> 

                    <select  v-model="perfil">
                        <option value="1">ADMIN</option>
                        <option value="2">FINANCEIRO</option>
                        <option value="3">GERENTE</option>
                        <option value="4">SUPORTE</option>
                        <option value="5">MARKETING</option>
                    </select>
                    <!-- 
                    <input list="perfil" name="perfil" v-model="perfil">
                    <datalist id="perfil">
                          <option value="Admin"/>
                          <option value="Gerente"/>
                          <option value="Funcionário"/>
                    </datalist>
                     -->
                    <label for="funcao">Função:</label>
                    <input type="text" name="funcao" id="funcao" v-model="funcao">
                    <label for="naturalidade">Naturalidade:</label>
                    <input type="text" name="naturalidade" id="naturalidade" v-model="naturalidade" >
                    <label for="chave_pix">Chave PIX:</label>
                    <input type="text" name="chave_pix" id="chave_pix" v-model="chave_pix" >

                  </fieldset>

                  <fieldset>
                      <legend>Horário de Trabalho</legend>
                      <p>Dias da Semana:</p>
                      <label for="horario_semana_inicio">Inicio:</label>
                      <input type="time" name="horario_semana_inicio" id="horario_semana_inicio" v-model="horario_semana_inicio" >
                      <label for="horario_semana_fim">Fim:</label>
                      <input type="time" name="horario_semana_fim" id="horario_semana_fim" v-model="horario_semana_fim">
                      
                      <p>Sábado:</p>
                      <label for="horario_fim_semana_inicio">Inicio:</label>
                      <input type="time" name="horario_fim_semana_inicio" id="horario_fim_semana_inicio" v-model="horario_fim_semana_inicio">
                      <label for="horario_fim_semana_fim">Fim:</label>
                      <input type="time" name="horario_fim_semana_fim" id="horario_fim_semana_fim"  v-model="horario_fim_semana_fim">
                  </fieldset>

                  <fieldset>
                      <legend>Documentos</legend>
                     
                      <label for="numero_indentidade">Número da indentidade:</label>
                      <input type="text" name="numero_indentidade" id="numero_indentidade" v-model="numero_indentidade">
                      <label for="emmisor_indentidade">Orgão emissor da indentidade:</label>
                      <input type="text" name="emmisor_indentidade" id="emmisor_indentidade" v-model="emmisor_indentidade">

                      <label for="uf_indentidade" >UF Indentidade:</label> 
                      <select v-model="uf_indentidade">
                          <option value="12">AC</option>
                          <option value="27">AL</option>
                          <option value="16">AP</option>
                          <option value="13">AM</option>
                          <option value="29">BA</option>
                          <option value="23">CE</option>
                          <option value="53">DF</option>
                          <option value="32">ES</option>
                          <option value="52">GO</option>
                          <option value="21">MA</option>
                          <option value="51">MT</option>
                          <option value="50">MS</option>
                          <option value="31">MG</option>
                          <option value="15">PA</option>
                          <option value="25">PB</option>
                          <option value="41">PR</option>
                          <option value="26">PE</option>
                          <option value="22">PI</option>
                          <option value="33">RJ</option>
                          <option value="24">RN</option>
                          <option value="43">RS</option>
                          <option value="11">RO</option>
                          <option value="14">RR</option>
                          <option value="42">SC</option>
                          <option value="35">SP</option>
                          <option value="28">SE</option>
                          <option value="17">TO</option>
                        </select>

                      <!--  
                      <input list="uf_indentidade" name="uf_indentidade" v-model="uf_indentidade">
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
                      -->
                      <label for="titulo_eleitor">Título de eleitor:</label>
                      <input type="text" name="titulo_eleitor" id="titulo_eleitor" v-model="titulo_eleitor">
                      <label for="secao_titulo">Seção do eleitor:</label>
                      <input type="text" name="secao_titulo" id="secao_titulo" v-model="secao_titulo">
                      <label for="zona_titulo">Zona do título:</label>
                      <input type="text"  id="zona_titulo" v-model="zona_titulo">

                      <label for="numero_carteira_de_trabalho">Carteira de Trabalho:</label>
                      <input type="text"  id="numero_carteira_de_trabalho" v-model="numero_carteira_de_trabalho">
                      <label for="serie_carteira_de_trabalho">Série da Carteira:</label>
                      <input type="text" id="serie_carteira_de_trabalho" v-model="serie_carteira_de_trabalho">
                      <label for="emissao_carteira_de_trabalho">Data de emissão da carteira:</label>
                      <input type="text" name="emissao_carteira_de_trabalho" id="emissao_carteira_de_trabalho" v-model="emissao_carteira_de_trabalho">
                      <label for="uf_carteira_de_trabalho">Carteira de Trabalho:</label>
                      <select v-model="uf_carteira_de_trabalho">
                            <option value="12">AC</option>
                            <option value="27">AL</option>
                            <option value="16">AP</option>
                            <option value="13">AM</option>
                            <option value="29">BA</option>
                            <option value="23">CE</option>
                            <option value="53">DF</option>
                            <option value="32">ES</option>
                            <option value="52">GO</option>
                            <option value="21">MA</option>
                            <option value="51">MT</option>
                            <option value="50">MS</option>
                            <option value="31">MG</option>
                            <option value="15">PA</option>
                            <option value="25">PB</option>
                            <option value="41">PR</option>
                            <option value="26">PE</option>
                            <option value="22">PI</option>
                            <option value="33">RJ</option>
                            <option value="24">RN</option>
                            <option value="43">RS</option>
                            <option value="11">RO</option>
                            <option value="14">RR</option>
                            <option value="42">SC</option>
                            <option value="35">SP</option>
                            <option value="28">SE</option>
                            <option value="17">TO</option>
                          </select>

                      <!-- <input type="text" name="uf_carteira_de_trabalho" id="uf_carteira_de_trabalho" v-model="uf_carteira_de_trabalho"> -->
                      
                      

                  </fieldset>

                  <fieldset>
                        <legend>Endereço</legend>

                        <label for="cep_endereco">CEP:</label>
                        <input type="text"  id="cep_endereco" v-model="cep_endereco" required>
                        <a href="">Maps</a>
                        <label for="logradouro_endereco">Logradouro:</label>
                        <input type="text"  id="logradouro_endereco" v-model="logradouro_endereco" required>
                        <label for="numero">Número:</label>
                        <input type="text"  id="numero" v-model="numero" required>
                        
                      <label for="estado">Estado:</label> 
                      <select v-model="estado">
                            <option value="12">AC</option>
                            <option value="27">AL</option>
                            <option value="16">AP</option>
                            <option value="13">AM</option>
                            <option value="29">BA</option>
                            <option value="23">CE</option>
                            <option value="53">DF</option>
                            <option value="32">ES</option>
                            <option value="52">GO</option>
                            <option value="21">MA</option>
                            <option value="51">MT</option>
                            <option value="50">MS</option>
                            <option value="31">MG</option>
                            <option value="15">PA</option>
                            <option value="25">PB</option>
                            <option value="41">PR</option>
                            <option value="26">PE</option>
                            <option value="22">PI</option>
                            <option value="33">RJ</option>
                            <option value="24">RN</option>
                            <option value="43">RS</option>
                            <option value="11">RO</option>
                            <option value="14">RR</option>
                            <option value="42">SC</option>
                            <option value="35">SP</option>
                            <option value="28">SE</option>
                            <option value="17">TO</option>
                      </select>

                      <!--  
                      <input list="estado" name="estado" v-model="estado">
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
                      -->
                      <label for="cidade">Cidade:</label> 
                      <input list="cidade" name="cidade" v-model="cidade" required>
                      <datalist id="cidade">
                      </datalist>
                      <label for="bairro">Bairro:</label>
                      <input type="text"  id="bairro" v-model="bairro" required>
                      <label for="referencia">Referência:</label>
                      <input type="text"  id="referencia" v-model="referencia" >
                      <label for="complemento">Complemento:</label>
                      <input type="text"  id="complemento" v-model="complemento" >          
                  </fieldset>

                  <fieldset>
                      <legend>Contato:</legend>
                      <label for="telefone">Telefone:</label>
                      <input type="text"  id="telefone" v-model="telefone" required>
                      <label for="email">Email:</label>
                      <input type="text"  id="email" v-model="email" required>
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
 import UsuariosService from '@/services/UsuariosService/UsuariosService';     
 
export default defineComponent({
        name: 'ModalFormularioComponent',
        props: {
          msg: String,
        },
        data(){
          return{
                foto:"",
                nome:"",
                nome_mae:"",
                nome_pai:"",
                cpf:"",
                estado_civil:"",
                data_de_nascimento:"",
                apelido:"",
                perfil:"",
                funcao:"",
                naturalidade:"",
                chave_pix:"",
                horario_semana_inicio:"",
                horario_semana_fim:"",
                horario_fim_semana_inicio:"",
                horario_fim_semana_fim:"",
                numero_indentidade:"",
                emmisor_indentidade:"",
                uf_indentidade:"",
                titulo_eleitor:"",
                secao_titulo:"",
                zona_titulo:"",
                numero_carteira_de_trabalho:"",
                serie_carteira_de_trabalho:"",
                emissao_carteira_de_trabalho:"",
                uf_carteira_de_trabalho:"",
                cep_endereco:"",
                logradouro_endereco:"",
                numero:"",
                estado:"",
                cidade:"",
                bairro:"",
                referencia:"",
                complemento:"",
                telefone:"",
                email:""

          }     
        },
        mounted() {
         
          
          
         }
        ,
        methods:{
            submitForm() {

              
                  const dados = {
                        nome: this.nome,
                        nome_mae: this.nome_mae,
                        nome_pai: this.nome_pai,
                        cpf: this.cpf,
                        estado_civil: this.estado_civil,
                        data_de_nascimento: this.data_de_nascimento,
                        apelido: this.apelido,
                        perfil: this.perfil,
                        funcao: this.funcao,
                        naturalidade: this.naturalidade,
                        chave_pix: this.chave_pix,
                        horario_semana_inicio: this.horario_semana_inicio,
                        horario_semana_fim: this.horario_semana_fim,
                        horario_fim_semana_inicio: this.horario_fim_semana_inicio,
                        horario_fim_semana_fim: this.horario_fim_semana_fim,
                        numero_indentidade: this.numero_indentidade,
                        emmisor_indentidade: this.emmisor_indentidade,
                        uf_indentidade: this.uf_indentidade,
                        titulo_eleitor: this.titulo_eleitor,
                        secao_titulo: this.secao_titulo,
                        zona_titulo: this.zona_titulo,
                        numero_carteira_de_trabalho: this.numero_carteira_de_trabalho,
                        serie_carteira_de_trabalho: this.serie_carteira_de_trabalho,
                        emissao_carteira_de_trabalho: this.emissao_carteira_de_trabalho,
                        uf_carteira_de_trabalho: this.uf_carteira_de_trabalho,
                        cep_endereco: this.cep_endereco,
                        logradouro_endereco: this.logradouro_endereco,
                        numero: this.numero,
                        estado: this.estado,
                        cidade: this.cidade,
                        bairro: this.bairro,
                        referencia: this.referencia,
                        complemento: this.complemento,
                        telefone: this.telefone,
                        email: this.email
                      };

                  UsuariosService.cadrastrarUsuario(
                  {
                     foto: "",
                    nome: this.nome,
                    nome_mae: this.nome_mae,
                    nome_pai: this.nome_pai,
                    cpf: this.cpf,
                    estado_civil: this.estado_civil,
                    data_de_nascimento: this.data_de_nascimento,
                    apelido: this.apelido,
                    perfil: this.perfil,
                    funcao: this.funcao,
                    naturalidade: this.naturalidade,
                    chave_pix: this.chave_pix,
                    horario_semana_inicio: this.horario_semana_inicio,
                    horario_semana_fim: this.horario_semana_fim,
                    horario_fim_semana_inicio: this.horario_fim_semana_inicio,
                    horario_fim_semana_fim: this.horario_fim_semana_fim,
                    numero_indentidade: this.numero_indentidade,
                    emissor_identidade: (this.emissor_identidade)==undefined ? "":this.emissor_identidade,
                    uf_identidade: (this.uf_identidade)==undefined ? "": this.uf_identidade,
                    titulo_eleitor: this.titulo_eleitor,
                    secao_titulo: this.secao_titulo,
                    zona_titulo: this.zona_titulo,
                    numero_carteira_de_trabalho: this.numero_carteira_de_trabalho,
                    serie_carteira_de_trabalho: this.serie_carteira_de_trabalho,
                    emissao_carteira_de_trabalho: this.emissao_carteira_de_trabalho,
                    uf_carteira_de_trabalho: this.uf_carteira_de_trabalho,
                    cep_endereco: this.cep_endereco,
                    logradouro_endereco: this.logradouro_endereco,
                    numero: this.numero,
                    estado: this.estado,
                    cidade: this.cidade,
                    bairro: this.bairro,
                    referencia: this.referencia,
                    complemento: this.complemento,
                    telefone: this.telefone,
                    email: this.email
                }
           )

            }
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
      