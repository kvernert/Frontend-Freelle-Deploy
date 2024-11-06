<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const authStore = useAuthStore();

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const logout = () => {
  authStore.logout();
  showMenu.value = false;
};

// Variável para armazenar o valor da pesquisa
const searchQuery = ref('');
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="header-left">
        <router-link to="/" class="btn">
          <img src="https://i.ibb.co/1KNDQpw/Freelee-icon.png" alt="Logo" class="img" />
        </router-link>

        <!-- Barra de Pesquisa -->
        <div class="search-container">
          <input 
            v-model="searchQuery" 
            type="text" 
            class="search-input" 
            placeholder="Pesquisar..." 
          />
        </div>
      </div>
      <div class="header-right">
        <button class="btn">Português</button>

        <button @click="toggleMenu" class="user-avatar-button">
          <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar" />
        </button>

        <div v-if="showMenu" class="user-menu">
          <p @click="logout">Sair</p>
          <router-link to="/profile">
            <p>Ver perfil</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  width: 100%;
  max-width: 1460px;
  height: 4em;
  margin: 0 auto;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 2em; /* Ajuste para adicionar espaço entre a logo e a barra de pesquisa */
}

.header {
  width: 100%;
  background-color: #006b63;
  margin: 0;
}

.img {
  width: 63px;
  height: 60px;
}

.search-container {
  position: relative;
}

.search-input {
  width: 250px;
  height: 2.5em;
  padding: 0 1em;
  border-radius: 0.5em;
  border: 1px solid #ccc;
  outline: none;
  font-size: 1em;
  color: #333;
}

.search-input:focus {
  border-color: #006b63;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 2em;
}

button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  outline: none;
  box-shadow: none;
  appearance: none;
  cursor: pointer;
  color: white;
}

.btn {
  text-decoration: none;
  color: white;
  margin: auto;
}

.btn-i {
  border: white 1.5px solid;
  border-radius: 0.5em;
  width: 7em;
  height: 2.5em;
  padding: 0 1.5em;
  line-height: 2.5em;
  text-align: center;
}

.auth-buttons {
  display: flex;
  gap: 2em;
}

.user-avatar-container {
  display: flex;
  justify-content: center;
}

.user-avatar-button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-menu {
  position: absolute;
  background-color: white;
  color: #006b63;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  top: 50px;
  right: 0;
}

.user-menu p {
  cursor: pointer;
  margin: 0.5em 0;
}

.user-menu p:hover {
  color: #005c53;
}
</style>
