<script setup>
const providers = [
  {
    name: 'Heloisa Lopes',
    role: 'Designer',
    username: '@heloisa-lopes',
    rating: 5.0,
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4'
  },
  {
    name: 'Gabriel Lima',
    role: 'Programador',
    username: '@GabrielLima2803',
    rating: 5.0,
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4'
  },
  {
    name: 'Ana Clara',
    role: 'Programadora',
    username: '@anaclarag',
    rating: 5.0,
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4'
  },
  {
    name: 'Ana Clara',
    role: 'Programadora',
    username: '@anaclarag',
    rating: 5.0,
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4'
  },
  {
    name: 'Ana Clara',
    role: 'Programadora',
    username: '@anaclarag',
    rating: 5.0,
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4'
  },
  {
    name: 'Ana Clara',
    role: 'Programadora',
    username: '@anaclarag',
    rating: 5.0,
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4'
  }
]
</script>

<template>
  <div class="container">
  <div class="box-title">
    <h1>Conheça Nossos Prestadores</h1>
  </div>
  <div class="provider-section">
    <div class="provider-container">
      <div v-for="(provider, index) in providers" :key="index" class="provider-card">
        <div class="provider-image-container">
          <img :src="provider.image" alt="Profile Image" class="provider-image" />
        </div>
        <div class="provider-info">
          <h3>
            Prestador Pro | {{ provider.role }}
            <span class="verified-badge"
              ><i class="mdi mdi-checkbox-marked-circle-outline"></i
            ></span>
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
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.box-title {
  padding: 5em 0;
  margin: 0 auto; 
}

.provider-section {
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
}

.provider-container {
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
}

.provider-card {
  background-color: white;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 160px;
  font-family: 'Arial', sans-serif;
  flex-shrink: 0;
}

.provider-image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.provider-image {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.provider-info h3 {
  font-size: 14px;
  color: #000;
  font-weight: lighter;
  margin-bottom: 5px;
}

.verified-badge {
  color: #000;
  font-size: 12px;
  margin-left: 5px;
}

.provider-info p {
  margin: 5px 0;
  font-size: 12px;
  color: #333;
}

.provider-info i {
  color: #000;
  margin-right: 5px;
}

.provider-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.btn {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 7px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.btn i {
  font-size: 16px;
}

.btn:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .provider-container {
    gap: 1.5em; 
  }

  .provider-card {
    width: 140px; 
  }
  .box-title{
    text-align: center;
  }
}

@media (max-width: 480px) {
  .provider-container {
    gap: 1em; 
  }

  .provider-card {
    width: 120px; 
  }

  .provider-info h3 {
    font-size: 12px; 
  }

  .provider-info p {
    font-size: 10px;
  }

  .btn {
    padding: 5px; 
  }
  .box-title{
    text-align: center;
  }
}
</style>
