<script setup>
import { ref, computed, onMounted } from 'vue';

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

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % cards.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + cards.length) % cards.length;
};

const isMediumScreen = computed(() => window.innerWidth > 768 && window.innerWidth <= 1500);
const isSmallScreen = computed(() => window.innerWidth <= 768);

const handleResize = () => {
  isMediumScreen.value = window.innerWidth > 768 && window.innerWidth <= 1500;
  isSmallScreen.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

</script>

<template>
  <div class="card-section">
    <div class="card-container">
      <div class="arrow left" @click="prev" v-if="isSmallScreen || isMediumScreen">‹</div>
      <div class="carousel" v-if="isSmallScreen || isMediumScreen">
        <div class="cards">
          <div v-for="(card, index) in (isMediumScreen ? cards.slice(currentIndex, currentIndex + 6) : cards.slice(currentIndex, currentIndex + 3))" :key="index" class="card">
            <div class="icon-title">
              <i :class="card.icon" class="card-icon"></i>
              <h3 class="card-title">{{ card.title }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="cards">
          <div v-for="(card, index) in cards" :key="index" class="card">
            <div class="icon-title">
              <i :class="card.icon" class="card-icon"></i>
              <h3 class="card-title">{{ card.title }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="arrow right" @click="next" v-if="isSmallScreen || isMediumScreen">›</div>
    </div>
  </div>
</template>

<style scoped>
.card-section {
  text-align: left;
  margin: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden; 
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 60px; 
  padding-right: 60px; 
}

.cards {
  display: flex;
  gap: 10px; 
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 120px; 
  height: 120px; 
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  padding: 10px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.icon-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
}

.card-icon {
  font-size: 30px;
  margin-bottom: 10px;
}

.card-title {
  font-size: 12px;
  color: #333;
  margin: 0;
}

.arrow {
  cursor: pointer;
  font-size: 30px;
  color: #333;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.left {
  left: 10px; 
}

.right {
  right: 10px; 
}
</style>
