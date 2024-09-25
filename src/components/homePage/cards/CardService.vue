<script>
</script>

<template>
    <div class="cards-container">
        <div class="card card-dev-sistemas">
            <img src="https://i.ibb.co/5xrbBNL/card-Dens-Sistema.png" alt="Card Desenvolvimento de Sistemas">
            <div class="card-title">Desenvolvimento de Sistemas</div>
        </div>
         
        <div class="card card-logotipo">
            <img src="https://i.ibb.co/rvCqDcy/card-logotipo.png" alt="Card Logotipo">
            <div class="card-title">Logotipo</div>
        </div>

        <div class="card card-seo">
            <img src="https://i.ibb.co/TvLVJ0G/card-seo.png" alt="Card SEO">
            <div class="card-title">SEO</div>
        </div>

        <div class="card card-arquitetura">
            <img src="https://i.ibb.co/dk5Sn7S/card-Arquitetura.png" alt="Card Arquitetura">
            <div class="card-title">Arquitetura e Design de Interiores </div>
        </div>


    </div>
</template>

<style scoped>
.cards-container {
  display: flex;
  gap: 1.5em;
  font-family: "Jost", sans-serif;
  flex-wrap: wrap; 
}

.card {
  display: flex;
  align-items: center;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 330px;
  gap: 1em;
  flex-basis: 100%; 
}

.card img {
  object-fit: contain;
  border-radius: 5px;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
  color: white; 
}

.card-seo {
  background-color: #003912 ; 
}

.card-arquitetura {
  background-color: #4D1727; 
}

.card-dev-sistemas {
  background-color: #00732E; 
}

.card-logotipo {
  background-color: #FF7640 ;
}
</style>
