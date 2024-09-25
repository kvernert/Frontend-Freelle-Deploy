<script setup>
const cards = [
  { title: 'Programação e Tecnologia', icon: 'fas fa-laptop-code' },
  { title: 'Design Gráfico', icon: 'fas fa-paint-brush' },
  { title: 'Redação e Tradução', icon: 'fas fa-pencil-alt' },
  { title: 'Vídeo e Animação', icon: 'fas fa-video' },
  { title: 'Música e Áudio', icon: 'fas fa-music' },
  { title: 'Negócios', icon: 'fas fa-briefcase' },
  { title: 'Marketing Digital', icon: 'fas fa-chart-line' },
  { title: 'Consultoria', icon: 'fas fa-user-tie' },
  { title: 'Motoboy e Entregas', icon: 'fas fa-motorcycle' },
  { title: 'Garçom', icon: 'fas fa-concierge-bell' },
  { title: 'Manobrista', icon: 'fas fa-car' },
  { title: 'Auxiliar de Cozinha', icon: 'fas fa-utensils' }
];
</script>

<template>
  <div class="card-container">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <i :class="card.icon"></i>
      <h3>{{ card.title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
}

.card i {
  font-size: 40px;
  margin-bottom: 10px;
  display: block;
}

.card h3 {
  font-size: 16px;
  color: #333;
  margin: 0;
}
</style>