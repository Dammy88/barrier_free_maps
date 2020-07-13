<template>
    <v-layout row wrap>
                <v-flex xs12>
                  <div v-if="isAdding">
                    <div v-if="!isNoAdded">
                      <div>
                        <table>
                          <thead>
                              <tr>
                                <th scope="col">Marker ID on Firebase</th>
                                <th scope="col">ID</th>
                                <th scope="col">Latitude</th>
                                <th scope="col">Longitude</th>
                                <th scope="col">Tooltip</th>
                                <th scope="col">Is Visible ?</th>
                                <th scope="col">Remove/Add</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr
                                v-for="(item, indexA) in userMarkers"
                                :key="indexA"
                              >
                                <td scope="row" data-label="Marker on Firebase">{{ indexA }}</td>
                                <td data-label="ID">
                                    {{ item.id_m}}
                                </td>
                                <td data-label="Latitude">
                                  {{item.position.lat}}
                                </td>
                                <td data-label="Longitude">
                                  {{item.position.lng}}
                                </td>
                                <td data-label="Tooltip">
                                  {{item.tooltip}}
                                </td>
                                <td data-label="Is Visible ?" style="text-align: center">
                                  <input
                                    v-model="item.visible"
                                    type="checkbox"
                                  >
                                </td>
                                <div v-if="!isRemoved">
                                    <v-btn color="red" dark @click="removeA(indexA, item)"
                                        >REMOVE</v-btn>
                                </div>
                                <div v-else>
                                            <h6>Marker {{item.id_m}} removed! </h6>
                                </div>
                              </tr>

                            <tr
                                v-for="(item, indexB) in markers"
                                :key="indexB"
                              >
                                <td scope="row" data-label="Setting up temporary marking ">{{ 'Setting up temporary marking ' + (indexB + 1) }}</td>
                                <td data-label="ID">
                                  <input class="w3-input w3-animate-input"
                                    v-model.number="item.id_m"
                                    type="number"
                                  >
                                </td>
                                <td data-label="Latitude">
                                  <input class="w3-input w3-animate-input"
                                    v-model.number="item.position.lat"
                                    type="number"
                                  >
                                </td>
                                <td data-label="Longitude">
                                  <input class="w3-input w3-animate-input"
                                    v-model.number="item.position.lng"
                                    type="number"
                                  >
                                </td>
                                <td data-label="Tooltip">
                                  <input class="w3-input w3-animate-input"
                                    v-model="item.tooltip"
                                    type="text"
                                  >
                                </td>
                                <td data-label="Is Visible ?" style="text-align: center">
                                  <input
                                    v-model="item.visible"
                                    type="checkbox"
                                  >
                                </td>
                                        <div v-if="!isAdded">
                                        <v-btn color="green" dark @click="add(item)"
                                            >ADD</v-btn>
                                        </div>
                                        <div v-else>
                                            <h6>Marker {{item.id_m}} added! </h6>
                                        </div>
                              </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div v-else-if="isNoAdded">
                        <v-layout row>
                            <div>
                              <table>
                                <thead>
                                    <tr>
                                      <th scope="col">Marker ID on Firebase</th>
                                      <th scope="col">ID</th>
                                      <th scope="col">Latitude</th>
                                      <th scope="col">Longitude</th>
                                      <th scope="col">Tooltip</th>
                                      <th scope="col">Is Visible ?</th>
                                      <th scope="col">Remove/Add</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                      v-for="(item, indexA) in userMarkers"
                                      :key="indexA"
                                    >
                                      <td scope="row" data-label="Marker on Firebase">{{ indexA }}</td>
                                      <td data-label="ID">
                                          {{ item.id_m}}
                                      </td>
                                      <td data-label="Latitude">
                                        {{item.position.lat}}
                                      </td>
                                      <td data-label="Longitude">
                                        {{item.position.lng}}
                                      </td>
                                      <td data-label="Tooltip">
                                        {{item.tooltip}}
                                      </td>
                                      <td data-label="Is Visible ?" style="text-align: center">
                                        <input
                                          v-model="item.visible"
                                          type="checkbox"
                                        >
                                      </td>
                                      <div v-if="!isRemoved">
                                          <v-btn color="red" dark @click="removeA(indexA, item)"
                                              >REMOVE</v-btn>
                                      </div>
                                      <div v-else>
                                                  <h6>Marker {{item.id_m}} removed! </h6>
                                      </div>
                                    </tr>
                                </tbody>
                              </table>
                            </div>
                      </v-layout>
                    </div>
                  </div>
                  
                  <div v-else-if="!isNoAdded">
                    <p>Describe briefly in the "tooltip" field a clear description of the architectural barrier:</p>
                    <div>
                      <table>
                        <thead>
                            <tr>
                              <th scope="col">Marker ID on Firebase</th>
                              <th scope="col">id_m</th>
                              <th scope="col">Latitude</th>
                              <th scope="col">Longitude</th>
                              <th scope="col">Tooltip</th>
                              <th scope="col">Is Visible ?</th>
                              <th scope="col">Remove/Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                          <tr
                              v-for="(item, indexB) in markers"
                              :key="indexB"
                            >
                              <td scope="row" data-label="Setting up temporary marking ">{{ 'Setting up temporary marking ' + (indexB + 1) }}</td>
                              <td data-label="ID">
                                <input class="w3-input w3-animate-input"
                                  v-model.number="item.id_m"
                                  type="number"
                                >
                              </td>
                              <td data-label="Latitude">
                                <input class="w3-input w3-animate-input"
                                  v-model.number="item.position.lat"
                                  type="number"
                                >
                              </td>
                              <td data-label="Longitude">
                                <input class="w3-input w3-animate-input"
                                  v-model.number="item.position.lng"
                                  type="number"
                                >
                              </td>
                              <td data-label="Tooltip">
                                <input class="w3-input w3-animate-input"
                                  v-model="item.tooltip"
                                  type="text"
                                >
                              </td>
                              <td data-label="Is Visible ?" style="text-align: center">
                                <input
                                  v-model="item.visible"
                                  type="checkbox"
                                >
                              </td>
                                      <div v-if="!isAdded">
                                      <v-btn color="green" dark @click="add(item)"
                                          >ADD</v-btn>
                                      </div>
                                      <div v-else>
                                          <h6>Marker {{item.id_m}} added! </h6>
                                      </div>
                            </tr>
                        </tbody>
                      </table>
                      <v-flex mt-4>
                          <v-btn color="primary" @click="cancel()">Cancel</v-btn>
                      </v-flex>
                    </div>
                  </div>
                </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'UserMarkersTable',
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
        isAdded(){
            return this.$store.getters.isAdded;
        },
        isNoAdded(){
            return this.$store.getters.isNoAdded;
        },
        isAdding(){
            return this.$store.getters.isAdding;
        },
        isRemoved(){
            return this.$store.getters.isRemoved;
        }
    },
    mounted() {
        this.getMarkers();
        this.getIdCount();
    },
    methods: {
        cancel(){
            this.$store.state.adding = true;
            this.$store.state.noAdded = true;
            this.$store.state.added = false;
            alert('Operation aborted!');
        },
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
        },
        add(item) {
                if (this.isAuthenticated) {
                    this.$store.dispatch('addMarker', item);
                    this.$store.dispatch('incIdCount');
                    this.$store.state.added = true;
                    this.$store.state.adding = true;
                    this.$store.state.noAdded = false;
                    alert('Marker ID '+ item.id_m +' added!');
                } else {
                    this.$router.push('/sign-in');
                }
        },
        removeA(indexA, item) {
            if (this.isAuthenticated) {
                    this.$store.dispatch('deleteMarker', indexA, item);
                    this.userMarkers.splice(indexA, 1);
                    this.$store.state.removed = true;
                    alert('Marker ID '+ item.id_m +' delete!');
                } else {
                    this.$router.push('/sign-in');
                }
        },
        removeB(indexB, item) {
            if (this.isAuthenticated) {
                    this.$store.dispatch('deleteMarker', indexB, item);
                    this.markers.splice(indexB, 1);
                    this.$store.state.removed = true;
                    alert('Marker ID '+ item.id_m +' delete!');
                } else {
                    this.$router.push('/sign-in');
                }
        }
    }
}
</script>

<style>
    
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
</style>