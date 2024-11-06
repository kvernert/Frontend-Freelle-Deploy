<script setup>
</script>

<template>
    <div class="header">
        <div class="header-container">
            <div class="header-left">
              <router-link to="/" class="btn"><img src="https://i.ibb.co/1KNDQpw/Freelee-icon.png" alt="" class="img"></router-link>
            </div>
            <div class="header-right">
                <button class="btn">Português</button>
                <router-link to="/login" class="btn">Entrar</router-link>
                <router-link to="/" class="btn btn-i">Inscrição</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-container {
  width: 100%;
  max-width: 1460px;
  height: 4em;
  margin: 0 auto; 
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
}
.header-left{
  display: flex;
}
.header {
  width: 100%;
  background-color: #006B63;
  margin: 0;
}

.img {
  width: 63px;
  height: 60px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 4.5em;
}

button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  outline: none;
  box-shadow: none;
  appearance: none;
  cursor: pointer;
  color: white;
}
.btn{
    text-decoration: none;
  color: white;
}
.btn-i {
  border: white 1.5px solid;
  border-radius: 0.5em;
  width: 7em;
  height: 2.5em;
  padding: 0 1.5em;
  line-height: 2.5em;
  text-align: center;
}
</style>
