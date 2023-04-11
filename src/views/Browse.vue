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

          <v-sheet v-show="expandFilter"   color="grey lighten-4" outlined rounded>

            <v-sheet class="pa-3"  color="grey lighten-4" >
              <v-row dense class="mb-4">
                <v-spacer></v-spacer>
                <v-col class="text-right mr-6" cols="10">
                  <v-btn
                      :color="$store.state.mainColor"
                      :loading="filterItems.isLoading"
                      dark
                      elevation="0"
                      small
                      style="text-transform: none"
                      class="mr-1"
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
              <v-sheet max-height="800" class="overflow-y-auto" color="grey lighten-4">
                <v-expansion-panels

                    multiple
                    v-model="filterItems.filterOpen"
                >

                  <v-expansion-panel  >
                    <v-expansion-panel-header>
                      Protein
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <!--Protein_names-->
                      <v-autocomplete
                          v-model="filterItems.values.Protein_names"
                          :items="filterItems.items.Protein_names && filterItems.items.Protein_names || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Protein Name"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--std_Uniprot_ID-->
                      <v-autocomplete
                          v-model="filterItems.values.std_Uniprot_ID"
                          :items="filterItems.items.std_Uniprot_ID && filterItems.items.std_Uniprot_ID || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="UniProt ID"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
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
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Gene Symbol"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--std_Ensembl_ID-->
                      <v-autocomplete
                          v-model="filterItems.values.std_Ensembl_ID"
                          :items="filterItems.items.std_Ensembl_ID && filterItems.items.std_Ensembl_ID || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Ensembl Gene ID"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
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
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Biomarker Category"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Quality-->
                      <v-autocomplete
                          v-model="filterItems.values.Quality"
                          :items="filterItems.items.Quality && filterItems.items.Quality || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Biomarker Quality"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                              class="mt-2"
                              background-color="white"
                              dense
                              :rules="[filterItems.rules.pval]"
                              v-model="filterItems.values.pvalmin"
                              label="Min P value"
                              outlined
                          >
                          </v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                              class="mt-2"
                              :rules="[filterItems.rules.pval]"
                              v-model="filterItems.values.pvalmax"
                              background-color="white"
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
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Disease Category"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--disease_subtype-->
                      <v-autocomplete
                          v-model="filterItems.values.disease_subtype"
                          :items="filterItems.items.disease_subtype && filterItems.items.disease_subtype || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Disease Name"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Disease_onto_id-->
                      <v-autocomplete
                          v-model="filterItems.values.Disease_onto_id"
                          :items="filterItems.items.Disease_onto_id && filterItems.items.Disease_onto_id || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Disease Ontology ID"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
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
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Tissue"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Tissue_onto_id-->
                      <v-autocomplete
                          v-model="filterItems.values.Tissue_onto_id"
                          :items="filterItems.items.Tissue_onto_id && filterItems.items.Tissue_onto_id || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Tissue Ontology ID"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
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
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Trait Name"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Trait Ontology ID-->
                      <v-autocomplete
                          v-model="filterItems.values.Trait_ontology_id"
                          :items="filterItems.items.Trait_ontology_id && filterItems.items.Trait_ontology_id || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Trait Ontology ID"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Trait_type-->
                      <v-autocomplete
                          v-model="filterItems.values.Trait_type"
                          :items="filterItems.items.Trait_type && filterItems.items.Trait_type || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Trait Type"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
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
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="PubMed ID"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>

                      <!--Journal_Title-->
                      <v-autocomplete
                          v-model="filterItems.values.Journal_Title"
                          :items="filterItems.items.Journal_Title && filterItems.items.Journal_Title || []"
                          :loading="filterItems.isLoading"
                          item-text="text"
                          background-color="white"
                          clearable
                          dense
                          filled
                          hide-details
                          label="Journal"
                          outlined
                          class="mt-2"
                      >
                        <template #item="{item}">
                          <div style="max-width: 500px;" class="text-left" >
                            {{item.text}}
                          </div>
                        </template>
                      </v-autocomplete>
                      <!--Title(Fuzzy search)-->
                      <v-text-field
                          class="mt-2"
                          v-model="filterItems.values.Publication_title"
                          :loading="filterItems.isLoading"
                          background-color="white"
                          clearable
                          hide-details
                          dense
                          label="Title(Fuzzy search)"
                          outlined
                      ></v-text-field>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-sheet>
              <v-row dense class="mt-4">
                <v-spacer></v-spacer>
                <v-col class="text-right mr-6" cols="10">
                  <v-btn
                      :color="$store.state.mainColor"
                      :loading="filterItems.isLoading"
                      dark
                      elevation="0"
                      small
                      style="text-transform: none"
                      class="mr-1"
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
        <v-sheet class="px-4 py-2" min-height="900" outlined rounded>
          <v-tabs v-model="tab" :color="$store.state.mainColor" centered hide-slider>
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
              <vxe-toolbar ref="xToolbar1" custom export></vxe-toolbar>
              <vxe-pager
                  :current-page="protein.currentPage"
                  :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                  :loading="protein.pageLoading"
                  :page-size="protein.pageSize"
                  :total="protein.totalPage"
                  @page-change="handlePageChangeProtein"
              >
              </vxe-pager>
              <vxe-table
                  :data="protein.tableData"
                  :expand-config="{iconOpen: 'vxe-icon-square-minus', iconClose: 'vxe-icon-square-plus'}"
                  :export-config="{}"
                  :loading="protein.pageLoading"
                  border
                  empty-text="Empty"
                  height="auto"
                  max-height="700"
                  round
                  stripe

              >
                <vxe-column resizable type="expand" width="50">
                  <template #content="{ row, rowIndex }">

                    <vxe-table
                        :data="Object.values(row.detail)"
                        border>
                      <vxe-column resizable type="seq" width="50"></vxe-column>
                      <vxe-column resizable title="Biomarker Category" width="180px">
                        <template #default="{row}">
                          {{ row.Biomarker_category }}
                        </template>
                      </vxe-column>
                      <vxe-column resizable title="#Study" width="180px">
                        <template #default="{row}">
                          {{ row.Nstudy }}
                        </template>
                      </vxe-column>
                      <vxe-column field="Nsubject" resizable title="#Subject" width="100px"></vxe-column>
                      <vxe-column field="quality" resizable title="Quality" width="150px">
                        <template #default="{row}">
                          <category-list :color_map="$store.state.chipColors.quality"
                                         :dat_str_map="row.quality"></category-list>
                        </template>
                      </vxe-column>
                      <vxe-column field="tissue" resizable title="Tissue" width="150px">
                        <template #default="{row}">
                          <category-list :dat_str_map="row.tissue"></category-list>
                        </template>
                      </vxe-column>
                      <vxe-column field="trait" resizable title="Trait" width="150px">
                        <template #default="{row}">
                          <category-list :dat_str_map="row.trait"></category-list>
                        </template>
                      </vxe-column>
                      <vxe-column field="disease" resizable title="Disease" width="150px">
                        <template #default="{row}">
                          <category-list :dat_str_map="row.disease"></category-list>
                        </template>
                      </vxe-column>
                      <vxe-column field="pvalsummary" resizable title="P-value Summary" width="150px">
                        <template #default="{row}">
                          <percent-bar-items-pval :dat="row.pvalsummary"></percent-bar-items-pval>
                        </template>
                      </vxe-column>
                    </vxe-table>
                  </template>
                </vxe-column>
                <vxe-column field="std_Uniprot_ID" resizable title="Protein ID" width="150px"></vxe-column>
                <vxe-column field="Protein_names" min-width="250px" resizable title="Protein Name"></vxe-column>
                <vxe-column field="std_Ensembl_ID" resizable title="Gene ID" width="150px"></vxe-column>
                <vxe-column field="Nstudy" resizable title="#Study" width="80px"></vxe-column>
                <vxe-column field="Nsubject" resizable title="#Subject" width="100px"></vxe-column>
                <vxe-column field="Biomarker_category" resizable title="Biomarker Category" width="180px">
                  <template #default="{row}">
                    <span><category-list :color_map="$store.state.chipColors.biomarker_category"
                                         :dat_str_map="row.Biomarker_category"></category-list></span>
                  </template>
                </vxe-column>
                <vxe-column field="quality" resizable title="Quality" width="150px">
                  <template #default="{row}">
                    <category-list :color_map="$store.state.chipColors.quality"
                                   :dat_str_map="row.quality"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="tissue" resizable title="Tissue" width="150px">
                  <template #default="{row}">
                    <category-list :dat_str_map="row.tissue"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="trait" resizable title="Trait" width="150px">
                  <template #default="{row}">
                    <category-list :dat_str_map="row.trait"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="disease" resizable title="Disease" width="150px">
                  <template #default="{row}">
                    <category-list :dat_str_map="row.disease"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="pvalsummary" resizable title="P-value Summary" width="150px">
                  <template #default="{row}">
                    <percent-bar-items-pval :dat="row.pvalsummary"></percent-bar-items-pval>
                  </template>
                </vxe-column>
              </vxe-table>
              <vxe-pager
                  :current-page="protein.currentPage"
                  :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                  :loading="protein.pageLoading"
                  :page-size="protein.pageSize"
                  :total="protein.totalPage"
                  @page-change="handlePageChangeProtein"
              >
              </vxe-pager>
            </v-tab-item>
            <!--Trait Table-->
            <v-tab-item>
              <vxe-toolbar ref="xToolbar1" custom export></vxe-toolbar>
              <vxe-pager
                  :current-page="trait.currentPage"
                  :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                  :loading="trait.pageLoading"
                  :page-size="trait.pageSize"
                  :total="trait.totalPage"
                  @page-change="handlePageChangeTrait"
              >
              </vxe-pager>
              <vxe-table
                  :data="trait.tableData"
                  :expand-config="{iconOpen: 'vxe-icon-square-minus', iconClose: 'vxe-icon-square-plus'}"
                  :export-config="{}"
                  :loading="trait.pageLoading"
                  border
                  empty-text="Empty"
                  height="auto"
                  max-height="700"
                  round
                  stripe
              >
                <vxe-column resizable type="expand" width="50">
                  <template #content="{ row, rowIndex }">

                    <vxe-table
                        :data="Object.values(row.detail)"
                        border>
                      <vxe-column resizable type="seq" width="50"></vxe-column>
                      <vxe-column resizable title="Biomarker Category" width="180px">
                        <template #default="{row}">
                          {{ row.Biomarker_category }}
                        </template>
                      </vxe-column>
                      <vxe-column field="protein" resizable title="Protein" width="150px">
                        <template #default="{row}">
                          <category-list :dat_str_map="row.protein"></category-list>
                        </template>
                      </vxe-column>
                      <vxe-column resizable title="#Study" width="180px">
                        <template #default="{row}">
                          {{ row.Nstudy }}
                        </template>
                      </vxe-column>
                      <vxe-column field="Nsubject" resizable title="#Subject" width="100px"></vxe-column>
                      <vxe-column field="quality" resizable title="Quality" width="150px">
                        <template #default="{row}">
                          <category-list :color_map="$store.state.chipColors.quality"
                                         :dat_str_map="row.quality"></category-list>
                        </template>
                      </vxe-column>
                      <vxe-column field="tissue" resizable title="Tissue" width="150px">
                        <template #default="{row}">
                          <category-list :dat_str_map="row.tissue"></category-list>
                        </template>
                      </vxe-column>
                      <vxe-column field="disease" resizable title="Disease" width="150px">
                        <template #default="{row}">
                          <category-list :dat_str_map="row.disease"></category-list>
                        </template>
                      </vxe-column>
                      <vxe-column field="pvalsummary" resizable title="P-value Summary" width="150px">
                        <template #default="{row}">
                          <percent-bar-items-pval :dat="row.pvalsummary"></percent-bar-items-pval>
                        </template>
                      </vxe-column>
                    </vxe-table>
                  </template>
                </vxe-column>
                <vxe-column field="Trait_ontology_name" resizable title="Trait" width="150px"></vxe-column>
                <vxe-column field="Trait_type" min-width="150px" resizable title="Trait Type"></vxe-column>
                <vxe-column field="Nstudy" resizable title="#Study" width="80px"></vxe-column>
                <vxe-column field="Nsubject" resizable title="#Subject" width="100px"></vxe-column>
                <vxe-column field="Biomarker_category" resizable title="Biomarker Category" width="180px">
                  <template #default="{row}">
                    <span><category-list :color_map="$store.state.chipColors.biomarker_category"
                                         :dat_str_map="row.Biomarker_category"></category-list></span>
                  </template>
                </vxe-column>
                <vxe-column field="protein" resizable title="Protein" min-width="350px">
                  <template #default="{row}">
                    <category-list :dat_str_map="row.protein"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="quality" resizable title="Quality" width="150px">
                  <template #default="{row}">
                    <category-list :color_map="$store.state.chipColors.quality"
                                   :dat_str_map="row.quality"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="tissue" resizable title="Tissue" width="150px">
                  <template #default="{row}">
                    <category-list :dat_str_map="row.tissue"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="disease" resizable title="Disease" width="150px">
                  <template #default="{row}">
                    <category-list :dat_str_map="row.disease"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="pvalsummary" resizable title="P-value Summary" width="150px">
                  <template #default="{row}">
                    <percent-bar-items-pval :dat="row.pvalsummary"></percent-bar-items-pval>
                  </template>
                </vxe-column>
                <vxe-column field="publication" resizable title="Publication" width="150px">
                  <template #default="{row}">
                    <span v-for="ppp in Object.keys(row.publication)">
                      {{ ppp }}
                    </span>
                  </template>
                </vxe-column>
              </vxe-table>
              <vxe-pager
                  :current-page="trait.currentPage"
                  :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                  :loading="trait.pageLoading"
                  :page-size="trait.pageSize"
                  :total="trait.totalPage"
                  @page-change="handlePageChangeTrait"
              >
              </vxe-pager>
            </v-tab-item>
            <!--Study Table-->
            <v-tab-item>
<!--              <v-sheet height="1000">-->
                <vxe-toolbar ref="xToolbar1" custom export></vxe-toolbar>
                <vxe-pager
                    :current-page="study.currentPage"
                    :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                    :loading="study.pageLoading"
                    :page-size="study.pageSize"
                    :total="study.totalPage"
                    @page-change="handlePageChangeStudy"
                >
                </vxe-pager>
                <vxe-table
                    :data="study.tableData"
                    :expand-config="{iconOpen: 'vxe-icon-square-minus', iconClose: 'vxe-icon-square-plus'}"
                    :export-config="{}"
                    :loading="study.pageLoading"
                    border
                    empty-text="Empty"
                    max-height="700"
                    round
                    stripe
                >
                  <vxe-column field="Study_id" resizable title="Study" width="150px"></vxe-column>
                  <vxe-column field="Nsubject" resizable title="#Subject" width="80px"></vxe-column>
                  <vxe-column field="PMID" resizable title="Publication" width="100px"></vxe-column>
                  <vxe-column field="Condition" resizable title="Condition" min-width="250px"></vxe-column>
                  <vxe-column field="Disease_type" resizable title="Disease" width="180px">
                  </vxe-column>
                  <vxe-column field="protein" resizable title="Protein" min-width="350px">
                    <template #default="{row}">
                      <category-list :dat_str_map="row.protein"></category-list>
                    </template>
                  </vxe-column>
                  <vxe-column field="Trait_ontology_name" resizable title="Trait" min-width="200px">
                  </vxe-column>
                  <!--                <vxe-column field="Tissue" resizable title="Tissue" width="150px">-->
                  <!--                  <template #default="{row}">-->
                  <!--                    <category-list :dat_str_map="row.tissue"></category-list>-->
                  <!--                  </template>-->
                  <!--                </vxe-column>-->
                  <vxe-column field="pvalsummary" resizable title="P-value Summary" width="150px">
                    <template #default="{row}">
                      <percent-bar-items-pval :dat="row.pvalsummary"></percent-bar-items-pval>
                    </template>
                  </vxe-column>

                </vxe-table>
                <vxe-pager
                    :current-page="study.currentPage"
                    :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                    :loading="study.pageLoading"
                    :page-size="study.pageSize"
                    :total="study.totalPage"
                    @page-change="handlePageChangeStudy"
                >
                </vxe-pager>
<!--              </v-sheet>-->
            </v-tab-item>
            <!--Publication Table-->
            <v-tab-item>
              <vxe-toolbar ref="xToolbar1" custom export></vxe-toolbar>
              <vxe-pager
                  :current-page="publication.currentPage"
                  :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                  :loading="publication.pageLoading"
                  :page-size="publication.pageSize"
                  :total="publication.totalPage"
                  @page-change="handlePageChangePublication"
              >
              </vxe-pager>
              <vxe-table
                  :data="publication.tableData"
                  :expand-config="{iconOpen: 'vxe-icon-square-minus', iconClose: 'vxe-icon-square-plus'}"
                  :export-config="{}"
                  :loading="publication.pageLoading"
                  border
                  empty-text="Empty"
                  height="auto"
                  max-height="700"
                  round
                  stripe

              >
                <vxe-column resizable type="expand" width="50">
                  <template #content="{ row, rowIndex }">

                    <v-sheet class="mx-4 my-2">
                      <b>Abstract</b><br/>
                      <v-sheet class="text-justify">
                        {{row.Abstract}}
                      </v-sheet>

                    </v-sheet>

                  </template>
                </vxe-column>
                <vxe-column field="Title" resizable title="Title" width="450px"></vxe-column>
                <vxe-column field="Nstudy" resizable title="#Study" width="80px"></vxe-column>
                <vxe-column field="Nsubject" resizable title="#Subject" width="100px"></vxe-column>
                <vxe-column field="Biomarker_category" resizable title="Biomarker Category" width="180px">
                  <template #default="{row}">
                    <span><category-list :color_map="$store.state.chipColors.biomarker_category"
                                         :dat_str_map="row.Biomarker_category"></category-list></span>
                  </template>
                </vxe-column>
                <vxe-column field="quality" resizable title="Quality" width="150px">
                  <template #default="{row}">
                    <category-list :color_map="$store.state.chipColors.quality"
                                   :dat_str_map="row.quality"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="tissue" resizable title="Tissue" width="150px">
                  <template #default="{row}">
                    <category-list :dat_str_map="row.tissue"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="trait" resizable title="Trait" width="150px">
                  <template #default="{row}">
                    <category-list :dat_str_map="row.trait"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="disease" resizable title="Disease" width="150px">
                  <template #default="{row}">
                    <category-list :dat_str_map="row.disease"></category-list>
                  </template>
                </vxe-column>
                <vxe-column field="pvalsummary" resizable title="P-value Summary" width="150px">
                  <template #default="{row}">
                    <percent-bar-items-pval :dat="row.pvalsummary"></percent-bar-items-pval>
                  </template>
                </vxe-column>
                <vxe-column field="Journal_Title" resizable title="Journal" width="150px">

                </vxe-column>
                <vxe-column field="publish_info" resizable title="Publish Information" width="150px">
                  <template #default="{row}">
                    <div>Volume:&nbsp;{{row.publish_info.vol}} </div>
                    <div>Issue:&nbsp;{{row.publish_info.issue}} </div>
                    <div>Pages:&nbsp;{{row.publish_info.page}} </div>
                    <div>Date:&nbsp;{{row.publish_info.date}} </div>
                  </template>
                </vxe-column>
              </vxe-table>
              <vxe-pager
                  :current-page="publication.currentPage"
                  :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                  :loading="publication.pageLoading"
                  :page-size="publication.pageSize"
                  :total="publication.totalPage"
                  @page-change="handlePageChangePublication"
              >
              </vxe-pager>
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

export default {
  name: "browseProtein",
  components: {CategoryList, PercentBarItemsPval, BreadCrumb},
  data() {
    return {
      tab: null,
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
      filterItems:{
        filterOpen:[0,1,2],
        rules: {
          pval: function (val) {
            if (_.isNull(val)){
              return true
            }else if(_.isNaN(val)){
              return true
            }
            else{
              if ( ! _.isNull(parseFloat(val))  &&  ! _.isNaN(parseFloat(val)) && _.isNumber(parseFloat(val))){
                // console.log(parseFloat(val))
                if (parseFloat(val) >1 || parseFloat(val) <0){
                  return "Please provide a number from 0 - 1"
                }else{
                  return true
                }
              }else{
                return "Please provide a number"
              }
            }
          },

        },
        isLoading:false,
        items:{},
        values:{
          Protein_names:null,
          PMID:null,
          Publication_title:null,
          Journal_Title:null,
          std_Uniprot_ID:null,
          std_Gene_Symbol:null,
          std_Ensembl_ID:null,
          Prediction_type:null,
          Quality:null,
          Tissue:null,
          Tissue_onto_id:null,
          Disease_type:null,
          disease_subtype:null,
          Disease_onto_id:null,
          Trait_ontology_name:null,
          Trait_ontology_id:null,
          Trait_type:null,
          pvalmin:null,
          pvalmax:null,
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
  methods: {
    loadData() {
      this.loadFilterItems();
      this.loadDataProtein();
      this.loadDataStudy();
      this.loadDataTrait();
      this.loadDataPublication();
    },
    loadFilterItems(){
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
              pmid:this.filterItems.values.PMID,
              journal:this.filterItems.values.Journal_Title,
              publication_title:this.filterItems.values.Publication_title,
              uniprot_id:this.filterItems.values.std_Uniprot_ID,
              protein_name:this.filterItems.values.Protein_names,
              ensg_name:this.filterItems.values.std_Gene_Symbol,
              ensg_id:this.filterItems.values.std_Ensembl_ID,
              biomarker_category:this.filterItems.values.Prediction_type,
              quality:this.filterItems.values.Quality,
              tissue_name:this.filterItems.values.Tissue,
              tissue_id:this.filterItems.values.Tissue_onto_id,
              disease_type:this.filterItems.values.Disease_type,
              disease_subtype:this.filterItems.values.disease_subtype,
              disease_id:this.filterItems.values.Disease_onto_id,
              trait_name:this.filterItems.values.Trait_ontology_name,
              trait_id:this.filterItems.values.Trait_ontology_id,
              trait_type:this.filterItems.values.Trait_type,
              pval_min:this.filterItems.values.pvalmin,
              pval_max:this.filterItems.values.pvalmax
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
              pmid:this.filterItems.values.PMID,
              journal:this.filterItems.values.Journal_Title,
              publication_title:this.filterItems.values.Publication_title,
              uniprot_id:this.filterItems.values.std_Uniprot_ID,
              protein_name:this.filterItems.values.Protein_names,
              ensg_name:this.filterItems.values.std_Gene_Symbol,
              ensg_id:this.filterItems.values.std_Ensembl_ID,
              biomarker_category:this.filterItems.values.Prediction_type,
              quality:this.filterItems.values.Quality,
              tissue_name:this.filterItems.values.Tissue,
              tissue_id:this.filterItems.values.Tissue_onto_id,
              disease_type:this.filterItems.values.Disease_type,
              disease_subtype:this.filterItems.values.disease_subtype,
              disease_id:this.filterItems.values.Disease_onto_id,
              trait_name:this.filterItems.values.Trait_ontology_name,
              trait_id:this.filterItems.values.Trait_ontology_id,
              trait_type:this.filterItems.values.Trait_type,
              pval_min:this.filterItems.values.pvalmin,
              pval_max:this.filterItems.values.pvalmax
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
              pmid:this.filterItems.values.PMID,
              journal:this.filterItems.values.Journal_Title,
              publication_title:this.filterItems.values.Publication_title,
              uniprot_id:this.filterItems.values.std_Uniprot_ID,
              protein_name:this.filterItems.values.Protein_names,
              ensg_name:this.filterItems.values.std_Gene_Symbol,
              ensg_id:this.filterItems.values.std_Ensembl_ID,
              biomarker_category:this.filterItems.values.Prediction_type,
              quality:this.filterItems.values.Quality,
              tissue_name:this.filterItems.values.Tissue,
              tissue_id:this.filterItems.values.Tissue_onto_id,
              disease_type:this.filterItems.values.Disease_type,
              disease_subtype:this.filterItems.values.disease_subtype,
              disease_id:this.filterItems.values.Disease_onto_id,
              trait_name:this.filterItems.values.Trait_ontology_name,
              trait_id:this.filterItems.values.Trait_ontology_id,
              trait_type:this.filterItems.values.Trait_type,
              pval_min:this.filterItems.values.pvalmin,
              pval_max:this.filterItems.values.pvalmax
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
              pmid:this.filterItems.values.PMID,
              journal:this.filterItems.values.Journal_Title,
              publication_title:this.filterItems.values.Publication_title,
              uniprot_id:this.filterItems.values.std_Uniprot_ID,
              protein_name:this.filterItems.values.Protein_names,
              ensg_name:this.filterItems.values.std_Gene_Symbol,
              ensg_id:this.filterItems.values.std_Ensembl_ID,
              biomarker_category:this.filterItems.values.Prediction_type,
              quality:this.filterItems.values.Quality,
              tissue_name:this.filterItems.values.Tissue,
              tissue_id:this.filterItems.values.Tissue_onto_id,
              disease_type:this.filterItems.values.Disease_type,
              disease_subtype:this.filterItems.values.disease_subtype,
              disease_id:this.filterItems.values.Disease_onto_id,
              trait_name:this.filterItems.values.Trait_ontology_name,
              trait_id:this.filterItems.values.Trait_ontology_id,
              trait_type:this.filterItems.values.Trait_type,
              pval_min:this.filterItems.values.pvalmin,
              pval_max:this.filterItems.values.pvalmax
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
    apply_filters(){
      this.protein.currentPage =1;
      this.study.currentPage =1;
      this.trait.currentPage =1;
      this.publication.currentPage =1;
      this.loadData()
    },
    reset_filters(){
      this.protein.currentPage =1;
      this.study.currentPage =1;
      this.trait.currentPage =1;
      this.publication.currentPage =1;
      this.filterItems.values = {
        Protein_names:null,
        PMID:null,
        Publication_title:null,
        Journal_Title:null,
        std_Uniprot_ID:null,
        std_Gene_Symbol:null,
        std_Ensembl_ID:null,
        Prediction_type:null,
        Quality:null,
        Tissue:null,
        Tissue_onto_id:null,
        Disease_type:null,
        disease_subtype:null,
        Disease_onto_id:null,
        Trait_ontology_name:null,
        Trait_ontology_id:null,
        Trait_type:null,
        pvalmin:null,
        pvalmax:null,
      }
      this.loadData();

    },


  }
}
</script>

<style scoped>

</style>