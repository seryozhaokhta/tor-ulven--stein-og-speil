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
    mix-blend-mode: difference;
}

.speil {
    right: -5%;
}

/* Адаптивные стили для мобильных устройств */
@media (max-width: 480px) {
    .background-image {
        width: 100%;
        /* Увеличиваем на мобильных устройствах */
    }

    .stein {
        left: 0;
        /* Центрируем на мобильных устройствах */
    }

    .speil {
        right: 0;
        /* Центрируем на мобильных устройствах */
    }
}

/* Адаптивные стили для планшетов */
@media (min-width: 481px) and (max-width: 768px) {
    .background-image {
        width: 90%;
        /* Слегка уменьшаем размер */
    }

    .stein {
        left: -15%;
        /* Менее агрессивное смещение */
    }

    .speil {
        right: -10%;
    }
}

/* Адаптивные стили для больших устройств и десктопов */
@media (min-width: 769px) {
    .background-image {
        width: 80%;
        /* Возвращаем к исходному размеру */
    }

    .stein {
        left: -25%;
        /* Возвращаем к исходной позиции */
    }

    .speil {
        right: -5%;
    }
}
</style>

