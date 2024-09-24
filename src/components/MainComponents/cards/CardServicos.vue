<script setup>
const cards = [
  { title: 'Desenvolvimento de Sites', image: 'link-da-imagem-1.png', bgColor: 'green-bg' },
  { title: 'Logotipo', image: 'link-da-imagem-2.png', bgColor: 'orange-bg' },
  { title: 'SEO', image: 'link-da-imagem-3.png', bgColor: 'dark-green-bg' },
  { title: 'Arquitetura e Design de Interiores', image: 'link-da-imagem-4.png', bgColor: 'brown-bg' }
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
  border-radius: 15px;
  width: 250px;
  height: 150px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  position: relative;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  position: absolute;
  top: 10px;
  left: 10px;
}

h3 {
  margin: 0;
  font-size: 18px;
  position: absolute;
  bottom: 20px;
  right: 20px;
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
