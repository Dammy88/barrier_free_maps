<template>
        <div v-if="isAuthenticated" class="hidden-sm-and-down">
           <v-layout row wrap>
                <v-flex xs12>
                  <div>
                    <table>  
                    <thead>
                          <tr>
                            <th scope="col">Marker</th>
                            <th scope="col">ID</th>
                            <th scope="col">Latitude</th>
                            <th scope="col">Longitude</th>
                            <th scope="col">Tooltip</th>
                            <th>Is Visible ?</th>
                          </tr>
                    </thead>
                    <tbody>
                          <tr
                            v-for="(item, indexA) in globalMarkers"
                            :key="indexA"
                          >
                            <td scope="row" data-label="Marker on Firebase">{{ indexA }}</td>
                            <td data-label="ID">
                               {{item.id_m}}
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
                          </tr>


                    </tbody>
                  </table>
                  </div>
                </v-flex>
           </v-layout>
        </div>
</template>

<script>
export default {
    name: 'GlobalMarkersTable',
    computed: {
        globalMarkers() {
            return this.$store.state.globalMarkers;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    mounted() {
        this.getGlobalMarkers();
    },
    methods: {
      getGlobalMarkers() {
          while(this.$store.state.iss < this.$store.state.idCount){
            this.$store.dispatch('getGlobalMarkers');
            this.$store.state.iss++;
          }
          this.$store.state.iss = 1;
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