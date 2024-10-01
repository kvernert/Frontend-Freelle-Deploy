<template>
    <div class="box-title">
        <h1>Design Gráfico</h1>
    </div>
    <div class="container">
    </div>
</template>

<style scoped>
    .box-title {
        padding: 5em 0;
        margin: 0 auto; 
    }

    .container {
        max-width: 100%;
        height: 40vh;
        margin: 0 auto;
        background-color: #006B63;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        .box-title {
            text-align: center;
            padding: 3em 0; 
        }

        .container {
            height: 30vh; 
        }
    }

    @media (max-width: 480px) {
        .box-title {
            text-align: center;
            padding: 2em 0; 
            font-size: 1.5em; 
        }

        .container {
            height: 25vh; 
            border-radius: 6px;
        }
    }
</style>
