<template>
  <div>
    <bread-crumb :breadcrumb-data="breadcrumbData"></bread-crumb>

    <v-sheet class="pa-3">
      <v-sheet min-height="40">
        <v-btn v-show="!expandFilter" :color="$store.state.mainColor" dark elevation="0" small
               style="text-transform: none"
               @click="expandFilter=!expandFilter">Filters
          <v-icon v-show="!expandFilter" small>mdi-chevron-double-down</v-icon>
          <v-icon v-show="expandFilter" small>mdi-chevron-double-up</v-icon>
        </v-btn>
        <v-btn v-show="expandFilter" :color="$store.state.mainColor" dark elevation="0" small
               style="text-transform: none"
               @click="expandFilter=!expandFilter">Filters
          <v-icon v-show="!expandFilter" small>mdi-chevron-double-down</v-icon>
          <v-icon v-show="expandFilter" small>mdi-chevron-double-up</v-icon>
        </v-btn>
      </v-sheet>
      <v-row>
        <v-col v-show="expandFilter" cols="3">
          <ontology-tree :items="tree.items" :is-loading="tree.isLoading"  @selectedDOIDchange="updateData"></ontology-tree>
        </v-col>
        <v-col :cols="expandFilter? 9:12">
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

                <browse-protein-table :protein="protein" reftoobar="xToolbarBrowseProtein">
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
  </div>
</template>

<script>
import OntologyTree from "@/components/ontologyTree";
import BreadCrumb from "@/components/breadCrumb";
import Axios from "axios";
import BrowseProteinTable from "@/components/browseProteinTable";
import BrowseTraitTable from "@/components/browseTraitTable";
import BrowseStudyTable from "@/components/browseStudyTable";
import BrowsePublicationTable from "@/components/browsePublicationTable";
import QS from 'qs';

export default {
  name: "TissueAll",
  components: {
    BrowsePublicationTable,
    BrowseStudyTable,
    BrowseTraitTable,
    BrowseProteinTable,
    BreadCrumb,
    OntologyTree
  },
  data() {
    return {
      tab: 0,
      breadcrumbData: [
        {
          text: "protdb",
          disabled: false,
          href: baseURL + '/'
        },
        {
          text: "tissue",
          disabled: false,
          href: baseURL + '/tissue'
        },
        {
          text: "all",
          disabled: true,
        },
      ],
      expandFilter: true,
      id_list: [],
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
      tree:{
        items:[],
        isLoading:false,
      }
    }
  },
  mounted() {
    this.loadDataProtein();
    this.loadDataTrait();
    this.loadDataPublication();
    this.loadDataStudy();
    this.loadTreeData();
  },
  methods: {
    loadTreeData() {
      this.tree.isLoading = true;
      Axios.get(
          baseURL + "/api/get_bto_list"
      ).then(res => {
        this.tree.items = JSON.parse(res.data);
        this.updateTree()
        this.tree.isLoading = false;
      }).catch(err => {
        this.tree.isLoading = false;
      })
    },
    updateData(selectedItems) {
      let x = [];

      // 下方的把所有的currentPage重置为1 这样保证每次点击不同的disease type的时候页码会回到第一页。
      this.protein.currentPage = 1;
      this.trait.currentPage = 1;
      this.publication.currentPage = 1;
      this.study.currentPage = 1;
      selectedItems.forEach(item => {
        x.push(item.original_id)
      })
      this.id_list = x;
      this.loadDataProtein();
      this.loadDataTrait();
      this.loadDataPublication();
      this.loadDataStudy();

    },
    loadDataProtein() {
      this.protein.pageLoading = true;
      // console.log(this.doid_list)
      Axios.post(
          baseURL + "/api/browse_protein",
          {},
          {
            params: {
              page_number: this.protein.currentPage,
              page_size: this.protein.pageSize,
              tissue_id: this.id_list,
              // 搜索 fastapi axios array如何传输,

            },
            paramsSerializer: function (params) {
              return QS.stringify(params, {arrayFormat: 'repeat'})
            },
          }
      ).then(res => {
        this.protein.pageLoading = false;
        let data = JSON.parse(res.data);
        this.protein.tableData = data[0];
        this.protein.totalPage = data[1];
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
              tissue_id: this.id_list,
            }
            , paramsSerializer: function (params) {
              return QS.stringify(params, {arrayFormat: 'repeat'})
            },
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
              tissue_id: this.id_list,
            }
            , paramsSerializer: function (params) {
              return QS.stringify(params, {arrayFormat: 'repeat'})
            },
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
              tissue_id: this.id_list,
            }
            , paramsSerializer: function (params) {
              return QS.stringify(params, {arrayFormat: 'repeat'})
            },
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

  }
}
</script>

<style scoped>

</style>