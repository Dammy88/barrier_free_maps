<template>
    <v-layout row wrap>
                <v-flex xs12>
                  <div v-if="isAdding" class="hidden-sm-and-down">
                    <div v-if="!isNoAdded" class="hidden-sm-and-down">
                      <div class="table-wrapper">
                        <table class="fl-table">
                          <thead>
                              <tr>
                                <th>Marker ID on Firebase</th>
                                <th>ID</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Tooltip</th>
                                <th>Is Visible ?</th>
                                <th>Remove/Add</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr
                                v-for="(item, indexA) in userMarkers"
                                :key="indexA"
                              >
                                <td>{{ indexA }}</td>
                                <td>
                                    {{ item.id_m}}
                                </td>
                                <td>
                                  {{item.position.lat}}
                                </td>
                                <td>
                                  {{item.position.lng}}
                                </td>
                                <td>
                                  {{item.tooltip}}
                                </td>
                                <td style="text-align: center">
                                  <input
                                    v-model="item.visible"
                                    type="checkbox"
                                  >
                                </td>
                                <div v-if="!isRemoved" class="hidden-sm-and-down">
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
                                <td>{{ 'Setting up temporary marking ' + (indexB + 1) }}</td>
                                <td>
                                  <input class="w3-input w3-animate-input"
                                    v-model.number="item.id_m"
                                    type="number"
                                  >
                                </td>
                                <td>
                                  <input class="w3-input w3-animate-input"
                                    v-model.number="item.position.lat"
                                    type="number"
                                  >
                                </td>
                                <td>
                                  <input class="w3-input w3-animate-input"
                                    v-model.number="item.position.lng"
                                    type="number"
                                  >
                                </td>
                                <td>
                                  <input class="w3-input w3-animate-input"
                                    v-model="item.tooltip"
                                    type="text"
                                  >
                                </td>
                                <td style="text-align: center">
                                  <input
                                    v-model="item.visible"
                                    type="checkbox"
                                  >
                                </td>
                                        <div v-if="!isAdded" class="hidden-sm-and-down">
                                        <v-btn color="green" dark @click="add(item)"
                                            >ADD</v-btn>
                                        </div>
                                        <div v-else class="hidden-sm-and-down">
                                            <h6>Marker {{item.id_m}} added! </h6>
                                        </div>
                              </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div v-else-if="isNoAdded" class="hidden-sm-and-down">
                        <v-layout row>
                            <div class="table-wrapper">
                              <table class="fl-table">
                                <thead>
                                    <tr>
                                      <th>Marker ID on Firebase</th>
                                      <th>ID</th>
                                      <th>Latitude</th>
                                      <th>Longitude</th>
                                      <th>Tooltip</th>
                                      <th>Is Visible ?</th>
                                      <th>Remove/Add</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                      v-for="(item, indexA) in userMarkers"
                                      :key="indexA"
                                    >
                                      <td>{{ indexA }}</td>
                                      <td>
                                          {{ item.id_m}}
                                      </td>
                                      <td>
                                        {{item.position.lat}}
                                      </td>
                                      <td>
                                        {{item.position.lng}}
                                      </td>
                                      <td>
                                        {{item.tooltip}}
                                      </td>
                                      <td style="text-align: center">
                                        <input
                                          v-model="item.visible"
                                          type="checkbox"
                                        >
                                      </td>
                                      <div v-if="!isRemoved" class="hidden-sm-and-down">
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
                  
                  <div v-else-if="!isNoAdded" class="hidden-sm-and-down">
                    <p>Describe briefly in the "tooltip" field a clear description of the architectural barrier:</p>
                    <div class="table-wrapper">
                      <table class="fl-table">
                        <thead>
                            <tr>
                              <th>Marker ID on Firebase</th>
                              <th>id_m</th>
                              <th>Latitude</th>
                              <th>Longitude</th>
                              <th>Tooltip</th>
                              <th>Is Visible ?</th>
                              <th>Remove/Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                          <tr
                              v-for="(item, indexB) in markers"
                              :key="indexB"
                            >
                              <td>{{ 'Setting up temporary marking ' + (indexB + 1) }}</td>
                              <td>
                                <input class="w3-input w3-animate-input"
                                  v-model.number="item.id_m"
                                  type="number"
                                >
                              </td>
                              <td>
                                <input class="w3-input w3-animate-input"
                                  v-model.number="item.position.lat"
                                  type="number"
                                >
                              </td>
                              <td>
                                <input class="w3-input w3-animate-input"
                                  v-model.number="item.position.lng"
                                  type="number"
                                >
                              </td>
                              <td>
                                <input class="w3-input w3-animate-input"
                                  v-model="item.tooltip"
                                  type="text"
                                >
                              </td>
                              <td style="text-align: center">
                                <input
                                  v-model="item.visible"
                                  type="checkbox"
                                >
                              </td>
                                      <div v-if="!isAdded" class="hidden-sm-and-down">
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
    
*{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
body{
    font-family: Helvetica;
    -webkit-font-smoothing: antialiased;
    /*background: rgba( 71, 147, 227, 1);*/
}
h2{
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    padding: 30px 0;
}

/* Table Styles */

.table-wrapper{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.fl-table thead th {
    color: #ffffff;
    background: #4FC3A1;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #324960;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}
</style>