<template>
    <v-container grid-list-lg>
        <v-layout row>
          <div v-if="isAuthenticated" class="hidden-sm-and-down">
            <v-flex xs12 class="text-xs-center display-1 font-weight-black">
                <p>To add or remove an architectural barrier marker, please visit your profile.</p></v-flex>          >
          </div>
          <div v-else>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
                <p>To view the map with the markings, please login or register.</p></v-flex>
          </div>
        </v-layout>
        <global-markers-map></global-markers-map>
        <global-markers-table></global-markers-table>
    </v-container>
</template>

<script>
import GlobalMarkersMap from '@/components/GlobalMarkersMap.vue';
import GlobalMarkersTable from '@/components/GlobalMarkersTable.vue';

export default {
    name: 'GlobalMarkers',
    components:
    {
        "global-markers-map": GlobalMarkersMap,
        "global-markers-table": GlobalMarkersTable
    },
    computed: {
    isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    }
}
</script>

<style>
p {
    font-family: 'Merienda One', cursive;
}
</style>