<template>
  <v-sheet class="mx-4">
    <bread-crumb :breadcrumb-data="breadcrumbData"></bread-crumb>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <expand-panel :title-name="this_id">
            <v-row>
              <v-col cols="2">
                <detail-page-block text-align="left">
                  <template #name>
                    Uniprot Eetry
                  </template>
                  <template #content>
                    {{ detail.Entry_Name }}
                  </template>
                </detail-page-block>
              </v-col>
              <v-col cols="2">
                <detail-page-block>
                  <template #name>
                    Protein Names
                  </template>
                  <template #content>
                    {{ detail.Protein_names }}
                  </template>
                </detail-page-block>
              </v-col>
              <v-col cols="2">
                <detail-page-block>
                  <template #name>
                    Gene Name
                  </template>
                  <template #content>
                    {{ detail.Gene_Names_primary }}
                  </template>
                </detail-page-block>
              </v-col>
              <v-col cols="2">
                <detail-page-block>
                  <template #name>
                    Length
                  </template>
                  <template #content>
                    {{ detail.Length }}
                  </template>
                </detail-page-block>
              </v-col>
              <v-col cols="2">
                <detail-page-block>
                  <template #name>
                    Mass
                  </template>
                  <template #content>
                    {{ detail.Mass }}
                  </template>
                </detail-page-block>
              </v-col>

            </v-row>
            <v-row>

            </v-row>
            <v-row>
              <v-col cols="4">
                <detail-page-block :outlined="true" align="start" min-height="250" rounded="true"
                                   text-align="text-justify">
                  <template #name>
                    Interacts With
                  </template>
                  <template #content>
                    <v-sheet :max-height="blockHeight" :min-height="blockHeight" class="overflow-y-auto" outlined>
                      <v-sheet
                          v-for="item in detail && detail.Interacts_with && detail.Interacts_with.split(/; /).filter(x=> x.length >0) || []"
                          class="ma-2 pa-2">
                        {{ item }}
                      </v-sheet>
                    </v-sheet>

                  </template>
                </detail-page-block>
              </v-col>


              <v-col cols="4">
                <detail-page-block :outlined="true" :rounded="true" align="start" left-col="2" min-height="250"
                                   right-col="10" text-align="text-justify">
                  <template #name>
                    Function
                  </template>
                  <template #content>
                    <v-sheet :max-height="blockHeight" :min-height="blockHeight" class="overflow-y-auto" outlined>
                      <v-sheet
                          v-for="item in detail && detail.Function_CC && detail.Function_CC.split(/FUNCTION:/).filter(x=> x.length >0) || []"
                          class="ma-2 pa-2">
                        <v-icon>mdi-chevron-right</v-icon>
                        {{ item }}
                      </v-sheet>
                    </v-sheet>
                  </template>
                </detail-page-block>
              </v-col>
              <v-col cols="4">
                <detail-page-block :outlined="true" :rounded="true" align="start" left-col="2" min-height="250"
                                   right-col="10" text-align="text-justify">
                  <template #name>
                    Subunit Structure
                  </template>
                  <template #content>
                    <v-sheet :max-height="blockHeight" :min-height="blockHeight" class="overflow-y-auto" outlined>
                      <v-sheet
                          v-for="item in detail && detail.Subunit_structure && detail.Subunit_structure.split(/SUBUNIT:/).filter(x=> x.length >0) || []"
                          class="ma-2 pa-2">
                        <v-icon>mdi-chevron-right</v-icon>
                        {{ item }}
                      </v-sheet>
                    </v-sheet>

                  </template>
                </detail-page-block>
              </v-col>
            </v-row>

            <v-row>


              <v-col cols="6">
                <detail-page-block :outlined="true" :rounded="true" align="start" left-col="2" min-height="250"
                                   right-col="10" text-align="text-justify">
                  <template #name>
                    Visualization
                  </template>
                  <template #content>
                    <v-sheet class="overflow-y-auto pa-3" outlined >
                      <v-tabs v-model="vis_tab">
                        <v-tab style="text-transform: none">Genome Browser</v-tab>
                        <v-tab style="text-transform: none">3D Structure</v-tab>
                      </v-tabs>
                      <v-tabs-items v-model="vis_tab">
                        <v-tab-item>
                          <v-sheet>
                            <visualize-genome-browser :uniprot_id="this_id"></visualize-genome-browser>
                          </v-sheet>

                        </v-tab-item>
                        <v-tab-item>
                          <v-sheet>
                            <visualize3-dmol :uniprot_id="this_id"></visualize3-dmol>
                          </v-sheet>

                        </v-tab-item>
                      </v-tabs-items>
                    </v-sheet>
                  </template>
                </detail-page-block>
              </v-col>


              <v-col cols="6">
                <detail-page-block>
                  <template #name>
                    Aggregated Datasets
                  </template>
                  <template #content>
                    <aggr-dataset-all :protein_id="this_id"></aggr-dataset-all>
                  </template>
                </detail-page-block>

              </v-col>
            </v-row>

            <!--          {{ this.detail }}-->
          </expand-panel>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <expand-panel title-name="Related Inforamtion">
            <v-tabs v-model="tabkey" :color="$store.state.mainColor">
              <v-tab style="text-transform: none;">Study</v-tab>
              <v-tab style="text-transform: none;">Trait</v-tab>
              <v-tab style="text-transform: none;">Publication</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tabkey">
              <!--Study-->
              <v-tab-item>
                <browse-study-table :study="study">
                  <template #header>
                    <vxe-pager
                        :current-page="study.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="study.pageLoading"
                        :page-size="study.pageSize"
                        :total="study.totalPage"
                        @page-change="paginationProtein"
                    ></vxe-pager>
                  </template>
                  <template #footer>
                    <vxe-pager
                        :current-page="study.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="study.pageLoading"
                        :page-size="study.pageSize"
                        :total="study.totalPage"
                        @page-change="paginationProtein"
                    ></vxe-pager>
                  </template>
                </browse-study-table>
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
import VisualizeGenomeBrowser from "@/components/visualizeGenomeBrowser";
import AggrDatasetAll from "@/components/aggrDatasetAll";
import Visualize3Dmol from "@/components/visualize3Dmol";

export default {
  name: "BrowseDetailProtein",
  components: {
    Visualize3Dmol,
    AggrDatasetAll,
    VisualizeGenomeBrowser,
    DetailPageBlock,
    BrowseTraitTable, BrowsePublicationTable, BrowseStudyTable, BrowseProteinTable, ExpandPanel, BreadCrumb
  },
  data() {
    return {
      vis_tab: 0,
      tabkey: null,
      blockHeight: 150,
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
          text: "protein",
          disabled: true,
        },
        {
          text: this.$route.params.protein_id,
          disabled: true,
        },
      ],
      this_id: this.$route.params.protein_id,
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
  methods: {
    loadData() {
      this.isloading = true
      Axios.post(
          baseURL + "/api/browse_related_three_by_one",
          {},
          {
            params: {
              by: this.$route.params.protein_id,
              by_type: "protein"
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