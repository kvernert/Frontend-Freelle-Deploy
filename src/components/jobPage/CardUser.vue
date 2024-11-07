<template>
    <div class="container">
        <div class="box-img">
            <img src="https://via.placeholder.com/150" alt="https://i.ibb.co/phgw2Yc/feitos.png">
        </div>
        <div class="bio">
            <p class="biografia">Olá, meu nome é Alpa. Forneço uma variedade de serviços, incluindo design de logotipo minimalista, animação, guias de estilo de marca, desenvolvimento web e design de papelaria. Vamos dar as mãos e transformar seu negócio em uma marca reconhecível! Contate-me agora!</p>
        </div>
        <div class="box-rating">
            <p class="negrito">Avaliação</p>
            <div class="rating-row" v-for="star in ratings" :key="star.stars">
                <p>{{ star.stars }} estrelas</p>
                <div class="progress-bar">
                    <div
                        class="progress-fill"
                        :style="{ width: star.percentage + '%' }"
                    ></div>
                </div>
                <p class="rating-count">({{ star.count }} avaliações)</p>
            </div>
        </div>
        <div class="formation">
            <p class="negrito">Formação</p>
            <p>
                <span class="mdi mdi-school icon"></span> Pós-Graduação
            </p>
        </div>
    </div>
</template>

<script setup>
const ratings = [
  { stars: 5, percentage: 80, count: 150 },
  { stars: 4, percentage: 60, count: 120 },
  { stars: 3, percentage: 40, count: 90 },
  { stars: 2, percentage: 20, count: 30 },
  { stars: 1, percentage: 10, count: 10 }
];
</script>

<style scoped>

.container {
    width: 300px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    height: 100%;
    padding: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000; 
}

.box-img {
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-img img {
    width: 75%;
    border-radius: 50%;
}

.bio, .box-rating, .formation {
    margin: 15px 0; 
}

.box-rating {
    width: 100%;
}

.rating-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px 0;
}

.progress-bar {
    flex: 1;
    height: 8px;
    background-color: #e0e0e0;
    border-radius: 4px;
    margin: 0 8px;
}

.negrito {
    font-weight: bold;
}

.progress-fill {
    height: 100%;
    background-color: #000000;
    border-radius: 4px;
}

.rating-count {
    font-size: 12px;
    color: #666;
}

.biografia {
    text-align: center;
    font-size: 14px;
}

.formation .icon {
    margin-right: 5px;
    color: #666;
}
</style>
