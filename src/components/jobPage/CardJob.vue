<template>
    <div class="container-rectangle">
        <div class="box-img">
            <img src="https://via.placeholder.com/180" alt="Imagem do item">
        </div>
        <div class="info">
            <h3 class="title">Descubra o Sabor da Nossa Cozinha</h3>
            <p class="category">JUNE 25 / 1 AGOS  |  CULINÁRIA</p>
            <p class="description">Você é apaixonado por gastronomia e tem habilidades que podem brilhar na nossa cozinha? O Taberna do Chef, conhecido por seus pratos deliciosos e ambiente acolhedor, está em busca de freelancers talentosos para se juntar à nossa equipe!</p>
            <div class="action">
                <button class="accept">Aceitar</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-rectangle {
    width: 100%;
    max-width: 1000px; 
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border: 1px solid #ccc;
    border-radius: 14px;
    padding: 32px;
    background-color: #f9f9f9;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    height: auto;
}

.box-img {
    width: 280px;
    margin-right: 28px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 14px;
    background-color: #e0e0e0;
    flex-shrink: 0; 
    height: 100%;
}

.box-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 240px; 
}

.info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title {
    font-size: 28px;
    font-weight: bold;
    margin: 0 0 14px;
}

.category {
    font-size: 16px;
    color: #666;
    margin: 0 0 14px;
}

.description {
    font-size: 16px;
    color: #333;
    margin: 0 0 24px;
}

.action {
    display: flex;
    width: 100%;
}

.accept {
    background-color: #f9f9f9;
    color: #006B63;
    padding: 12px 40px;
    font-size: 16px;
    border: 1px solid #006B63;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.accept:hover {
    background-color: #006B63;
    color: #f9f9f9;
    box-shadow: 0 4px 10px rgba(0, 107, 99, 0.3);
    transform: translateY(-2px);
}
</style>
