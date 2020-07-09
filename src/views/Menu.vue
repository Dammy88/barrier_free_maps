<template>
    <v-container fill-height fluid>
        <v-layout align-center justify-center>
            <div>
                <home-head></home-head>
                <global-markers></global-markers>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
import HomeHead from '@/components/HomeHead';
import GlobalMarkers from '@/components/GlobalMarkers';

export default {
    name: 'Menu',
    components: {
        "home-head": HomeHead,
        "global-markers": GlobalMarkers
    }
};
</script>

<style scoped></style>
