  <script>
  export default {
    name: "ProviderProfile",
    data() {
      return {
        provider: {
          name: "Heloisa Lopes",
          username: "@heloisa-lopes",
          location: "Brasil",
          language: "Fala Português",
          rating: 5.0,
          reviews: "14.0k",
          totalOrders: "29.2",
          yearsInPlatform: 3,
          expertise: "Design de Logotipo",
          about:
            "Olá, meu nome é Álpa. Além de designer gráfica e empresária, adoro desenhar, o que estimula minha criatividade e me ajuda a relaxar. Também gosto de andar de bicicleta, pois me mantém saudável e em forma. Forneço uma variedade de serviços, incluindo design de logotipo minimalista, animação, guias de estilo de marca, desenvolvimento web e design de papelaria. Vamos dar as mãos e transformar seu negócio em uma marca reconhecível! Contate-me agora!",
          image: "https://avatars.githubusercontent.com/u/106837380?v=4",
        },
      };
    },
  };
  </script>
<template>
    <div class="profile-container">
      <div class="profile-left">
        <img :src="provider.image" alt="Profile Image" class="profile-image" />
        <h1>{{ provider.name }} <span class="username">{{ provider.username }}</span></h1>
        <p class="location">
          <i class="mdi mdi-map-marker"></i> {{ provider.location }} 
          <i class="mdi mdi-translate"></i> {{ provider.language }}
        </p>
  
        <div class="ratings">
          <div class="rating">
            <i class="mdi mdi-star"></i> {{ provider.rating.toFixed(1) }}
            <span>{{ provider.reviews }} avaliações</span>
          </div>
          <div class="orders">
            <span>{{ provider.totalOrders }}K</span> Total de Pedidos
          </div>
          <div class="years">
            <span>{{ provider.yearsInPlatform }}</span> anos Na Freelle
          </div>
        </div>
  
        <div class="expertise">
          <h3>Expert em:</h3>
          <p><i class="mdi mdi-palette"></i> {{ provider.expertise }}</p>
        </div>
  
        <div class="about-section">
          <h3>Sobre</h3>
          <p>{{ provider.about }}</p>
        </div>
      </div>
  
      <div class="profile-right">
        <div class="contact-card">
          <h2>{{ provider.name }}</h2>
          <p class="username">{{ provider.username }}</p>
          <button class="contact-btn">
            <i class="mdi mdi-send"></i> Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .profile-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  .profile-left {
    width: 65%;
  }
  
  .profile-right {
    width: 30%;
  }
  
  .profile-image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .username {
    color: #666;
    font-size: 14px;
  }
  
  .location {
    color: #333;
    margin: 5px 0;
    font-size: 14px;
  }
  
  .ratings {
    display: flex;
    gap: 20px;
    margin-top: 10px;
    font-size: 14px;
  }
  
  .rating, .orders, .years {
    display: flex;
    align-items: center;
  }
  
  .expertise {
    margin-top: 20px;
  }
  
  .expertise h3 {
    font-weight: bold;
  }
  
  .about-section {
    margin-top: 20px;
  }
  
  .about-section h3 {
    font-weight: bold;
  }
  
  .contact-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .contact-card h2 {
    font-size: 18px;
  }
  
  .contact-card .username {
    color: #666;
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  .contact-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  
  .contact-btn i {
    font-size: 16px;
  }
  </style>
  