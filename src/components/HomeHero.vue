<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">
                Barrier-free
            </div>
            <div
                class="display-4 font-weight-black white--text text-xs-center mb-3"
            >
                MAPS
            </div>
            <div class="display-1 font-weight-bold white--text text-xs-center">
                Marking on the map an architectural barrier, a difficulty of passage,
                the lack of accessibility to a shop or a public transport station.
            </div>
            <v-btn fab to="/menu" class="mt-5 brown darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('../assets/background.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
