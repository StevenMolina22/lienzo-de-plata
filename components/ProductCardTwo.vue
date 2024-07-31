<script setup>
const image = "https://static.zara.net/assets/public/0f63/5787/1f9848a1b61c/fc591acf3c81/03046942712-e1/03046942712-e1.jpg?ts=1721112642572&w=823"
</script>

<template>
    <div class="card">
        <img :src="image" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Nombre Producto</h5>
            <a href="#" class="btn">Comprar</a>
        </div>
    </div>
</template>

<style>
.card {
   width: 18rem;
   border-radius: 0;
}
.card-img-top {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;

}
.card-title {
    font-size: large;
    font-weight: 500;
}
.card-text {
    font-size: medium;
    font-weight: normal;
}
.btn {
    background-color: var(--thm-primary);
    color: white;
    border-radius: 0;
}
.btn:hover {
    background-color: #222222;
    color: white;
}

</style>