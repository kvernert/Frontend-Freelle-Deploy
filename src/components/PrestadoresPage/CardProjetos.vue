<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, image: 'project1.png', title: 'Project 1' },
        { id: 2, image: 'project2.png', title: 'Project 2' },
        { id: 3, image: 'project3.png', title: 'Project 3' },
        { id: 4, image: 'project4.png', title: 'Project 4' },
        { id: 5, image: 'project5.png', title: 'Project 5' },
        { id: 6, image: 'project6.png', title: 'Project 6' },
      ],
      education: 'IFC - Campus Araquari',
      totalReviews: '14.0k',
      ratings: [
        { stars: 5, count: '12,508', percentage: 90 },
        { stars: 4, count: '1,492', percentage: 10 },
        { stars: 3, count: 0, percentage: 0 },
        { stars: 2, count: 0, percentage: 0 },
        { stars: 1, count: 0, percentage: 0 },
      ],
    };
  },
};
</script>

<template>
    <div class="portfolio">
      <section class="portfolio-section">
        <h2>Portfólio de projetos anteriores</h2>
        <div class="portfolio-gallery">
          <div class="project-card" v-for="project in projects" :key="project.id">
            <img :src="project.image" :alt="project.title" />
          </div>
        </div>
      </section>
  
      <section class="education-section">
        <h3>Formação</h3>
        <div class="education">
          <i class="fas fa-graduation-cap"></i>
          <span>{{ education }}</span>
        </div>
      </section>
  
      <section class="reviews-section">
        <h3>Avaliações</h3>
        <p>{{ totalReviews }} avaliações</p>
        <div class="review-list">
          <div class="review-item" v-for="rating in ratings" :key="rating.stars">
            <span>{{ rating.stars }} estrelas</span>
            <div class="review-bar">
              <div class="review-fill" :style="{ width: `${rating.percentage}%` }"></div>
            </div>
            <span>{{ rating.count }}</span>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  .portfolio {
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  
  .portfolio-section,
  .education-section,
  .reviews-section {
    margin-bottom: 2rem;
  }
  
  .portfolio-gallery {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .project-card {
    width: calc(33.333% - 10px);
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .project-card img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .education {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
  
  .education i {
    margin-right: 8px;
    font-size: 1.5rem;
    color: #333;
  }
  
  .reviews-section h3 {
    margin-bottom: 0.5rem;
  }
  
  .review-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .review-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .review-bar {
    background-color: #ddd;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    height: 8px;
  }
  
  .review-fill {
    background-color: #333;
    height: 100%;
  }
  </style>
  