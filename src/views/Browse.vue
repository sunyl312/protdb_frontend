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

          <v-sheet v-show="expandFilter" color="grey lighten-4" outlined rounded>

            <v-sheet class="pa-3" color="grey lighten-4">
              <v-row class="mb-4" dense>
                <v-spacer></v-spacer>
                <v-col class="text-right mr-6" cols="10">
                  <v-btn
                      :color="$store.state.mainColor"
                      :loading="filterItems.isLoading"
                      class="mr-1"
                      dark
                      elevation="0"
                      small
                      style="text-transform: none"
                      @click="apply_filters"
                  >Apply
                  </v-btn>
                  <v-btn
                      :color="$store.state.mainColor"
                      dark
                      elevation="0"
                      small
                      style="text-transform: none"
                      @click="reset_filters"
                  >Reset
                  </v-btn>

                </v-col>
              </v-row>
              <v-sheet class="overflow-y-auto" color="grey lighten-4" max-height="800">
                <v-expansion-panels

                    v-model="filterItems.filterOpen"
                    multiple
                >

                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Protein
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!--Protein_names-->
                      <v-autocomplete
                          v-model="filterItems.values.Protein_names"
                          :items="filterItems.items.Protein_names && filterItems.items.Protein_names || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Protein Name"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--std_Uniprot_ID-->
                      <v-autocomplete
                          v-model="filterItems.values.std_Uniprot_ID"
                          :items="filterItems.items.std_Uniprot_ID && filterItems.items.std_Uniprot_ID || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="UniProt ID"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Gene
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!--std_Gene_Symbol-->
                      <v-autocomplete
                          v-model="filterItems.values.std_Gene_Symbol"
                          :items="filterItems.items.std_Gene_Symbol && filterItems.items.std_Gene_Symbol || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Gene Symbol"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--std_Ensembl_ID-->
                      <v-autocomplete
                          v-model="filterItems.values.std_Ensembl_ID"
                          :items="filterItems.items.std_Ensembl_ID && filterItems.items.std_Ensembl_ID || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Ensembl Gene ID"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Biomarker
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!--Biomarker Category-->
                      <v-autocomplete
                          v-model="filterItems.values.Prediction_type"
                          :items="filterItems.items.Prediction_type && filterItems.items.Prediction_type || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Biomarker Category"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Quality-->
                      <v-autocomplete
                          v-model="filterItems.values.Quality"
                          :items="filterItems.items.Quality && filterItems.items.Quality || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Biomarker Quality"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                              v-model="filterItems.values.pvalmin"
                              :rules="[filterItems.rules.pval]"
                              background-color="white"
                              class="mt-2"
                              dense
                              label="Min P value"
                              outlined
                          >
                          </v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                              v-model="filterItems.values.pvalmax"
                              :rules="[filterItems.rules.pval]"
                              background-color="white"
                              class="mt-2"
                              dense
                              label="Max P value"
                              outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Disease
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!--Disease_type-->
                      <v-autocomplete
                          v-model="filterItems.values.Disease_type"
                          :items="filterItems.items.Disease_type && filterItems.items.Disease_type || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Disease Category"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--disease_subtype-->
                      <v-autocomplete
                          v-model="filterItems.values.disease_subtype"
                          :items="filterItems.items.disease_subtype && filterItems.items.disease_subtype || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Disease Name"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Disease_onto_id-->
                      <v-autocomplete
                          v-model="filterItems.values.Disease_onto_id"
                          :items="filterItems.items.Disease_onto_id && filterItems.items.Disease_onto_id || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Disease Ontology ID"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Tissue
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!--Tissue-->
                      <v-autocomplete
                          v-model="filterItems.values.Tissue"
                          :items="filterItems.items.Tissue && filterItems.items.Tissue || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Tissue"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Tissue_onto_id-->
                      <v-autocomplete
                          v-model="filterItems.values.Tissue_onto_id"
                          :items="filterItems.items.Tissue_onto_id && filterItems.items.Tissue_onto_id || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Tissue Ontology ID"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Trait
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!--Trait_ontology_name-->
                      <v-autocomplete
                          v-model="filterItems.values.Trait_ontology_name"
                          :items="filterItems.items.Trait_ontology_name && filterItems.items.Trait_ontology_name || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Trait Name"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Trait Ontology ID-->
                      <v-autocomplete
                          v-model="filterItems.values.Trait_ontology_id"
                          :items="filterItems.items.Trait_ontology_id && filterItems.items.Trait_ontology_id || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Trait Ontology ID"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Trait_type-->
                      <v-autocomplete
                          v-model="filterItems.values.Trait_type"
                          :items="filterItems.items.Trait_type && filterItems.items.Trait_type || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Trait Type"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      Publication
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!--PMID-->
                      <v-autocomplete
                          v-model="filterItems.values.PMID"
                          :items="filterItems.items.PMID && filterItems.items.PMID || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="PubMed ID"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>

                      <!--Journal_Title-->
                      <v-autocomplete
                          v-model="filterItems.values.Journal_Title"
                          :items="filterItems.items.Journal_Title && filterItems.items.Journal_Title || []"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          filled
                          hide-details
                          item-text="text"
                          label="Journal"
                          outlined
                      >
                        <template #item="{item}">
                          <div class="text-left" style="max-width: 500px;">
                            {{ item.text }}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Title(Fuzzy search)-->
                      <v-text-field
                          v-model="filterItems.values.Publication_title"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          class="mt-2"
                          clearable
                          dense
                          hide-details
                          label="Title(Fuzzy search)"
                          outlined
                      ></v-text-field>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-sheet>
              <v-row class="mt-4" dense>
                <v-spacer></v-spacer>
                <v-col class="text-right mr-6" cols="10">
                  <v-btn
                      :color="$store.state.mainColor"
                      :loading="filterItems.isLoading"
                      class="mr-1"
                      dark
                      elevation="0"
                      small
                      style="text-transform: none"
                      @click="apply_filters"
                  >Apply
                  </v-btn>
                  <v-btn
                      :color="$store.state.mainColor"
                      dark
                      elevation="0"
                      small
                      style="text-transform: none"
                      @click="reset_filters"
                  >Reset
                  </v-btn>

                </v-col>
              </v-row>
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-col>
      <v-col :cols="expandFilter? 9:12">
        <!-- 右侧panel,以tabs形式展现 Protein,Study,Trait,Publication-->
        <v-sheet
            class="px-4 py-2"
            min-height="900"
            outlined rounded
        >
          <v-tabs
              v-model="tab"
              :color="$store.state.mainColor"
          >
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
          <v-tabs-items v-model="tab">
            <!--Protein Table-->
            <v-tab-item>
              <browse-protein-table :protein="protein" reftoobar="xToolbarBrowseProtein" >
                <template #header>
                  <vxe-pager
                      :current-page="protein.currentPage"
                      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                      :loading="protein.pageLoading"
                      :page-size="protein.pageSize"
                      :total="protein.totalPage"
                      @page-change="handlePageChangeProtein"
                  >
                  </vxe-pager>
                </template>
                <template #footer>
                  <vxe-pager
                      :current-page="protein.currentPage"
                      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                      :loading="protein.pageLoading"
                      :page-size="protein.pageSize"
                      :total="protein.totalPage"
                      @page-change="handlePageChangeProtein"
                  >
                  </vxe-pager>
                </template>
              </browse-protein-table>
            </v-tab-item>
            <!--Trait Table-->
            <v-tab-item>


                <browse-trait-table :trait="trait">
                  <template #header>
                    <vxe-pager
                        :current-page="trait.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="trait.pageLoading"
                        :page-size="trait.pageSize"
                        :total="trait.totalPage"
                        @page-change="handlePageChangeTrait"
                    >
                    </vxe-pager>
                  </template>
                  <template #footer>
                    <vxe-pager
                        :current-page="trait.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="trait.pageLoading"
                        :page-size="trait.pageSize"
                        :total="trait.totalPage"
                        @page-change="handlePageChangeTrait"
                    >
                    </vxe-pager>
                  </template>
                </browse-trait-table>
            </v-tab-item>
            <!--Study Table-->
            <v-tab-item>
              <!--              <v-sheet height="1000">-->
              <browse-study-table :study="study">
                <template #header>
                  <vxe-pager
                      :current-page="study.currentPage"
                      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                      :loading="study.pageLoading"
                      :page-size="study.pageSize"
                      :total="study.totalPage"
                      @page-change="handlePageChangeStudy"
                  >
                  </vxe-pager>
                </template>
                <template #header>
                  <vxe-pager
                      :current-page="study.currentPage"
                      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                      :loading="study.pageLoading"
                      :page-size="study.pageSize"
                      :total="study.totalPage"
                      @page-change="handlePageChangeStudy"
                  >
                  </vxe-pager>
                </template>
              </browse-study-table>

              <!--              </v-sheet>-->
            </v-tab-item>
            <!--Publication Table-->
            <v-tab-item>
              <browse-publication-table :publication="publication">
                <template #header>
                  <vxe-pager
                      :current-page="publication.currentPage"
                      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                      :loading="publication.pageLoading"
                      :page-size="publication.pageSize"
                      :total="publication.totalPage"
                      @page-change="handlePageChangePublication"
                  >
                  </vxe-pager>
                </template>
                <template #footer>
                  <vxe-pager
                      :current-page="publication.currentPage"
                      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                      :loading="publication.pageLoading"
                      :page-size="publication.pageSize"
                      :total="publication.totalPage"
                      @page-change="handlePageChangePublication"
                  >
                  </vxe-pager>
                </template>
              </browse-publication-table>
            </v-tab-item>
          </v-tabs-items>
        </v-sheet>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import Axios from 'axios';
import BreadCrumb from "@/components/breadCrumb";
import PercentBarItemsPval from "@/components/percentBarItemsPval";
import CategoryList from "@/components/categoryList";
import _ from 'lodash'
import BrowseProteinTable from "@/components/browseProteinTable";
import BrowseStudyTable from "@/components/browseStudyTable";
import BrowseTraitTable from "@/components/browseTraitTable";
import BrowsePublicationTable from "@/components/browsePublicationTable";

export default {
  name: "browse",
  components: {
    BrowsePublicationTable,
    BrowseTraitTable, BrowseStudyTable, BrowseProteinTable, CategoryList, PercentBarItemsPval, BreadCrumb
  },
  data() {
    return {
      tab: 1,
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
      filterItems: {
        filterOpen: [0, 1, 2],
        rules: {
          pval: function (val) {
            if (_.isNull(val)) {
              return true
            } else if (_.isNaN(val)) {
              return true
            } else {
              if (!_.isNull(parseFloat(val)) && !_.isNaN(parseFloat(val)) && _.isNumber(parseFloat(val))) {
                // console.log(parseFloat(val))
                if (parseFloat(val) > 1 || parseFloat(val) < 0) {
                  return "Please provide a number from 0 - 1"
                } else {
                  return true
                }
              } else {
                return "Please provide a number"
              }
            }
          },

        },
        isLoading: false,
        items: {},
        values: {
          Protein_names: null,
          PMID: null,
          Publication_title: null,
          Journal_Title: null,
          std_Uniprot_ID: null,
          std_Gene_Symbol: null,
          std_Ensembl_ID: null,
          Prediction_type: null,
          Quality: null,
          Tissue: null,
          Tissue_onto_id: null,
          Disease_type: null,
          disease_subtype: null,
          Disease_onto_id: null,
          Trait_ontology_name: null,
          Trait_ontology_id: null,
          Trait_type: null,
          pvalmin: null,
          pvalmax: null,
        }
      },
      protein: {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        totalPage: 10,
        pageLoading: false,
      },
      study: {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        totalPage: 10,
        pageLoading: false,
      },
      trait: {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        totalPage: 10,
        pageLoading: false,
      },
      publication: {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        totalPage: 10,
        pageLoading: false,
      },
    }
  },
  created() {
    this.loadData();



  },
  beforeRouteEnter(to, from, next) {

    next(vm => {
      vm.tab = to.query.index;
    })

  },
  methods: {
    loadData() {
      this.loadFilterItems();
      this.loadDataProtein();
      this.loadDataTrait();
      this.loadDataPublication();
      this.loadDataStudy();

    },
    loadFilterItems() {
      this.filterItems.isLoading = true;
      Axios.get(
          baseURL + "/api/browse_filter_items",
          {},
      ).then(res => {
        this.filterItems.isLoading = false;
        this.filterItems.items = JSON.parse(res.data);
      }).catch(err => {
        this.filterItems.isLoading = false;
      });
    },
    loadDataProtein() {
      this.protein.pageLoading = true;
      Axios.post(
          baseURL + "/api/browse_protein",
          {},
          {
            params: {
              page_number: this.protein.currentPage,
              page_size: this.protein.pageSize,
              pmid: this.filterItems.values.PMID,
              journal: this.filterItems.values.Journal_Title,
              publication_title: this.filterItems.values.Publication_title,
              uniprot_id: this.filterItems.values.std_Uniprot_ID,
              protein_name: this.filterItems.values.Protein_names,
              ensg_name: this.filterItems.values.std_Gene_Symbol,
              ensg_id: this.filterItems.values.std_Ensembl_ID,
              biomarker_category: this.filterItems.values.Prediction_type,
              quality: this.filterItems.values.Quality,
              tissue_name: this.filterItems.values.Tissue,
              tissue_id: this.filterItems.values.Tissue_onto_id,
              disease_type: this.filterItems.values.Disease_type,
              disease_subtype: this.filterItems.values.disease_subtype,
              disease_id: this.filterItems.values.Disease_onto_id,
              trait_name: this.filterItems.values.Trait_ontology_name,
              trait_id: this.filterItems.values.Trait_ontology_id,
              trait_type: this.filterItems.values.Trait_type,
              pval_min: this.filterItems.values.pvalmin,
              pval_max: this.filterItems.values.pvalmax
            }
          }
      ).then(res => {
        this.protein.pageLoading = false;
        let data = JSON.parse(res.data);
        this.protein.tableData = data[0];
        this.protein.totalPage = data[1]
      }).catch(err => {
        this.protein.pageLoading = false;
      });
    },
    loadDataTrait() {
      this.trait.pageLoading = true;
      Axios.post(
          baseURL + "/api/browse_trait",
          {},
          {
            params: {
              page_number: this.trait.currentPage,
              page_size: this.trait.pageSize,
              pmid: this.filterItems.values.PMID,
              journal: this.filterItems.values.Journal_Title,
              publication_title: this.filterItems.values.Publication_title,
              uniprot_id: this.filterItems.values.std_Uniprot_ID,
              protein_name: this.filterItems.values.Protein_names,
              ensg_name: this.filterItems.values.std_Gene_Symbol,
              ensg_id: this.filterItems.values.std_Ensembl_ID,
              biomarker_category: this.filterItems.values.Prediction_type,
              quality: this.filterItems.values.Quality,
              tissue_name: this.filterItems.values.Tissue,
              tissue_id: this.filterItems.values.Tissue_onto_id,
              disease_type: this.filterItems.values.Disease_type,
              disease_subtype: this.filterItems.values.disease_subtype,
              disease_id: this.filterItems.values.Disease_onto_id,
              trait_name: this.filterItems.values.Trait_ontology_name,
              trait_id: this.filterItems.values.Trait_ontology_id,
              trait_type: this.filterItems.values.Trait_type,
              pval_min: this.filterItems.values.pvalmin,
              pval_max: this.filterItems.values.pvalmax
            }
          }
      ).then(res => {
        this.trait.pageLoading = false;
        let data = JSON.parse(res.data);
        this.trait.tableData = data[0];
        this.trait.totalPage = data[1]
      }).catch(err => {
        this.trait.pageLoading = false;
      });
    },
    loadDataStudy() {
      this.study.pageLoading = true;
      Axios.post(
          baseURL + "/api/browse_study",
          {},
          {
            params: {
              page_number: this.study.currentPage,
              page_size: this.study.pageSize,
              pmid: this.filterItems.values.PMID,
              journal: this.filterItems.values.Journal_Title,
              publication_title: this.filterItems.values.Publication_title,
              uniprot_id: this.filterItems.values.std_Uniprot_ID,
              protein_name: this.filterItems.values.Protein_names,
              ensg_name: this.filterItems.values.std_Gene_Symbol,
              ensg_id: this.filterItems.values.std_Ensembl_ID,
              biomarker_category: this.filterItems.values.Prediction_type,
              quality: this.filterItems.values.Quality,
              tissue_name: this.filterItems.values.Tissue,
              tissue_id: this.filterItems.values.Tissue_onto_id,
              disease_type: this.filterItems.values.Disease_type,
              disease_subtype: this.filterItems.values.disease_subtype,
              disease_id: this.filterItems.values.Disease_onto_id,
              trait_name: this.filterItems.values.Trait_ontology_name,
              trait_id: this.filterItems.values.Trait_ontology_id,
              trait_type: this.filterItems.values.Trait_type,
              pval_min: this.filterItems.values.pvalmin,
              pval_max: this.filterItems.values.pvalmax
            }
          }
      ).then(res => {
        this.study.pageLoading = false;
        let data = JSON.parse(res.data);
        this.study.tableData = data[0];
        this.study.totalPage = data[1];
      }).catch(err => {
        this.study.pageLoading = false;
      });
    },
    loadDataPublication() {
      this.publication.pageLoading = true;
      Axios.post(
          baseURL + "/api/browse_publication",
          {},
          {
            params: {
              page_number: this.publication.currentPage,
              page_size: this.publication.pageSize,
              pmid: this.filterItems.values.PMID,
              journal: this.filterItems.values.Journal_Title,
              publication_title: this.filterItems.values.Publication_title,
              uniprot_id: this.filterItems.values.std_Uniprot_ID,
              protein_name: this.filterItems.values.Protein_names,
              ensg_name: this.filterItems.values.std_Gene_Symbol,
              ensg_id: this.filterItems.values.std_Ensembl_ID,
              biomarker_category: this.filterItems.values.Prediction_type,
              quality: this.filterItems.values.Quality,
              tissue_name: this.filterItems.values.Tissue,
              tissue_id: this.filterItems.values.Tissue_onto_id,
              disease_type: this.filterItems.values.Disease_type,
              disease_subtype: this.filterItems.values.disease_subtype,
              disease_id: this.filterItems.values.Disease_onto_id,
              trait_name: this.filterItems.values.Trait_ontology_name,
              trait_id: this.filterItems.values.Trait_ontology_id,
              trait_type: this.filterItems.values.Trait_type,
              pval_min: this.filterItems.values.pvalmin,
              pval_max: this.filterItems.values.pvalmax
            }
          }
      ).then(res => {
        this.publication.pageLoading = false;
        let data = JSON.parse(res.data);
        this.publication.tableData = data[0];
        this.publication.totalPage = data[1];
      }).catch(err => {
        this.publication.pageLoading = false;
      });
    },
    handlePageChangeProtein({currentPage, pageSize}) {
      this.protein.currentPage = currentPage;
      this.protein.pageSize = pageSize;
      this.loadDataProtein();
    },
    handlePageChangeTrait({currentPage, pageSize}) {
      this.trait.currentPage = currentPage;
      this.trait.pageSize = pageSize;
      this.loadDataTrait();
    },
    handlePageChangeStudy({currentPage, pageSize}) {
      this.study.currentPage = currentPage;
      this.study.pageSize = pageSize;
      this.loadDataStudy();
    },
    handlePageChangePublication({currentPage, pageSize}) {
      this.publication.currentPage = currentPage;
      this.publication.pageSize = pageSize;
      this.loadDataPublication();
    },
    apply_filters() {
      this.protein.currentPage = 1;
      this.study.currentPage = 1;
      this.trait.currentPage = 1;
      this.publication.currentPage = 1;
      this.loadData()
    },
    reset_filters() {
      this.protein.currentPage = 1;
      this.study.currentPage = 1;
      this.trait.currentPage = 1;
      this.publication.currentPage = 1;
      this.filterItems.values = {
        Protein_names: null,
        PMID: null,
        Publication_title: null,
        Journal_Title: null,
        std_Uniprot_ID: null,
        std_Gene_Symbol: null,
        std_Ensembl_ID: null,
        Prediction_type: null,
        Quality: null,
        Tissue: null,
        Tissue_onto_id: null,
        Disease_type: null,
        disease_subtype: null,
        Disease_onto_id: null,
        Trait_ontology_name: null,
        Trait_ontology_id: null,
        Trait_type: null,
        pvalmin: null,
        pvalmax: null,
      }
      this.loadData();

    },


  }
}
</script>

<style scoped>

</style>