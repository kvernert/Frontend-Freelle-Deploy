<script setup>
const providers = [
  {
    name: 'Gabriel Lima',
    role: 'Programador',
    username: '@GabrielLima2803',
    rating: 5.0,
    image: 'link-da-imagem-gabriel.png',
    social: {
      linkedin: 'link-do-linkedin',
      instagram: 'link-do-instagram',
      telegram: 'link-do-telegram'
    }
  },
  {
    name: 'Ana Clara',
    role: 'Programador',
    username: '@anaclarag',
    rating: 5.0,
    image: 'link-da-imagem-ana.png',
    social: {
      linkedin: 'link-do-linkedin',
      instagram: 'link-do-instagram',
      telegram: 'link-do-telegram'
    }
  },
  {
    name: 'Vitor Mendes',
    role: 'Programador',
    username: '@vitorms',
    rating: 5.0,
    image: 'link-da-imagem-vitor.png',
    social: {
      linkedin: 'link-do-linkedin',
      instagram: 'link-do-instagram',
      telegram: 'link-do-telegram'
    }
  }
];
</script>

<template>
  <div class="provider-section">
    <h2>Nossos Prestadores</h2>
    <div class="provider-container">
      <div v-for="(provider, index) in providers" :key="index" class="provider-card">
        <img :src="provider.image" alt="Profile Image" class="provider-image" />
        <div class="provider-info">
          <h3>
            Prestador Pro | {{ provider.role }}
            <span class="verified-badge">✔️</span>
          </h3>
          <p>{{ provider.name }}</p>
          <p>{{ provider.username }}</p>
          <p>⭐ {{ provider.rating.toFixed(1) }}</p>
        </div>
        <div class="provider-actions">
          <button class="btn">
            <i class="fas fa-paper-plane"></i>
          </button>
          <button class="btn">
            <i class="fas fa-heart"></i>
          </button>
          <button class="btn">Ver Perfil</button>
        </div>
        <div class="provider-social">
          <a :href="provider.social.linkedin" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a :href="provider.social.instagram" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
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
  gap: 20px;
  justify-content: space-around;
  flex-wrap: wrap;
}

.provider-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
}

.provider-card:hover {
  transform: translateY(-5px);
}

.provider-image {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.provider-info {
  margin: 15px 0;
}

.verified-badge {
  color: #4caf50;
}

.provider-actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}

.btn {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #f5f5f5;
}

.provider-social {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.provider-social a {
  color: #333;
  font-size: 18px;
  transition: color 0.3s ease;
}

.provider-social a:hover {
  color: #0073b1; 
}
</style>