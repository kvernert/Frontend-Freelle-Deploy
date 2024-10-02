<script setup>
import { ref } from "vue";

const CardJson = ref({
  "images": [
    {
      "name": "Logotipo e Identidade de Marca",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649968/Logo%20_%20Brand%20Identity.png"
    },
    {
      "name": "Design de Aplicativos e Web",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649980/Web%20_%20App%20Design.png"
    },
    {
      "name": "Arte e Ilustração",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649988/Art%20_%20Illustration.png"
    },
    {
      "name": "Arquitetura e Design de Edifícios",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649984/Architecture%20_%20Building%E2%80%A8Design.png"
    },
    {
      "name": "Produto e Games",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649966/Product%20_%20Gaming.png"
    },
    {
      "name": "Design Visual",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649982/Visual%20Design.png"
    },
    {
      "name": "Design de Impressão",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649969/Print%20Design.png"
    },
    {
      "name": "Embalagem e Capas",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649987/Packaging%20_%20Labels.png"
    },
    {
      "name": "Design 3D",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649986/3D%20Design.png"
    },
    {
      "name": "Design de Marketing",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649965/Marketing%20design.png"
    },
    {
      "name": "Moda e Mercadorias",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649981/Fashion%20_%20Merchandise.png"
    },
    {
      "name": "Diversos",
      "img": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649974/Miscellaneous.png"
    }
  ]
});
</script>

<template>
  <div class="box-title">
    <h1>Explore o Design Gráfico</h1>
  </div>
  <div class="grid-container">
    <div v-for="(card, index) in CardJson.images" :key="index" class="grid-item">
      <img :src="card.img" :alt="card.name" />
      <p>{{ card.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.box-title {
  padding: 5em 0;
  margin: 0 auto; 
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 30px; 
  padding: 40px; 
}

.grid-item {
  text-align: center;
  padding: 10px;
  border-radius: 8px;
}

.grid-item img {
  width: 100%; 
  height: auto; 
  border-radius: 5px;
}

.grid-item p {
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
}
@media (max-width: 768px) {
        .box-title {
            text-align: center;
            padding: 3em 0; 
        }
        .grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 30px; 
  padding: 40px; 
}

    }

    @media (max-width: 480px) {
        .box-title {
            text-align: center;
            padding: 2em 0; 
            font-size: 1.5em; 
        }
        .grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Colunas responsivas */
  gap: 30px; 
  padding: 40px; 
}
    }
</style>
