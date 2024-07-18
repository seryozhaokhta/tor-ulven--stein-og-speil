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
    opacity: 0;
    animation: slideDown 2s ease-in-out forwards;
}

.stein {
    left: -25%;
    mix-blend-mode: difference;
    animation-delay: 1.5s;
}

.speil {
    right: -5%;
    animation-delay: 1s;
}

@keyframes slideDown {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Адаптивные стили для мобильных устройств */
@media (max-width: 480px) {
    .background-image {
        width: 100%;
        animation: slideDownMobile 2s ease-in-out forwards;
    }

    .stein {
        left: 0;
        animation-delay: 1.5s;
    }

    .speil {
        right: 0;
        top: 55%;
        animation-delay: 1s;
    }
}

@keyframes slideDownMobile {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Адаптивные стили для планшетов */
@media (min-width: 481px) and (max-width: 768px) {
    .background-image {
        width: 50%;
    }

    .stein {
        left: 15%;
    }

    .speil {
        right: 10%;
    }
}

/* Адаптивные стили для больших устройств и десктопов */
@media (min-width: 769px) {
    .background-image {
        width: 80%;
    }

    .stein {
        left: -25%;
    }

    .speil {
        right: -5%;
    }
}
</style>
