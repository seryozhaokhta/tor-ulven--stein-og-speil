<!-- src/components/BackgroundSection.vue -->

<template>
    <div class="background-container">
        <img src="@/assets/stein.png" alt="Stein" class="background-image stein">
        <img src="@/assets/speil.png" alt="Speil" class="background-image speil">
    </div>
</template>

<script>
export default {
    name: 'BackgroundSection'
}
</script>

<style scoped>
.background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.background-image {
    position: absolute;
    width: 80%;
    height: auto;
    object-fit: cover;
}

.stein {
    left: -25%;
}

.speil {
    right: -5%;
}
</style>
