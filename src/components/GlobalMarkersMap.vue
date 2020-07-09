<template>
    <v-layout row wrap class="meal-plans">
            <v-flex xs12>
                <v-card>
                        <l-map 
                            :zoom.sync="zoom"
                            :options="mapOptions"
                            :center="center"
                            :bounds="bounds"
                            :min-zoom="minZoom"
                            :max-zoom="maxZoom"
                            style="height: 500px; width: 100%"
                            >
                            <l-control-layers
                                :position="layersPosition"
                                :collapsed="false"
                                :sort-layers="true"
                            />
                            <v-locatecontrol
                                :position="layersPosition"
                                :collapsed="false"
                                :sort-layers="true"
                            />
                            <l-tile-layer
                                v-for="tileProvider in tileProviders"
                                :key="tileProvider.name"
                                :name="tileProvider.name"
                                :visible="tileProvider.visible"
                                :url="tileProvider.url"
                                :attribution="tileProvider.attribution"
                                :token="token"
                                layer-type="base"
                            />
                            <l-control-zoom :position="zoomPosition" />
                            <l-control-attribution
                                :position="attributionPosition"
                                :prefix="attributionPrefix"
                            />
                            <l-control-scale :imperial="imperial" />
                            <v-geosearch :options="geosearchOptions" ></v-geosearch>
                            <l-marker
                                v-for="marker in globalMarkers"
                                :key="marker.id"
                                :visible="marker.visible"
                                :draggable="false"
                                :lat-lng.sync="marker.position"
                                :icon="marker.icon"
                                @click="alert(marker)"
                            >
                                <l-popup :content="marker.tooltip" />
                                <l-tooltip :content="marker.tooltip" />
                            </l-marker>
                            <l-marker
                                v-for="marker in markers"
                                :key="marker.id"
                                :visible="marker.visible"
                                :draggable="marker.draggable"
                                :lat-lng.sync="marker.position"
                                :icon="marker.icon"
                                @click="alert(marker)"
                            >
                                <l-popup :content="marker.tooltip" />
                                <l-tooltip :content="marker.tooltip" />
                            </l-marker>
                        </l-map>               
                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
/* Includiamo i moduli necessari per la manipolazione della mappa e dei makers */
import Vue2LeafletLocatecontrol from '@/components/Vue2LeafletLocatecontrol';

import { OpenStreetMapProvider } from 'leaflet-geosearch';
import VGeosearch from 'vue2-leaflet-geosearch';

import { latLngBounds } from 'leaflet';
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolyline,
  LLayerGroup,
  LTooltip,
  LPopup,
  LControlZoom,
  LControlAttribution,
  LControlScale,
  LControlLayers
} from 'vue2-leaflet';

/* definizioni di costanti */

const tileProviders = [
  {
    name: 'OpenStreetMap',
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: 'OpenTopoMap',
    visible: false,
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  },
];

/* INSTANZE */
export default {
    name: 'GlobalMarkersMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LLayerGroup,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    VGeosearch,
    LControlLayers,
    "v-locatecontrol": Vue2LeafletLocatecontrol
  },
    computed: {
        globalMarkers() {
            return this.$store.state.globalMarkers;
        }
    },
    mounted() {
        this.getGlobalMarkers();
    },
  data() {
    return {
      center: [51.505, -0.09],
      geosearchOptions: { // Important part Here
        provider: new OpenStreetMapProvider(),
      },
      opacity: 0.6,
      token: 'your token if using mapbox',
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true,
      },
      zoom: 3,
      minZoom: 1,
      maxZoom: 20,
      zoomPosition: 'topleft',
      attributionPosition: 'bottomright',
      layersPosition: 'topright',
      attributionPrefix: 'Vue2Leaflet',
      imperial: false,
      Positions: ['topleft', 'topright', 'bottomleft', 'bottomright'],
      tileProviders: tileProviders
    };
  },
  methods: {
      getGlobalMarkers() {
          while(this.$store.state.iss < this.$store.state.idCount){
            this.$store.dispatch('getGlobalMarkers');
            this.$store.state.iss++;
          }
          this.$store.state.iss = 1;
        },
        alert(item) {
            alert('this is : "' + JSON.stringify(item.tooltip) +'".');
        }
  }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";
@import "~leaflet.locatecontrol/dist/L.Control.Locate.css";

html, body, #app {
  height: 100%;
  margin: 0;
}
.v-locatecontrol {
  min-height: 100% !important;
}
</style>