<template>
    <v-container fill-height fluid>
        <v-layout row>
            <v-flex xs12 class="text-xs-center">
              <h1> Barriers MAPS </h1>
                </v-flex>
        </v-layout>
    </v-container>
</template>

<style>
@import "~leaflet/dist/leaflet.css";
@import "~leaflet.locatecontrol/dist/L.Control.Locate.css";

html, body, #app {
  height: 100%;
  margin: 0;
  background-color: #FFFACD;
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