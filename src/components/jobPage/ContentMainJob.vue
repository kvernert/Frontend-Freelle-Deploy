<script setup>
import { onMounted } from 'vue'
import { useProjetosStore } from '@/stores/projeto'  
import CardUser from './CardUser.vue'
import CardJob from './CardJob.vue'
import CardsComponent from '../homePage/cards/CardsComponent.vue'

const projetosStore = useProjetosStore()

onMounted(() => {
  projetosStore.getAllProjetos()
})
</script>

<template>
    <CardsComponent class="margin-top" />
    <h1 class="title">Title</h1>
    <div class="flex">
        <CardUser />
        <div class="cards-job">
            <div v-for="projeto in projetosStore.projetos" :key="projeto.id">
        <CardJob :projeto="projeto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  gap: 1.4em;
}

h1 {
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}

.title {
  font-size: 3em;
  font-weight: bold;
}

.cards-job {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.margin-top {
  margin-top: 30px;
}
</style>
