<script setup>
import CarouselService from "./CarouselService.vue";
import CardDesing from "./cards/CardDesing.vue";
import CardPretadoresService from "./cards/CardPretadoresService.vue";
</script>

<template>
    <div class="container">
        <CarouselService />
        <CardDesing />
        <CardPretadoresService/>
    </div>
</template>

<style scoped>
.container {
    max-width: 1420px;
    margin: 0 auto;
    width: 100%; 
}
</style>
