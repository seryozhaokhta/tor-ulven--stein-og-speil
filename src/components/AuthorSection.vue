<!-- src/components/AuthorSection.vue -->

<template>
    <v-container>
        <v-row>
            <v-col class="text-left">
                <img src="@/assets/tor-ulven/tor-ulven.jpeg" alt="Tor Ulven" class="author-image">
                <h1>{{ authorInfo.title }}</h1>
                <h2>{{ authorInfo.subtitle }}</h2>
                <p>{{ authorInfo.body }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'AuthorSection',
    computed: {
        authorInfo() {
            return {
                title: this.$t('authorInfo.title'),
                subtitle: this.$t('authorInfo.subtitle'),
                body: this.$t('authorInfo.body')
            };
        }
    }
}
</script>

<style scoped>
.v-container {
    padding: 2rem;
    background: var(--background);
    color: var(--text-color);
    display: flex;
    justify-content: left;
    align-items: left;
}

.author-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 20px;
}

h1,
h2,
p {
    margin: 10px 0;
    width: 100%;
    text-align: left;
}

@media (min-width: 600px) {
    .author-image {
        max-width: 300px;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1.2rem;
    }
}

@media (min-width: 960px) {
    .author-image {
        max-width: 400px;
    }
}
</style>
