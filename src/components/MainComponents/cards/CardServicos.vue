<script setup>
const cards = [
  { title: 'Desenvolvimento de Sites', image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png', bgColor: 'green-bg' },
  { title: 'Logotipo', image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png', bgColor: 'orange-bg' },
  { title: 'SEO', image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png', bgColor: 'dark-green-bg' },
  { title: 'Arquitetura e Design de Interiores', image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png', bgColor: 'brown-bg' }
];
</script>

<template>
  <div class="card-section">
    <h2>Serviços Populares</h2>
    <div class="card-container">
      <div v-for="(card, index) in cards" :key="index" :class="'card ' + card.bgColor">
        <img :src="card.image" alt="card image" class="card-image" />
        <h3>{{ card.title }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-section {
  text-align: left;
  margin: 20px;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.card {
  border-radius: 8px; 
  width: 350px; 
  height: 160px; 
  padding: 15px; 
  display: flex;
  flex-direction: row; 
  align-items: center; 
  color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease;
  position: relative;
}

.card-image {
  width: 200px; 
  height: 130px;
  border-radius: 8px;
  object-fit: contain;
}

h3 {
  margin: 0;
  font-size: 18px;
  margin-left: 5px; 
}

.card:hover {
  transform: translateY(-5px);
}


.green-bg {
  background-color: #1e7c1e;
}

.orange-bg {
  background-color: #ff7043;
}

.dark-green-bg {
  background-color: #004d40;
}

.brown-bg {
  background-color: #5d4037;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
