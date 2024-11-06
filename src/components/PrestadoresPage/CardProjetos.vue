        <script>
        export default {
          data() {
            return {
              projects: [
                { id: 1, image: 'https://i.ibb.co/F4mF1HT/project1.png', title: 'Cartões de Visita' },
                { id: 2, image: 'https://i.ibb.co/qJJdQbj/project2.png', title: 'Convite' },
                { id: 3, image: 'https://i.ibb.co/njDKbbH/project3.png', title: 'Logo Birdleaf' },
                { id: 4, image: 'https://i.ibb.co/sWgmYCb/project4.png', title: 'Logo Toptip' },
                { id: 5, image: 'https://i.ibb.co/17RywT3/project5.png', title: 'Logo Casa da Fazenda' },
                { id: 6, image: 'https://i.ibb.co/fFz7LjC/project6.png', title: 'Cartão de Bebê' },
              ],
              education: 'IFC - Campus Araquari',
            };
          },
        };
        </script>
        
<template>
  <div class="portfolio">
    <!-- Seção Sobre -->
    <section class="about-section">
      <h3>Sobre</h3>
      <p>
        Olá, meu nome é Alpa. Além de designer gráfica e empresária, adoro desenhar, o que estimula minha criatividade e me ajuda a relaxar.
        Também gosto de andar de bicicleta, pois me mantém saudável e em forma. Forneço uma variedade de serviços, incluindo design de logotipo
        minimalista, animação, guias de estilo de marca, desenvolvimento web e design de papelaria. Vamos dar as mãos e transformar seu negócio em uma
        marca reconhecível! Contate-me agora!
      </p>
    </section>

    <!-- Portfólio de Projetos -->
    <section class="portfolio-section">
      <h3>Portfólio de projetos</h3>
      <div class="portfolio-gallery">
        <div class="project-card" v-for="project in projects" :key="project.id">
          <img :src="project.image" :alt="project.title" />
        </div>
      </div>
    </section>

    <!-- Formação -->
    <section class="education-section">
      <h3>Formação</h3>
      <div class="education">
        <i class="mdi mdi-school"></i>
        <span>{{ education }}</span>
      </div>
    </section>
  </div>
</template>


<style scoped>
.portfolio {
  max-width: 1000px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.about-section,
.portfolio-section,
.education-section {
  margin-bottom: 2rem;
}

.about-section h3,
.portfolio-section h3,
.education-section h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.about-section p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.portfolio-gallery {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.project-card {
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.education {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
}

.education i {
  margin-right: 8px;
  font-size: 1.5rem;
  color: #333;
}
</style>
