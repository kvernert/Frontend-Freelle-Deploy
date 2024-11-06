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

      <div class="profile-form-container">
        <div class="profile-section">
          <img src="/Profile.png" alt="Profile Picture" class="profile-img">
          <div class="story-container">
            <p class="story-text">Conte um pouco da sua história...</p>
          </div>
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

          <button type="submit" class="btn-submit">CONFIRMAR ALTERAÇÕES</button>
        </form>
      </div>

      <p class="privacy">Protegido por reCAPTCHA - <a href="#">Privacidade</a> | <a href="#">Condições</a></p>
    </div>
  </div>

  <div class="footer">
    <footer-component v-if="!isSmallScreen" />
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
  width: 80%;
  max-width: 800px;
  background-color: white;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
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

.profile-form-container {
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid #ccc;
}

.story-container {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.story-text {
  font-size: 12px;
  color: #666;
}

.wrapForm {
  width: 65%;
  display: flex;
  flex-direction: column;
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
  width: 100%; /* Ajustado para ocupar 80% do container para destacar o botão */
  max-width: 400px; /* Limite de largura para telas maiores */
  padding: 15px;
  margin: 25px auto; /* Centralizado horizontalmente */
  background-color: #004D47;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #003F3A;
}
.privacy {
  font-size: 12px;
  color: #666;
  margin-top: 30px;
}

.privacy a {
  color: #006B63;
  text-decoration: none;
}

.footer {
  background: #006B63;
  width: 100%;
}

@media (max-width: 768px) {
  .containerPrincipal {
    width: 90%;
    padding: 20px;
  }

  .profile-form-container {
    flex-direction: column;
    align-items: center;
  }

  .logo-top {
    width: 60px;
  }

  .btn-submit {
    font-size: 14px;
    padding: 12px;
  }
}
</style>
