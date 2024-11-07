<script setup>
import { HeaderLoggedPage, HeaderSmall, FooterComponent, FooterSmall } from "@/components";
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/user';
import { useNacionalidadeStore } from '@/stores/nacionalidade';
import { useFormacaoStore } from '@/stores/formacao';

const isSmallScreen = ref(false);
const userStore = useUserStore();
const nacionalidadeStore = useNacionalidadeStore();
const formacaoStore = useFormacaoStore();

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);

  nacionalidadeStore.getAllNacionalidades();
  formacaoStore.getAllFormacoes();
});

const userData = ref({
  name: '',
  email: '',
  biografia: '',
  nacionalidade: null,
  linguagem_principal: '',
  especializacao: '',
  instagram: '',
  linkedin: '',
  foto: '',
  foto_str: '', // Campo para armazenar a string da foto
  formacao: null
});

const nacionalidades = computed(() => nacionalidadeStore.nacionalidades);
const formacoes = computed(() => formacaoStore.formacoes);

const handleFileUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    
    reader.onloadend = () => {
      userData.value.foto_str = reader.result;
    };
    
    reader.readAsDataURL(file); 
  }
};

const updateProfile = async () => {
  try {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      alert('Token não encontrado! Faça login novamente.');
      return;
    }

    const dataToUpdate = Object.fromEntries(
      Object.entries(userData.value || {}).filter(([ value]) => value !== '' && value !== null)
    );

    if (userData.value.foto_str) {
      // Envia a foto convertida para base64
      dataToUpdate.foto_str = userData.value.foto_str;
    }

    await userStore.updateMeUser(authToken, dataToUpdate);
    alert('Perfil atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar o perfil:', error);
    alert('Erro ao atualizar o perfil!');
  }
};

</script>

<template>
  <HeaderLoggedPage v-if="!isSmallScreen" />
  <header-small v-if="isSmallScreen" />
  <div class="wrapContainer">
    <img src="https://i.ibb.co/1KNDQpw/Freelee-icon.png" alt="Logo" class="logo-top" />

    <div class="containerPrincipal">
      <p class="update-text">Precisa atualizar seu perfil? <a href="#">Vá para o meu perfil</a></p>

      <div class="profile-form-container">
        <div class="profile-section">
          <img :src="userData.foto_str || 'default-avatar.png'" alt="Foto de perfil" class="profile-img" />
          <div class="input-container">
            <label for="foto">Escolha uma foto</label>
            <input type="file" id="foto" accept="image/*" @change="handleFileUpload" />
          </div>
          <div class="story-container">
            <p class="story-text">Conte um pouco da sua história...</p>
            <textarea v-model="userData.biografia" placeholder="Conte sua história..." class="biography-textarea"></textarea>
          </div>
        </div>

        <form @submit.prevent="updateProfile" class="wrapForm">
          <div class="input-container">
            <label for="name">Nome Completo</label>
            <input type="text" id="name" class="inputForm" v-model="userData.name" placeholder="Digite seu nome..." />
          </div>

          <div class="input-container">
            <label for="email">Email</label>
            <input type="email" id="email" class="inputForm" v-model="userData.email" placeholder="Digite seu email..." />
          </div>

          <div class="input-container">
            <label for="nacionalidade">Nacionalidade</label>
            <select id="nacionalidade" v-model="userData.nacionalidade" class="inputForm">
              <option value="">Selecione sua nacionalidade</option>
              <option v-for="nacionalidade in nacionalidades" :key="nacionalidade.id" :value="nacionalidade.id">
                {{ nacionalidade.nome }}
              </option>
            </select>
          </div>

          <div class="input-container">
            <label for="linguagem_principal">Linguagem Principal</label>
            <input type="text" id="linguagem_principal" class="inputForm" v-model="userData.linguagem_principal" placeholder="Informe sua linguagem principal..." />
          </div>

          <div class="input-container">
            <label for="especializacao">Especialização</label>
            <input type="text" id="especializacao" class="inputForm" v-model="userData.especializacao" placeholder="Informe sua especialização..." />
          </div>

          <div class="input-container">
            <label for="instagram">Instagram</label>
            <input type="text" id="instagram" class="inputForm" v-model="userData.instagram" placeholder="Informe seu Instagram..." />
          </div>

          <div class="input-container">
            <label for="linkedin">LinkedIn</label>
            <input type="text" id="linkedin" class="inputForm" v-model="userData.linkedin" placeholder="Informe seu LinkedIn..." />
          </div>

          <div class="input-container">
            <label for="formacao">Formação</label>
            <select id="formacao" v-model="userData.formacao" class="inputForm">
              <option value="">Selecione sua formação</option>
              <option v-for="formacao in formacoes" :key="formacao.id" :value="formacao.id">
                {{ formacao.nivel_academico }}
              </option>
            </select>
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
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: 25px auto;
  background-color: #006B63;
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

.biography-textarea {
  width: 100%;
  height: 100px;
  padding: 12px;
  border: 1px solid #ccc;
  outline: none;
  margin-top: 5px;
  border-radius: 8px;
  transition: border-color 0.3s;
}

.biography-textarea:focus {
  border-color: #006B63;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid #ccc;
}

.input-container input[type="file"] {
  display: none;
}

.input-container label {
  cursor: pointer;
  color: #006B63;
  font-weight: bold;
  margin-top: 10px;
}

.input-container input[type="file"]:focus + label {
  color: #003F3A;
}
</style>
