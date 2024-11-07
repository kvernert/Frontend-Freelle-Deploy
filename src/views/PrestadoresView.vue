<script setup>
import { FooterComponent, HeaderComponent, HeaderSmall, FooterSmall, CardsPerfil, CardProjetos } from "@/components";
import { ref, onMounted } from 'vue';
const isSmallScreen = ref(false);

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});
</script>

<template>
  <!-- Header Grande (escondido em telas pequenas) -->
  <header-component v-if="!isSmallScreen" />
  <!-- Header Pequeno (exibido apenas em telas pequenas) -->
  <header-small v-if="isSmallScreen" />
  <div class="container">
    <CardsPerfil />
    <CardProjetos />
  <div class="footer">
  <!-- Footer Grande (escondido em telas pequenas) -->
  <footer-component v-if="!isSmallScreen" />
  <!-- Footer Pequeno (exibido apenas em telas pequenas) -->
  <footer-small v-if="isSmallScreen" />
</div>
</div>
</template>

<style scoped>
.container {
  max-width: 1460px; /* Define a largura máxima */
  margin: 0 auto; /* Centraliza o conteúdo */
  padding: 0 20px; /* Adiciona um pequeno padding nas laterais, se necessário */
}
</style>
