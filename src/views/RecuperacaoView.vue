<script setup>
import { RecuperacaoSenha } from "@/components";
</script>

<template>
  <header-component v-if="!isSmallScreen" />
  <header-small v-if="isSmallScreen" />

  <div class="wrapContainer">
    <div class="FormTop">
      <img src="https://i.ibb.co/1KNDQpw/Freelee-icon.png" alt="Logo" class="logo" />
    </div>
    <div class="containerPrincipal">
      <div class="FormBot">
        <form @submit.prevent="login" class="wrapForm">
          <!-- "Olá!" alinhado à esquerda -->
          <h4 class="Text">Esqueceu sua senha?</h4>

          <div class="input-container">
             
            <input
              type="password"
              id="password"
              class="marginForm inputForm"
            />
            <label for="email" class="labelForm">Digite seu email</label>
          </div>

          <router-link to="/">
            <button type="button" class="btnCriar mt-3">Enviar Código</button>
          </router-link>
          <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições</p>
        </form>
      </div>
    </div>
  </div>

  <RouterView/>
  <RecuperacaoSenha/>
</template>

<style scoped></style>