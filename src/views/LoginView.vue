<script setup>
import { FooterComponent, HeaderComponent, HeaderSmall, FooterSmall}  from "@/components"
</script>

<template>
  <div class="wrapContainer">
    <div class="containerPrincipal">
      <!-- Topo com a logo -->
      <div class="FormTop">
        <img src="https://i.ibb.co/1KNDQpw/Freelee-icon.png" alt="Logo" width="220" />
      </div>
      
      <!-- Corpo do formulário -->
      <div class="FormBot">
        <form action="" @submit.prevent="login" class="wrapForm">
          <h4>Olá!</h4>
          <p class="FormP">Para continuar, digite seu e-mail</p>
          
          <!-- Campo de email -->
          <div class="input-container">
            <input
              type="text"
              id="username"
              class="inputForm"
            />
            <label for="username" class="labelForm">E-mail</label>
          </div>
          
          <!-- Campo de senha -->
          <div class="input-container">
            <input
              type="password"
              id="password"
              class="marginForm inputForm"
            />
            <label for="password" class="labelForm">Senha</label>
          </div>
          
          <!-- Links e botões -->
          <button type="button" style="margin-top: 10px">
            <router-link class="btnSenha" to="/">Esqueci minha senha</router-link>
          </button>
          <button type="submit" class="btnLogin mt-3">Entrar</button>
          <router-link to="/">
            <button type="button" class="btnCriar mt-3">Criar conta</button>
          </router-link>
          <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições</p>
        </form>
      </div>
    </div>
    </div>
</template>

<style scoped>

body {
  background: #006f56; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; 
  background: #006f56; 
}

.containerPrincipal {
  width: 440px;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.FormTop {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.input-container {
  position: relative;
  margin-top: 30px;
}

.inputForm {
  width: 100%;
  height: 50px;
  padding: 15px;
  border: 1px solid #006f56;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;
}

.inputForm:focus + .labelForm {
  top: -10px;
  font-size: 12px;
}

.labelForm {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  transition: all 0.3s;
  pointer-events: none;
}

.labelForm.active {
  top: -10px;
  font-size: 12px;
}

.btnLogin, .btnCriar {
  width: 100%;
  height: 45px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
}

.btnLogin {
  background-color: #006f56;
  color: white;
  border: none;
}

.btnCriar {
  background-color: white;
  border: 2px solid #006f56;
  color: #006f56;
}

.btnSenha {
  background-color: white;
  color: #006f56;
  border: none;
  text-decoration: underline;
}

.footer {
  text-align: center;
  margin-top: 20px;
  color: white;
}

.footer p {
  margin: 5px 0;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background-color: white;
  color: #006f56;
  border: 1px solid #006f56;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin: 0 10px;
  cursor: pointer;
}

.social-icon:hover {
  background-color: #006f56;
  color: white;
}
</style>
