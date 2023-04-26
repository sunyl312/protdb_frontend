<template>
  <v-sheet>
    <bread-crumb></bread-crumb>
    <v-sheet>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="11">
          <v-sheet>
            <v-row>
              <v-col cols="3">
                <v-sheet class="pa-3 font-weight-bold  text-center" color="grey lighten-3" outlined rounded>
                  Knowledge Graph
                  <v-sheet class="pa-3 mt-3" rounded>
                    <v-select  :items="typeSelection" v-model="filterType" class="ma-2" dense hide-details label="Select center node type" outlined></v-select>
                    <v-autocomplete  :items="subItems" class="ma-2" clearable dense hide-details label="Select center node" v-model="filterValue"
                                    outlined></v-autocomplete>
                    <v-sheet class="d-flex flex-row justify-end">
                      <v-btn :color="$store.state.mainColor" class="ma-2" dark small style="text-transform: none">
                        Apply
                      </v-btn>
                      <v-btn :color="$store.state.mainColor" class="ma-2" dark small style="text-transform: none">
                        Reset
                      </v-btn>
                    </v-sheet>
                  </v-sheet>
                </v-sheet>
              </v-col>
              <v-col cols="9">
                <v-sheet class="pa-3" height="850" outlined rounded>
                  <visualize-network :selected-type="filterType" :selected-value="filterValue"></visualize-network>
                </v-sheet>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<script>
import BreadCrumb from "@/components/breadCrumb";
import VisualizeNetwork from "@/components/visualizeNetwork";
import Axios from 'axios';

export default {
  name: "knowledgeNetwork",
  components: {VisualizeNetwork, BreadCrumb},
  data() {
    return {
      typeSelection:['protein','disease','trait','tissue'],
      filterValue: "prostate cancer",
      filterType: "cancer",
      itemsForSelection: {},
      isLoading: false,
    }
  },
  mounted() {
    this.loadData();
  },
  computed:{
    subItems(){
      switch (this.filterType) {
        case "disease":
          return this.itemsForSelection && this.itemsForSelection.disease;
        case "trait":
          return this.itemsForSelection && this.itemsForSelection.trait;
        case "protein":
          return this.itemsForSelection && this.itemsForSelection.protein;
        case "tissue":
          return this.itemsForSelection && this.itemsForSelection.tissue;
      }
    }
  },
  methods: {
    loadData() {
      this.isLoading = true;
      Axios.post(
          baseURL + "/api/get_network_for_selection"
      ).then(
          res => {
            this.isLoading = false;
            this.itemsForSelection = JSON.parse(res.data)
          }
      ).catch(
          err => {
            this.isLoading = false;

          }
      )
    }
  }

}
</script>

<style scoped>

</style>