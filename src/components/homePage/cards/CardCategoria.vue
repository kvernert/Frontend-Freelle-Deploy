<script>
</script>

<template>
    <div class="container-card">
        <div class="icon">                
            <i class="mdi mdi-monitor"></i>
        </div>
        <div class="title">
            Programação e Tecnologia
        </div>
    </div>
</template>

<style scoped>
.container-card {
  width: 150px; 
  padding: 1em;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.1); 
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease-in-out;
}

.container-card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15); 
}

.icon i {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.title {
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  word-wrap: break-word; 
  overflow-wrap: break-word; 
  max-height: 3.5em; 
  overflow: hidden; 
}
</style>
