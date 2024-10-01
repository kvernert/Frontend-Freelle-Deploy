<script setup>
const providers = [
  {
    name: 'Gabriel Lima',
    role: 'Programador',
    username: '@GabrielLima2803',
    rating: 5.0,
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4',
    social: {
      linkedin: 'https://github.com/GabrielLima2803',
      instagram: 'https://www.instagram.com/_.lima1/',
    }
  },
  {
    name: 'Ana Clara',
    role: 'Programador',
    username: '@anaclarag',
    rating: 5.0,
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4',
    social: {
      linkedin: 'https://github.com/GabrielLima2803',
      instagram: 'https://www.instagram.com/_.lima1/',
    }
  },
  {
    name: 'Vitor Mendes',
    role: 'Programador',
    username: '@vitorms',
    rating: 5.0,
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4',
    social: {
      linkedin: 'https://github.com/GabrielLima2803',
      instagram: 'https://www.instagram.com/_.lima1/',
    }
  }
];
</script>

<template>
  <div class="provider-section">
    <h2>Nossos Prestadores</h2>
    <div class="provider-container">
      <div v-for="(provider, index) in providers" :key="index" class="provider-card">
        <div class="provider-left">
          <img :src="provider.image" alt="Profile Image" class="provider-image" />
        </div>
        <div class="provider-right">
          <div class="provider-info">
            <h3>
              Prestador Pro | {{ provider.role }}
              <span class="verified-badge"><i class="mdi mdi-checkbox-marked-circle-outline"></i></span>
            </h3>
            <p>{{ provider.name }}</p>
            <p>{{ provider.username }}</p>
            <p><i class="mdi mdi-star"></i>{{ provider.rating.toFixed(1) }}</p>
          </div>
          <div class="provider-actions">
            <button class="btn">
              <i class="mdi mdi-message"></i>
            </button>
            <button class="btn">
              <i class="mdi mdi-heart-outline"></i>
            </button>
            <button class="btn">Ver Perfil</button>
          </div>
          <div class="provider-social">
            <a :href="provider.social.linkedin" target="_blank">
              <i class="mdi mdi-linkedin"></i>
            </a>
            <a :href="provider.social.instagram" target="_blank">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.provider-section {
  text-align: left;
  margin: 20px;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.provider-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  gap: 20px;
}

.provider-card {
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(33% - 20px); 
  min-width: 300px; 
  margin-bottom: 20px;
}

.provider-left {
  margin-right: 20px;
}

.provider-image {
  border-radius: 50%;
  width: 90px;
  height: 90px;
  object-fit: cover;
}

.provider-right {
  flex-grow: 1;
}

.provider-info {
  font-family: Arial, sans-serif;
  color: #333;
}

.provider-info h3 {
  font-size: 14px;
  font-weight: bold;
  color: #000;
  margin: 0;
  display: flex;
  align-items: center;
}

.verified-badge {
  color: #000;
  font-size: 14px;
  margin-left: 5px;
}

.provider-info p {
  margin: 5px 0;
  color: #333;
}

.provider-info i {
  color: #000;
  margin-right: 5px;
}

.provider-actions {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
}

.btn {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn i {
  font-size: 18px;
}

.provider-social {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}

.provider-social a {
  color: #000000;
  font-size: 25px;
}
@media (max-width: 1500px) {
  .provider-container {
    display: flex;
    flex-direction: column; 
    gap: 20px; 
  }

  .provider-card {
    width: 100%; 
  }
}

</style>
