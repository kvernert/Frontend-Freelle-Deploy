<script setup>
import { FooterComponent, HeaderComponent, CardsComponent, CardServicos, CardsPrestadores, CarouselOne, CardsFeitos } from "@/components";
</script>

<template>
  <HeaderComponent/>
  <main>
    <CarouselOne/>
    <CardsComponent/>
    <CardServicos/>
    <CardsPrestadores/>
    <CardsFeitos/>
  </main>
  <FooterComponent/>
</template>

