<script setup>
const cards = [
  { title: 'Programação e Tecnologia', icon: 'mdi mdi-monitor' },
  { title: 'Design Gráfico', icon: 'mdi mdi-palette-advanced' },
  { title: 'Redação e Tradução', icon: 'mdi mdi-comment-text' },
  { title: 'Vídeo e Animação', icon: 'mdi mdi-presentation-play' },
  { title: 'Música e Áudio', icon: 'mdi mdi-music-note' },
  { title: 'Negócios', icon: 'mdi mdi-account-multiple' },
  { title: 'Marketing Digital', icon: 'mdi mdi-television-guide' },
  { title: 'Consultoria', icon: 'mdi mdi-account-switch' },
  { title: 'Motoboy e Entregas', icon: 'mdi mdi-motorbike' },
  { title: 'Garçom', icon: 'mdi mdi-linux' },
  { title: 'Manobrista', icon: 'mdi mdi-car' },
];
</script>

<template>
  <div class="card-container">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <div class="icon-title">
        <i :class="card.icon" class="card-icon"></i>
        <h3 class="card-title">{{ card.title }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px; 
  padding: 15px;
  text-align: left; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.icon-title {
  display: flex;
  align-items: center;
}

.card-icon {
  font-size: 30px;
  margin-right: 10px;
}

.card-title {
  font-size: 14px; 
  color: #333;
  margin: 0;
}

@media (max-width: 768px) {
  .card-container {
    justify-content: center;
    flex-wrap: wrap;
  }

  .card {
    width: calc(33.33% - 20px); 
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .card {
    width: calc(50% - 20px);
  }
}
</style>
