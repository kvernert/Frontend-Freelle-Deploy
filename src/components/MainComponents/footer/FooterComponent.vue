<script setup>

</script>

<template>
    <div class="container-footer">
        <div class="container-top">
            <div>
            <h3 class="title">Freelle</h3>
            </div>
            <div class="social">
                
            </div>
        </div>
        <div class="row"></div>
        <div class="container-bottom">
            <p>© 2024 FREELLE ©Copyright 2024 FREELLE.</p>
        </div>
    </div>
</template>

<style scoped>
.container-footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-family: "Inter", sans-serif;
}
.container-top{
    position: relative;
    width: 75%;
    left: 50%;
    transform: translateX(-50%);
}
.title{
    font-weight: bold;
    font-size: 26px;
}
.row {
    position: relative;
    margin: 20px 0; 
}
.row::before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 75%; 
    height: 2px; 
    background-color: black;
    transform: translateX(-50%); 
}
.container-bottom {
    text-align: center; 
    padding: 10px 0; 
}
</style>