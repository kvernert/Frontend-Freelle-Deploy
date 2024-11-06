
<script setup>
import { HeaderComponent, HeaderSmall } from "@/components";
import { ref, onMounted } from 'vue';

const isSmallScreen = ref(false);

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

const moveFocus = (event, currentIndex) => {
  const inputs = document.querySelectorAll('.code-input');
  if (event.target.value !== "" && currentIndex < inputs.length - 1) {
    inputs[currentIndex + 1].focus();
  } else if (event.target.value === "" && currentIndex > 0) {
    inputs[currentIndex - 1].focus();
  }
};
</script>

<template>
  <!-- Header Grande (escondido em telas pequenas) -->
  <header-component v-if="!isSmallScreen" />
  <!-- Header Pequeno (exibido apenas em telas pequenas) -->
  <header-small v-if="isSmallScreen" />

  <div class="wrapContainer">
    <div class="FormTop">
      <img src="https://i.ibb.co/1KNDQpw/Freelee-icon.png" alt="Logo" class="logo-top" />
    </div>
    <div class="containerPrincipal">
      <div class="FormBot">
        <form @submit.prevent="login" class="wrapForm">
          <h4 class="Text">Digite o Código</h4>
          <div class="code-container mt-3">
            <!-- Primeiro grupo de três inputs -->
            <input
              v-for="(input, index) in 3"
              :key="index"
              type="text"
              maxlength="1"
              class="code-input"
              @input="moveFocus($event, index)"
            />
            <!-- Traço separador -->
            <span class="separator">-</span>
            <!-- Segundo grupo de três inputs -->
            <input
              v-for="(input, index) in 3"
              :key="index + 3"
              type="text"
              maxlength="1"
              class="code-input"
              @input="moveFocus($event, index + 3)"
            />
          </div>

          <div class="input-container">
            <input
              type="text"
              id="username"
              class="inputForm"
            />
            <label for="password" class="labelForm">Crie sua nova senha...</label>
          </div>
          <div class="input-container">
            <input
              type="password"
              id="password"
              class="marginForm inputForm"
            />
            <label for="password" class="labelForm">Confirme sua nova senha...</label>
          </div>

          <button type="submit" class="btnAtualizar mt-3">Atualizar</button>
          <p class="mt-4 FormP Pf">Protegido por reCAPTCHA - Privacidade | Condições</p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  background: #006B63;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: 'Arial', sans-serif;
}

.wrapContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #006B63;
  
}

.containerPrincipal {
  width: 440px;
  background-color: white;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: center;
}

.logo-top {
  width: 80px;
  margin-bottom: 20px;
}

.input-container {
  position: relative;
  margin-top: 28px;

}

.inputForm {
  width: 100%;
  height: 50px;
  padding: 15px;
  border: 1px solid #006B63;
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

.btnAtualizar {
  background-color: #006B63;
  color: white;
  border: none;
  width: 100%;
  height: 45px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

.Pf {
  font-size: 12px;
  margin-top: 30px;
}

/* Estilos para os quadrados do código */
.code-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.code-input {
  width: 50px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #006B63;
  border-radius: 5px;
  outline: none;
}

.code-input:focus {
  border-color: #000;
}

.separator {
  font-size: 24px;
  font-weight: bold;
  color: #006B63;
}

/* Estilos para telas pequenas */
@media (max-width: 768px) {
  .containerPrincipal {
    width: 90%;
    padding: 20px;
  }

  .btnLogin, .btnCriar {
    font-size: 16px;
    height: 40px;
  }

  .logo {
    width: 140px;
  }
}

@media (max-width: 576px) {
  .containerPrincipal {
    width: 80%;
    padding: 15px;
  }

  .inputForm {
    height: 40px;
    padding: 10px;
  }

  .btnLogin, .btnCriar {
    height: 35px;
    font-size: 14px;
  }
}
</style>
