<template>
  <v-sheet class="mx-4">
    <bread-crumb :breadcrumb-data="breadcrumbData"></bread-crumb>
    <v-sheet min-height="40">
      <v-btn v-show="!expandFilter" :color="$store.state.mainColor" dark elevation="0" small
             style="text-transform: none"
             @click="expandFilter=!expandFilter">Filters
        <v-icon v-show="!expandFilter" small>mdi-chevron-double-down</v-icon>
        <v-icon v-show="expandFilter" small>mdi-chevron-double-up</v-icon>
      </v-btn>
      <v-btn v-show="expandFilter" :color="$store.state.mainColor" dark elevation="0" small style="text-transform: none"
             @click="expandFilter=!expandFilter">Filters
        <v-icon v-show="!expandFilter" small>mdi-chevron-double-down</v-icon>
        <v-icon v-show="expandFilter" small>mdi-chevron-double-up</v-icon>
      </v-btn>
    </v-sheet>
    <v-row>


      <v-col v-show="expandFilter" cols="3">
        <v-sheet>

          <v-sheet v-show="expandFilter" min-height="400" outlined rounded>

            asdf
          </v-sheet>
        </v-sheet>
      </v-col>

      <v-col :cols="expandFilter? 9:12">
        <!-- 右侧panel,以tabs形式展现 Protein,Study,Trait,Publication-->
        <v-sheet class="px-4 py-2" height="800" outlined rounded>
          <v-tabs :color="$store.state.mainColor" centered>
            <v-tab style="text-transform: none;">
              <v-icon>mdi-clover</v-icon>
              Protein
            </v-tab>
            <v-tab style="text-transform: none;">
              <v-icon>mdi-star-four-points</v-icon>
              Trait
            </v-tab>
            <v-tab style="text-transform: none;">
              <v-icon>mdi-opacity</v-icon>
              Study
            </v-tab>
            <v-tab style="text-transform: none;">
              <v-icon>mdi-book</v-icon>
              Publication
            </v-tab>
          </v-tabs>
        </v-sheet>


      </v-col>

    </v-row>
  </v-sheet>
</template>

<script>
import Axios from 'axios';
import BreadCrumb from "@/components/breadCrumb";
// import FilterPanel from "@/components/filterPanel";
export default {
  name: "browseProtein",
  components: {BreadCrumb},
  data() {
    return {
      expandFilter: true,
      breadcrumbData: [
        {
          text: "protdb",
          disabled: false,
          href: baseURL + '/'
        },
        {
          text: "browse",
          disabled: true,
        },
      ],
      tableData: {
        protein: [],
        study: [],
        trait: [],
        publication: []
      },
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      Axios.post(
          baseURL + "/api/browse_protein",
          {},
          {
            params: {
              page_number: 1,
              page_size: 10,
            }
          }
      ).then(res => {
        this.tableData.protein = JSON.parse(res.data);
      });
      Axios.post(
          baseURL + "/api/browse_trait",
          {},
          {
            params: {
              page_number: 1,
              page_size: 10,
            }
          }
      ).then(res => {
        this.tableData.trait = JSON.parse(res.data);
      });

      Axios.post(
          baseURL + "/api/browse_study",
          {},
          {
            params: {
              page_number: 1,
              page_size: 10,
            }
          }
      ).then(res => {
        this.tableData.study = JSON.parse(res.data);
      });

      Axios.post(
          baseURL + "/api/browse_publication",
          {},
          {
            params: {
              page_number: 1,
              page_size: 10,
            }
          }
      ).then(res => {
        this.tableData.publication = JSON.parse(res.data);
      });

    }
  }
}
</script>

<style scoped>

</style>