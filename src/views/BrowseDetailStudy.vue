<template>
  <v-sheet class="mx-4">
    <bread-crumb :breadcrumb-data="breadcrumbData"></bread-crumb>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <expand-panel :title-name="this_id">
            <v-row align="center">
              <v-col cols="12">
                <div class="text-h4 font-weight-bold text-left">{{ detailed_clean.Study_id || "" }}</div>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-row>
                  <v-col cols="4">
                    <span class="text-body-1 font-weight-bold " >Disease:</span> <span>{{detailed_clean.disease_subtype}} </span>
                  </v-col>
                  <v-col cols="4">
                    <span class="text-body-1 font-weight-bold " >Trait:</span> <span>{{detailed_clean.Trait_ontology_name}} </span>
                  </v-col>
                  <v-col cols="4">
                    <span class="text-body-1 font-weight-bold " >Tissue:</span> <span>{{detailed_clean.Tissue}} </span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <span class="text-body-1 font-weight-bold " >#Subject:</span> <span>{{detailed_clean.Nsubject}} </span>
                  </v-col>
                  <v-col cols="4">
                    <span class="text-body-1 font-weight-bold " >#Protein:</span> <span>{{Object.keys(detailed_clean.protein).length}} </span>
                  </v-col>
                  <v-col cols="4">
                    <span class="text-body-1 font-weight-bold " >Method:</span> <span>{{detailed_clean.Assay_or_Technique}} </span>
                  </v-col>
                  <v-col cols="4">
                    <span class="text-body-1 font-weight-bold " >Quality:</span> <span>{{detailed_clean.Quality}} </span>
                  </v-col>
                  <v-col cols="4">
                    <span class="text-body-1 font-weight-bold " >PMID:</span> <span>{{detailed_clean.PMID}} </span>
                  </v-col>


                  <v-col cols="8">
                    <span class="text-body-1 font-weight-bold " >Condition:</span> <span>{{detailed_clean.Condition}} </span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="6">
                <v-sheet outlined rounded >
                  <v-simple-table>
                    <thead>
                    <tr class="text-body-1 font-weight-bold">
                      <th>Group</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Sex</th>
                      <th>Size</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Case</td>
                      <td>{{detailed_clean.case_info.name}}</td>
                      <td>{{detailed_clean.case_info.age}}</td>
                      <td><sex-chip :sex="detailed_clean.case_info.sex"></sex-chip></td>
                      <td>{{detailed_clean.case_info.size}}</td>
                    </tr>
                    <tr>

                      <td>Control</td>
                      <td>{{detailed_clean.control_info.name}}</td>
                      <td>{{detailed_clean.control_info.age}}</td>
                      <td><sex-chip :sex="detailed_clean.control_info.sex"></sex-chip></td>
                      <td>{{detailed_clean.control_info.size}}</td>
                    </tr>

                    </tbody>
                  </v-simple-table>
                </v-sheet>

              </v-col>
            </v-row>


          </expand-panel>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <expand-panel title-name="Related Inforamtion">
            <v-tabs v-model="tabkey" :color="$store.state.mainColor">
              <v-tab style="text-transform: none;">Protein</v-tab>
              <v-tab style="text-transform: none;">Trait</v-tab>
              <v-tab style="text-transform: none;">Publication</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tabkey">
              <!--Study-->
              <v-tab-item>
                <browse-protein-table :protein="protein">
                  <template #header>
                    <vxe-pager
                        :current-page="protein.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="protein.pageLoading"
                        :page-size="protein.pageSize"
                        :total="protein.totalPage"
                        @page-change="paginationProtein"

                    ></vxe-pager>
                  </template>
                  <template #footer>
                    <vxe-pager
                        :current-page="protein.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="protein.pageLoading"
                        :page-size="protein.pageSize"
                        :total="protein.totalPage"
                        @page-change="paginationProtein"

                    ></vxe-pager>
                  </template>
                </browse-protein-table>
              </v-tab-item>
              <!--Trait-->
              <v-tab-item>
                <browse-trait-table :trait="trait">
                  <template #header>
                    <vxe-pager
                        :current-page="trait.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="trait.pageLoading"
                        :page-size="trait.pageSize"
                        :total="trait.totalPage"
                        @page-change="paginationTrait"

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
                        @page-change="paginationTrait"

                    >
                    </vxe-pager>
                  </template>
                </browse-trait-table>
              </v-tab-item>
              <!--Publication-->
              <v-tab-item>
                <browse-publication-table :publication="publication">
                  <template #header>
                    <vxe-pager
                        :current-page="publication.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="publication.pageLoading"
                        :page-size="publication.pageSize"
                        :total="publication.totalPage"
                        @page-change="paginationPublication"
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
                        @page-change="paginationPublication"
                    >
                    </vxe-pager>
                  </template>
                </browse-publication-table>
              </v-tab-item>
            </v-tabs-items>
          </expand-panel>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import BreadCrumb from "@/components/breadCrumb";
import ExpandPanel from "@/components/expandPanel";
import Axios from "axios";
import BrowseProteinTable from "@/components/browseProteinTable";
import BrowseStudyTable from "@/components/browseStudyTable";
import BrowsePublicationTable from "@/components/browsePublicationTable";
import BrowseTraitTable from "@/components/browseTraitTable";
import DetailPageBlock from "@/components/detailPageBlock";
import SexChip from "@/components/helper/sexChip";

export default {
  name: "BrowseDetailStudy",
  components: {
    SexChip,
    DetailPageBlock,
    BrowseTraitTable, BrowsePublicationTable, BrowseStudyTable, BrowseProteinTable, ExpandPanel, BreadCrumb
  },
  data() {
    return {
      tabkey: null,
      breadcrumbData: [
        {
          text: "protdb",
          disabled: false,
          href: baseURL + '/'
        },
        {
          text: "browse",
          disabled: false,
          href: baseURL + '/browse'
        },
        {
          text: "study",
          disabled: true,
        },
        {
          text: this.$route.params.study_id,
          disabled: true,
        },
      ],
      this_id: this.$route.params.study_id,
      isloading: false,
      detail: null,
      protein: {
        tableData: [],
        tableDataAll: [],
        currentPage: 1,
        pageSize: 10,
        totalPage: 10,
        pageLoading: false,
      },
      study: {
        tableData: [],
        tableDataAll: [],
        currentPage: 1,
        pageSize: 10,
        totalPage: 10,
        pageLoading: false,
      },
      trait: {
        tableData: [],
        tableDataAll: [],
        currentPage: 1,
        pageSize: 10,
        totalPage: 10,
        pageLoading: false,
      },
      publication: {
        tableData: [],
        tableDataAll: [],
        currentPage: 1,
        pageSize: 10,
        totalPage: 10,
        pageLoading: false,
      },
    }
  },
  mounted() {
    this.loadData();
  },
  computed: {
    detailed_clean() {
      if (this.detail == null) {
        return {}
      } else {
        return this.detail[0]
      }
    }
  },
  methods: {
    loadData() {
      this.isloading = true
      Axios.post(
          baseURL + "/api/browse_related_three_by_one",
          {},
          {
            params: {
              by: this.$route.params.study_id,
              by_type: "study"
            }
          }
      ).then(res => {
        this.isloading = false;
        let data = JSON.parse(res.data);
        this.detail = data.detail;
        this.protein.tableDataAll = data.protein[0];
        this.protein.totalPage = data.protein[1];
        this.protein.tableData = this.$commonfunc.pagination(this.protein.tableDataAll, this.protein.currentPage, this.protein.pageSize);

        this.study.tableDataAll = data.study[0];
        this.study.totalPage = data.study[1];
        this.study.tableData = this.$commonfunc.pagination(this.study.tableDataAll, this.study.currentPage, this.study.pageSize);

        this.trait.tableDataAll = data.trait[0];
        this.trait.totalPage = data.trait[1];
        this.trait.tableData = this.$commonfunc.pagination(this.trait.tableDataAll, this.trait.currentPage, this.trait.pageSize);

        this.publication.tableDataAll = data.publication[0];
        this.publication.totalPage = data.publication[1];
        this.publication.tableData = this.$commonfunc.pagination(this.publication.tableDataAll, this.publication.currentPage, this.publication.pageSize);

      }).catch(err => {
        this.isloading = false;
      })
    },
    paginationProtein({currentPage, pageSize}) {
      this.protein.tableData = this.$commonfunc.pagination(this.protein.tableDataAll, currentPage, pageSize);
      this.protein.currentPage = currentPage;
      this.protein.pageSize = pageSize;
    },
    paginationStudy({currentPage, pageSize}) {
      this.study.tableData = this.$commonfunc.pagination(this.study.tableDataAll, currentPage, pageSize);
      this.study.currentPage = currentPage;
      this.study.pageSize = pageSize;
    },
    paginationTrait({currentPage, pageSize}) {
      this.trait.tableData = this.$commonfunc.pagination(this.trait.tableDataAll, currentPage, pageSize);
      this.trait.currentPage = currentPage;
      this.trait.pageSize = pageSize;
    },
    paginationPublication({currentPage, pageSize}) {
      this.publication.tableData = this.$commonfunc.pagination(this.publication.tableDataAll, currentPage, pageSize);
      this.publication.currentPage = currentPage;
      this.publication.pageSize = pageSize;
    }
  },
}
</script>

<style scoped>

</style>