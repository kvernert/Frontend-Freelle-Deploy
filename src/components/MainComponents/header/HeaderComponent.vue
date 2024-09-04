<script setup>
</script>

<template>
    <div class="header">
  <div class="header-container">
      <div class="header-left">
        <img src="https://i.ibb.co/1KNDQpw/Freelee-icon.png" alt="" class="img">
      </div>
      <div class="header-right">
        <button class="btn">Português</button>
        <button class="btn">Entrar</button>
        <button class="btn btn-i">Inscrição</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  width: 100%;
  max-width: 1440px;
  height: 4em;
  margin: 0 auto; 
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
}

.header {
  width: 100%;
  background-color: #006B63;
  margin: 0;
}
.img{
    width: 45px;
}
.header-right {
  display: flex;
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
}

.btn {
  color: white;
  cursor: pointer;
}

.btn-i {
  border: white 1px solid;
  border-radius: .5em;
  width: 5em;
  height: 2.5em; 
  line-height: 2.5em; 
}
</style>
