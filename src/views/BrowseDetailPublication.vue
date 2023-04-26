<template>
  <v-sheet class="mx-4">
    <bread-crumb :breadcrumb-data="breadcrumbData"></bread-crumb>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card>
          <expand-panel :title-name="this_id">
            <v-row align="center">
              <v-col cols="12"  class="ml-6">
                <div class="text-h5 font-weight-bold text-left">{{detailed_clean.Title || ""}}</div>
              </v-col>

              <v-spacer></v-spacer>
            </v-row>
            <v-row>
              <v-col cols="2"  class="text-left">
                <span class="text-body-1 font-weight-bold " >PubMed ID:</span> <span> {{detailed_clean.PMID}}  </span> <v-icon color="blue" small @click="$commonfunc.goOuterLinkPubmed(detailed_clean.PMID)">mdi-share</v-icon>
              </v-col>
              <v-col cols="2"  class="text-left">
                <span class="text-body-1 font-weight-bold " >Journal:</span> <span> {{detailed_clean.Journal_Title}}  </span>
              </v-col>
              <v-col cols="1"  class="text-left">
                <span class="text-body-1 font-weight-bold " >Volume:</span> <span> {{detailed_clean.publish_info.vol}}  </span>
              </v-col>
              <v-col cols="1"  class="text-left">
                <span class="text-body-1 font-weight-bold " >Issue:</span> <span> {{detailed_clean.publish_info.issue}}  </span>
              </v-col>
              <v-col cols="1"  class="text-left">
                <span class="text-body-1 font-weight-bold " >Pages:</span> <span> {{detailed_clean.publish_info.page}}  </span>
              </v-col>
              <v-col cols="2"  class="text-left">
                <span class="text-body-1 font-weight-bold " >Date:</span> <span> {{detailed_clean.publish_info.date}}  </span>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" >
                <v-sheet  class="text-left" ><span class="text-body-1 font-weight-bold " >Authors:</span></v-sheet>
                <v-sheet class="text-body-2 text-justify" >{{ detailed_clean.Authors_Full_Name && detailed_clean.Authors_Full_Name.split("||").join("; ") || ""}}</v-sheet>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" >
                <v-sheet  class="text-left" ><span class="text-body-1 font-weight-bold " >Abstract:</span></v-sheet>
                <v-sheet class="text-body-2 text-justify" >{{detailed_clean.Abstract}}</v-sheet>
              </v-col>
            </v-row>
<!--            <v-row>-->
<!--              <v-col cols="12" >-->
<!--                <v-sheet  class="text-left" ><span class="text-body-1 font-weight-bold " >Conclusion(s):</span></v-sheet>-->
<!--                <v-sheet class="text-body-2 text-justify" >-->
<!--                  <v-list>-->
<!--                    <v-list-item v-for="x in detail.conclusion" dense :key="x" v-if="x!=null && ( x.trim() != 'nan')">-->
<!--                      <v-sheet >-->
<!--                        <v-list-item-icon><v-icon>mdi-menu-right</v-icon></v-list-item-icon>-->

<!--                        {{$commonfunc.capitalize (x.trim())}}-->
<!--                      </v-sheet>-->

<!--                    </v-list-item>-->
<!--                  </v-list>-->
<!--                  &lt;!&ndash;                  {{Data.conclusion}}&ndash;&gt;-->
<!--                </v-sheet>-->
<!--              </v-col>-->
<!--            </v-row>-->
          </expand-panel>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <expand-panel title-name="Related Inforamtion">
            <v-tabs v-model="tabkey" :color="$store.state.mainColor">
              <v-tab style="text-transform: none;">Protein</v-tab>
              <v-tab style="text-transform: none;">Study</v-tab>
              <v-tab style="text-transform: none;">Trait</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tabkey">
              <!--Protein-->
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
                        @page-change="paginationProtein"
                    >
                    </vxe-pager>
                  </template>
                </browse-protein-table>
              </v-tab-item>
              <!--Study-->
              <v-tab-item>
                <browse-study-table :study="study">
                  <template #header>
                    <vxe-pager
                        :current-page="protein.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="protein.pageLoading"
                        :page-size="protein.pageSize"
                        :total="protein.totalPage"
                        @page-change="paginationStudy"
                    ></vxe-pager>
                  </template>
                  <template #footer>
                    <vxe-pager
                        :current-page="protein.currentPage"
                        :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                        :loading="protein.pageLoading"
                        :page-size="protein.pageSize"
                        :total="protein.totalPage"
                        @page-change="paginationStudy"
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

export default {
  name: "BrowseDetailPublication",
  components: {
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
          text: "publication",
          disabled: true,
        },
        {
          text: this.$route.params.publication_id,
          disabled: true,
        },
      ],
      this_id: this.$route.params.publication_id,
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
  computed:{
    detailed_clean(){
      if (this.detail == null){
        return {}
      }else{
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
              by: this.$route.params.publication_id,
              by_type: "publication"
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