<template>
    <v-layout row wrap class="meal-plans">
            <v-flex xs12>
                <v-card>
                  <div v-if="isAdding" class="hidden-sm-and-down">
                  <v-layout row>
                    <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
                      <p>To add an architectural barrier marker, click on the map!
                      Use geolocation and geosearch services.</p>
                      </v-flex>
                  </v-layout>
                    <l-map @click="addMarker"
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
                                v-for="marker in userMarkers"
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
                  </div>
                  <div v-else class="hidden-sm-and-down">
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
                                v-for="marker in userMarkers"
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
                                :draggable="false"
                                :lat-lng.sync="marker.position"
                                :icon="marker.icon"
                                @click="alert(marker)"
                            >
                                <l-popup :content="marker.tooltip" />
                                <l-tooltip :content="marker.tooltip" />
                            </l-marker>
                          </l-map>
                     </div>               
                </v-card>
            </v-flex>
        </v-layout>
</template>

<script>
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
export default {
    name: 'UserMarkersMap',
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
        idCount(){
          return this.$store.state.idCount;
        },
        userMarkers() {
            return this.$store.state.userMarkers;
        },
        markers() {
            return this.$store.state.markers;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        },
        isAdding(){
            return this.$store.getters.isAdding;
        }
    },
    mounted() {
        this.getMarkers();
        this.getIdCount();
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
      getMarkers() {
            this.$store.dispatch('getUserMarkers');
        },
    alert(item) {
      alert('this is ' + JSON.stringify(item));
    },
    getIdCount() {
            this.$store.dispatch('getIdCount');
        },
    addMarker: function(event) {
        if (this.isAuthenticated) {
          const newMarker = {
            id_m: this.$store.state.idCount,
            draggable: false,
            position: { lat: event.latlng.lat, lng: event.latlng.lng },
            visible: true,
          };
          this.$store.state.adding = false;
          this.$store.state.added = false;
          this.$store.state.noAdded = false;
          this.markers.push(newMarker);
          this.userMarkers.push(newMarker);
          this.$router.push('/menu');
        } else {
            this.$router.push('/sign-in');
        }
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