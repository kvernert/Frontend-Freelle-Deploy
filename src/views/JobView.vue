<script setup>
import { ContentMainJob, HeaderComponent, FooterComponent, HeaderSmall, FooterSmall } from "@/components";
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
    <header-component v-if="!isSmallScreen" />
    <header-small v-if="isSmallScreen" />
    <div class="container">
        <ContentMainJob/>
    <div class="footer">
    <footer-component v-if="!isSmallScreen" />
    <footer-small v-if="isSmallScreen" />
  </div>
  </div>
  </template>
  

<style scoped>

</style>