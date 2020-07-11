<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center">
                <h1>My Markers</h1>
            </v-flex>
        </v-layout>
        <v-layout row>
            <div>
                <user-markers-map></user-markers-map>
                <user-markers-table></user-markers-table>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
import UserMarkersMap from '@/components/UserMarkersMap';
import UserMarkersTable from '@/components/UserMarkersTable';

export default {
    name: 'Profile',
    components: {
        "user-markers-map": UserMarkersMap,
        "user-markers-table": UserMarkersTable
    }
    
}
</script>
<style>
p {
    font-family: 'Merienda One', cursive;
}
h1 {
  font-size: 48px;
  padding-bottom: 10px; 
  font-family: 'Indie Flower', cursive;
}

.v-locatecontrol {
  min-height: 100% !important;
}
</style>