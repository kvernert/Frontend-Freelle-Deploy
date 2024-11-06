<script setup>
import { HeaderComponent, HeaderSmall, FooterComponent, FooterSmall } from "@/components";
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

  <div class="wrapContainer">
    <img src="https://i.ibb.co/1KNDQpw/Freelee-icon.png" alt="Logo" class="logo-top" />
    
    <div class="containerPrincipal">
      <p class="update-text">Precisa atualizar seu perfil? <a href="#">Vá para o meu perfil</a></p>

      <div class="profile-picture">
        <!-- Placeholder para a imagem do perfil -->
        <img src="https://via.placeholder.com/100" alt="Profile Picture" class="profile-img">
        <p class="picture-text">Escolha uma foto...</p>
      </div>

      <form @submit.prevent="login" class="wrapForm">
        <div class="input-container">
          <label for="name">Nome Completo</label>
          <input type="text" id="name" class="inputForm" placeholder="Digite seu nome..." />
        </div>

        <div class="input-container">
          <label for="email">Email</label>
          <input type="email" id="email" class="inputForm" placeholder="Digite seu email..." />
        </div>

        <div class="input-container">
          <label for="area">Área de atuação</label>
          <input type="text" id="area" class="inputForm" placeholder="Informe sua área de atuação..." />
        </div>

        <div class="input-container">
          <label for="education">Formação</label>
          <input type="text" id="education" class="inputForm" placeholder="Digite sua formação..." />
        </div>

        <button type="submit" class="btn-submit">Confirmar Alterações</button>
      </form>

      <p class="FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições</p>    </div>
  </div>
  <div class="footer">
  <!-- Footer Grande (escondido em telas pequenas) -->
  <footer-component v-if="!isSmallScreen" />
  <!-- Footer Pequeno (exibido apenas em telas pequenas) -->
  <footer-small v-if="isSmallScreen" />
</div>
</template>

<style scoped>
body {
  background-color: #006B63;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.wrapContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #006B63;
}

.logo-top {
  width: 80px;
  margin-bottom: 20px;
}

.containerPrincipal {
  width: 440px;
  background-color: white;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.update-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.update-text a {
  color: #006B63;
  text-decoration: none;
  font-weight: bold;
}

.profile-picture {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.picture-text {
  font-size: 12px;
  color: #666;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
}

.inputForm {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.3s;
  margin-top: 5px;
}

.inputForm:focus {
  border-color: #006B63;
}

.btn-submit {
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #006B63;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #004D47;
}

.privacy {
  font-size: 12px;
  color: #666;
  margin-top: 20px;
}
.footer {
  background: #006B63;
}

.privacy a {
  color: #006B63;
  text-decoration: none;
}
.Pf {
  font-size: 12px;
  margin-top: 30px;
}
@media (max-width: 768px) {
  .containerPrincipal {
    width: 90%;
    padding: 20px;
  }

  .logo-top {
    width: 60px;
  }

  .btn-submit {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
