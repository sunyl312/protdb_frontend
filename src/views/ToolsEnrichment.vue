<template>
  <v-sheet>
    <bread-crumb :breadcrumb-data="breadcrumbData"></bread-crumb>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="11">
        <v-sheet class="mb-2" min-height="600" rounded>

          <v-row class="py-1">

            <v-col cols="12">
              <v-sheet class="text-left my-1 text-h5 text-justify">
                <div :color="$store.state.mainColor">
                  Introduction
                </div>

              </v-sheet>
              <v-sheet class="text-justify my-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi maxime nisi omnis quisquam
                tempore voluptas? A aliquam aspernatur assumenda commodi explicabo iste magnam, nihil nobis officiis,
                veritatis voluptate voluptatem.
                <br/>

                <v-icon small>mdi-information-outline</v-icon>
                Please note the bubble chart shows only the top 20 terms at most.
              </v-sheet>

            </v-col>
            <v-col cols="12">
              <v-sheet class="px-4 py-2" min-height="500" outlined rounded>
                <v-row>
                  <v-col cols="3">
                    <v-sheet class="py-4 px-2" rounded>
                      <v-row>
                        <v-col cols="12">
                          <v-row>
                            <!--                            <v-spacer></v-spacer>-->
                            <v-col class="text-center">
                              <div class="text-h5 font-weight-bold text-center">Enrichment
                              </div>
                            </v-col>
                            <!--                            <v-spacer></v-spacer>-->

                          </v-row>
                        </v-col>
                        <v-col>
                          <v-divider></v-divider>
                        </v-col>
                        <v-col cols="12">
                          <div class="text-body-1 font-weight-bold text-start">Submit Task</div>
                        </v-col>
                        <v-col cols="12">

                          <v-sheet class="text-left  " height="40">
                            <v-row>
                              <v-col cols="12">
                                <div>
                                  <a class="my-auto " style="text-decoration: none ;" @click="demo('PROTEIN_ID')">#Demo1
                                    <help-msg>
                                      Metabolite names from Liu et.al. (PMID:<a
                                        href="https://pubmed.ncbi.nlm.nih.gov/31216740/" style="text-decoration: none"
                                        target="_blank">26549419</a>)
                                    </help-msg>
                                  </a> &nbsp; <a class="my-auto" style="text-decoration: none ;"
                                                 @click="demo('ENSG_ID')">#Demo2
                                  <help-msg>PubChem Cids from Liu et.al. (PMID:<a
                                      href="https://pubmed.ncbi.nlm.nih.gov/31216740/" style="text-decoration: none"
                                      target="_blank">26549419</a>), We use the "NameToCid" in MACdb to convert the
                                    metabolite names to PubchemCID
                                  </help-msg>
                                </a>&nbsp; <a class="my-auto" style="text-decoration: none ;" @click="demo('SYMBOL')">#Demo3
                                  <help-msg>PubChem Cids from Liu et.al. (PMID:<a
                                      href="https://pubmed.ncbi.nlm.nih.gov/31216740/" style="text-decoration: none"
                                      target="_blank">26549419</a>), We use the "NameToCid" in MACdb to convert the
                                    metabolite names to PubchemCID
                                  </help-msg>
                                </a>
                                </div>
                              </v-col>
                            </v-row>
                          </v-sheet>
                          <v-textarea v-model="input_ID_list"
                                      class="overflow-y-auto pt-2 pb-0"
                                      clear-icon="mdi-close-circle"
                                      clearable
                                      filled hide-details label="Metabolite Names / PubChem Cids " outlined
                                      row-height="10"
                                      rows="10">

                          </v-textarea>
                          <v-row align="center" class="my-1 ">


                            <v-col class="text-start" cols="8">

                              <v-select
                                  v-model="IDType"
                                  :items="IDTypeList"
                                  dense
                                  hide-details
                                  label="Input Type"
                                  outlined
                              >

                              </v-select>
                            </v-col>


                            <v-col class="text-end" cols="4">


                              <v-btn :color="$store.state.mainColor" :disabled="is.isCheckingStatus"
                                     :loading="is.submiting"
                                     class="px-1 white--text"
                                     elevation="0"
                                     small
                                     style="text-transform: none;"
                                     @click="submit"
                              >
                                <v-icon small>mdi-rocket-outline</v-icon>
                                Run
                              </v-btn>

                            </v-col>

                          </v-row>
                        </v-col>
                        <v-col cols="12">

                          <v-divider></v-divider>
                        </v-col>

                        <v-col cols="12">
                          <div class="text-body-1 font-weight-bold text-start">Check Task Status</div>
                        </v-col>

                        <v-col cols="12">

                          <v-row align="center">
                            <v-col cols="12">
                              <v-text-field v-model="taskid" clearable dense hide-details outlined placeholder="Task id"
                              ></v-text-field>
                            </v-col>
                            <v-col class="text-end" cols="12">
                              <v-btn v-if="taskid != null && taskid.trim() != ''"
                                     :color="$store.state.mainColor"
                                     class="white--text mx-1"
                                     small
                                     @click="copyTaskID(taskid)"
                              >
                                <v-icon color="white" small>mdi-content-copy</v-icon>
                              </v-btn>
                              <v-btn :color="$store.state.mainColor"
                                     :disabled="taskid == null || (taskid && taskid.trim() =='') "
                                     :loading="is.isCheckingStatus"
                                     class="px-2 white--text  mx-1" small
                                     style="text-transform: none"

                                     @click="checkTaskInterval"
                              >
                                <v-icon dark small>mdi-lightbulb</v-icon>&nbsp; Check
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12">
                          <v-divider></v-divider>

                        </v-col>
                        <v-col cols="12">
                          <div class="text-body-1 font-weight-bold text-start">Messages</div>
                        </v-col>
                        <v-col cols="12">

                          <v-sheet min-height="60">
                            <v-icon v-if="is.isCheckingStatus">mdi-timer-sand mdi-spin</v-icon>
                            {{ msg }}
                            <v-icon v-if="is.isShowCopy" @click="copyTaskID">mdi-content-copy</v-icon>
                          </v-sheet>
                        </v-col>
                        <v-col cols="12">
                          <v-divider></v-divider>
                        </v-col>
                        <v-col class="text-end" cols="12">
                          <v-btn :color="$store.state.mainColor" class="px-1 white--text" elevation="0"
                                 small
                                 style="text-transform: none" @click="resetAll">
                            <v-icon small>mdi-refresh</v-icon>
                            Reset All
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-sheet>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col cols="9">
                    <v-sheet class="mx-4">

                      <v-tabs v-model="$store.state.enrichtab" :color="$store.state.mainColor" centered>
                        <v-tab style="text-transform: none">
                          <v-icon v-show="task_status === true" color="primary">
                            mdi-check-circle-outline
                          </v-icon>
                          <v-icon
                              v-show="task_status != null && task_status === false">
                            mdi-loading mdi-spin
                          </v-icon>
                          Traits
                        </v-tab>
                        <v-tab style="text-transform: none">
                          <v-icon v-show="task_status === true" color="primary">
                            mdi-check-circle-outline
                          </v-icon>
                          <v-icon
                              v-show="task_status != null && task_status === false">
                            mdi-loading mdi-spin
                          </v-icon>
                          Disease
                        </v-tab>
                        <v-tab style="text-transform: none">
                          <v-icon v-show="task_status === true" color="primary">
                            mdi-check-circle-outline
                          </v-icon>
                          <v-icon
                              v-show="task_status != null && task_status === false">
                            mdi-loading mdi-spin
                          </v-icon>
                          Tissue
                        </v-tab>

                      </v-tabs>
                      <v-tabs-items v-model="$store.state.enrichtab">
                        <v-tab-item eager>
                          <v-sheet min-height="500">
                            <v-row>
                              <v-col cols="12" class="d-flex justify-center" >
                                <common-echarts v-if="task_status=='ok'" :chart-option="chartOption.trait"
                                                chart-height="500"></common-echarts>
                              </v-col>
                              <v-col cols="12">
                                <v-data-table
                                    :headers="tableData.trait.header"
                                    :items="tableData.trait.items"
                                    item-key="Trait_ontology_id"
                                    show-expand
                                    single-expand
                                    v-if="task_status=='ok'"
                                >
                                  <template v-slot:item.Trait_ontology_id="{item}">
                                    <a style="text-decoration: none"
                                       @click="$commonfunc.openAtNewPageTraitDetail(item.Trait_ontology_id)">{{
                                        item.Trait_ontology_id
                                      }}</a>
                                  </template>
                                  <template #expanded-item="{headers,item}">
                                    <td :colspan="headers.length">
                                      <v-sheet class="ma-4">
                                        <v-chip v-for="protein in  item.hits_data" :key="protein"
                                                :color="$store.state.mainColor" class="mx-2 my-1" dark small
                                                @click="$commonfunc.openAtNewPageProteinDetail(protein)">
                                          {{ protein }}
                                        </v-chip>
                                      </v-sheet>
                                    </td>
                                  </template>
                                </v-data-table>
                              </v-col>
                            </v-row>
                          </v-sheet>

                        </v-tab-item>
                        <v-tab-item eager>
                          <v-sheet  min-height="500">
                            <v-row>
                              <v-col cols="12" class="d-flex justify-center">
                                <common-echarts v-if="task_status=='ok'" :chart-option="chartOption.disease"
                                                chart-height="500"></common-echarts>
                              </v-col>
                              <v-col cols="12">
                                <v-data-table
                                    :headers="tableData.disease.header"
                                    :items="tableData.disease.items"
                                    item-key="Disease_onto_id"
                                    show-expand
                                    single-expand
                                    v-if="task_status=='ok'"
                                >
                                  <template v-slot:item.Disease_onto_id="{item}">
                                    <a style="text-decoration: none"
                                    >{{ item.Disease_onto_id }}</a>
                                  </template>
                                  <template #expanded-item="{headers,item}">
                                    <td :colspan="headers.length">
                                      <v-sheet class="ma-4">
                                        <v-chip v-for="protein in  item.hits_data" :key="protein"
                                                :color="$store.state.mainColor" class="mx-2 my-1" dark small
                                                @click="$commonfunc.openAtNewPageProteinDetail(protein)">
                                          {{ protein }}
                                        </v-chip>
                                      </v-sheet>
                                    </td>
                                  </template>
                                </v-data-table>
                              </v-col>
                            </v-row>
                          </v-sheet>
                        </v-tab-item>
                        <v-tab-item eager>
                          <v-sheet  min-height="500">
                            <v-row>
                              <v-col cols="12" class="d-flex justify-center">
                                <common-echarts v-if="task_status=='ok'" :chart-option="chartOption.tissue"
                                                chart-height="500"></common-echarts>
                              </v-col>
                              <v-col cols="12">
                                <v-data-table
                                    :headers="tableData.tissue.header"
                                    :items="tableData.tissue.items"
                                    item-key="Tissue_onto_id"
                                    show-expand
                                    single-expand
                                    v-if="task_status=='ok'"
                                >
                                  <template v-slot:item.Tissue_onto_id="{item}">
                                    <a style="text-decoration: none"
                                    >{{ item.Tissue_onto_id }}</a>
                                  </template>
                                  <template #expanded-item="{headers,item}">
                                    <td :colspan="headers.length">
                                      <v-sheet class="ma-4">
                                        <v-chip v-for="protein in  item.hits_data" :key="protein"
                                                :color="$store.state.mainColor" class="mx-2 my-1" dark small
                                                @click="$commonfunc.openAtNewPageProteinDetail(protein)">
                                          {{ protein }}
                                        </v-chip>
                                      </v-sheet>
                                    </td>
                                  </template>
                                </v-data-table>
                              </v-col>
                            </v-row>

                          </v-sheet>

                        </v-tab-item>
                      </v-tabs-items>
                      <!--                      {{ this.tableData }}-->
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

  </v-sheet>
</template>

<script>
import Axios from 'axios'
import HelpMsg from "@/components/helpMsg";
import BreadCrumb from "@/components/breadCrumb";
import CommonEcharts from "@/components/commonEcharts";


export default {
  name: "ToolEnrichment",
  components: {CommonEcharts, BreadCrumb, HelpMsg},
  data() {
    return {

      is_expand: true,
      // enrichtab: null,
      breadcrumbData: [
        {
          text: "protdb",
          disabled: false,
          href: baseURL + "/home"
        },
        {
          text: "tookit",
          disabled: true,
        }, {
          text: "Enrichment",
          disabled: true,
        },
      ],
      input_ID_list: "",
      loading: false,
      taskid: null,
      // example: "Isoleucine\n" +
      //   "Glutamine\n" +
      //   "Glutamate\n" +
      //   "Creatine\n" +
      //   "myoinositol\n" +
      //   "Alanine\n" +
      //   "PC ae C40:6\n" +
      //   "lysoPC a C26:0\n" +
      //   "PC ae C40:2\n",
      example3: "94154\n" +
          "6255\n" +
          "871\n" +
          "439242\n" +
          "6251\n" +
          "135398641\n" +
          "10975657\n" +
          "5793\n" +
          "222285\n",
      example2: "Arabitol\n" +
          "Maltose\n" +
          "Maltotriose\n" +
          "Raffinose\n" +
          "Mannitol\n" +
          "Inosine\n" +
          "Ribose\n" +
          "Glucose\n" +
          "Erythritol\n",
      example1: "P11142\n" +
          "Q15485\n" +
          "P61981\n" +
          "P09237\n" +
          "P07195\n" +
          "Q99983\n" +
          "P50395\n" +
          "P31946\n" +
          "P49840\n" +
          "P05089\n" +
          "P08575\n" +
          "P23142\n" +
          "P22749\n" +
          "P16671\n" +
          "P06744\n" +
          "P07478\n" +
          "O60911\n" +
          "P10082\n" +
          "P12956\n" +
          "Q14498\n" +
          "O15444\n" +
          "P68431\n" +
          "P00558\n" +
          "P43490\n" +
          "Q12884\n" +
          "P17213\n" +
          "Q9HD89\n" +
          "P35247\n" +
          "Q9UHY7\n" +
          "O75636\n" +
          "P49908\n" +
          "P06241\n" +
          "O95183\n" +
          "P02679\n" +
          "P01127\n" +
          "P04075\n" +
          "Q99988\n" +
          "P12277\n" +
          "P04406\n" +
          "Q9NQW7\n" +
          "P22894\n" +
          "P20839\n" +
          "P08603\n" +
          "Q4KMG0\n" +
          "P25098\n" +
          "Q16853",
      task_status: null,
      is: {
        RunDemo: false,
        uploading: true,
        submiting: false,
        isCheckingStatus: false,
        isShowCopy: false,
      },
      msg: "",
      checkInterval: 5000,
      IDType: "PROTEIN_ID",
      checkTaskTimer: null,
      IDTypeList: [
        {
          text: "Uniprot ID",
          value: "PROTEIN_ID"
        },
        {
          text: "Ensembl Gene ID",
          value: "ENSG_ID"
        },
        {
          text: "Gene Symbol",
          value: "SYMBOL"
        },
      ],
      // singleEnrichment: {
      //   enrich_trait: {
      //     isok: null,
      //   },
      //   enrich_cancer: {
      //     isok: null,
      //   }
      // },
      dat: {
        trait: [],
        disease: [],
        tissue: [],
      },
      datTop: {
        trait: [],
        disease: [],
        tissue: [],
      },
      chartData: {
        trait: {},
        disease: {},
        tissue: {},
      },
      chartOption: {
        trait: {},
        disease: {},
        tissue: {},
      },
      tableData: {
        trait: {
          header: [],
          items: [],
          expand: []
        },
        disease: {
          header: [],
          items: [],
          expand: []
        },
        tissue: {
          header: [],
          items: [],
          expand: []
        },
      }
    }

  },
  watch: {
    "input_ID_list": {
      handler: function (newval) {
        if (this.input_ID_list != null) {
          if (this.input_ID_list != this.example) {

            this.is.RunDemo = false
          }

        }

      },
      deep: true,
      immediate: true,
    },
    task_status(newval) {
      if (newval == 'ok') {
        this.loadData();
      }
    }

  },
  methods: {
    // resetEnrichStatus(flag = true) {
    //   // console.log("resetEnrichStatus")
    //
    //   Object.keys(this.singleEnrichment).forEach(k => {
    //     // console.log(k)
    //     this.singleEnrichment[k]['isok'] = flag
    //
    //   })
    // },
    // assignEnrichStatus(enrichmentOjb) {
    //   if (enrichmentOjb.enrich_trait.status == "ok") {
    //     this.singleEnrichment.enrich_trait.isok = true
    //   }
    //
    //   if (enrichmentOjb.enrich_cancer.status == "ok") {
    //     this.singleEnrichment.enrich_cancer.isok = true
    //   }
    //
    // },
    setMessage(msg) {
      this.msg = msg
    },
    submit() {
      if (this.input_ID_list != null && this.input_ID_list.trim() != "") {
        this.is.submiting = true
        this.task_status = null
        this.is.uploading = true
        // this.resetEnrichStatus(null)
        this.task_status = null
        let cleanstr = this.input_ID_list.replace(/\n/g, "%@&@%")
        // console.log( cleanstr)
        let formData = new FormData();
        formData.append("nameFile", this.originName)
        Axios.post(
            baseURL + "/api/tool_enrichment",
            {},
            {
              params: {
                nameString: cleanstr,
                nameType: this.IDType
              }
            }
        ).then(res => {
          this.resetMessage()
          this.is.submiting = false
          this.taskid = res.data
          this.setMessage("Your data has been submitted successfully with Task ID:" + this.taskid, true)
          this.is.isShowCopy = true;
          this.checkTaskInterval();
          // if(this.is.RunDemo ==true){
          //
          // }
        })


      }
    },
    demo(k) {
      if (k == "PROTEIN_ID") {
        this.input_ID_list = this.example1;
        this.IDType = "PROTEIN_ID";
        this.is.RunDemo = true;
      } else if (k == 'ENSG_ID') {
        this.input_ID_list = this.example2;
        this.IDType = "ENSG_ID";
        this.is.RunDemo = true;

      } else if (k == 'SYMBOL') {
        this.input_ID_list = this.example3;
        this.IDType = "SYMBOL";
        this.is.RunDemo = true;

      }

    },
    resetMessage() {

      this.is.isShowCopy = false;
      this.is.timesand = false;
    },
    copyTaskID() {

      this.$copyText(this.taskid).then(function (e) {
            alert('Copied')
          }, function (e) {
            alert('Can not copy')
          }
      )
    },
    checkTaskInterval() {

      if (this.taskid != null && this.taskid && this.taskid.trim() != "") {
        this.is.isCheckingStatus = true;
        this.setMessage("Checking Task: " + this.taskid + " status...")
        this.singleRunCheck();

        // this.resetEnrichStatus(null); //将所有都设置为 false 表示都在loading
        this.task_status = null;
        this.checkTaskTimer = window.setInterval(this.singleRunCheck, this.checkInterval);
      }
    },
    singleRunCheck() {

      Axios.get(
          baseURL + "/api/tool_enrichment_task_status",
          {
            params: {
              taskid: this.taskid.trim()
            }
          }
      ).then(res => {
        // console.log(this.taskid)
        // console.log(res.data)
        this.task_status = res.data.total_status
        if (this.task_status == "ok") {
          window.clearInterval(this.checkTaskTimer);
          this.resetMessage()
          this.is.isCheckingStatus = false;
          this.setMessage("Task: " + this.taskid + " is done")

          // 修改 enrichment 单个的状态，
          // this.assignEnrichStatus(enrichments)
        } else if (this.task_status == "error") {
          window.clearInterval(this.checkTaskTimer);
          this.resetMessage()
          this.is.isCheckingStatus = false;
          // this.resetEnrichStatus(null)
          this.setMessage("Task: " + this.taskid + " has error...")
        } else if (this.task_status == "no_exists") {
          window.clearInterval(this.checkTaskTimer);
          this.resetMessage()
          this.is.isCheckingStatus = false;
          // this.resetEnrichStatus(null);
          this.setMessage("Task: " + this.taskid + " does not exists...")
        } else if (this.task_status == "running") {
          this.resetMessage()
          this.setMessage("Task: " + this.taskid + " is running...")
          // this.assignEnrichStatus(enrichments)
        }

      });

    },
    loadData() {
      Axios.get(baseURL + "/api/tool_enrichment_get_data", {
        params: {
          taskid: this.taskid,
          type: this.IDType,
        }
      }).then(res => {

        this.dat.trait = res.data.trait
        this.dat.disease = res.data.disease
        this.dat.tissue = res.data.tissue
        this.dat.trait = this.sortData(this.dat.trait)
        this.dat.disease = this.sortData(this.dat.disease)
        this.dat.tissue = this.sortData(this.dat.tissue)

        this.datTop.trait = this.dat.trait.slice(0, 20) //图中最多显示多少个结果
        this.datTop.disease = this.dat.disease.slice(0, 20) //图中最多显示多少个结果
        this.datTop.tissue = this.dat.tissue.slice(0, 20) //图中最多显示多少个结果

        //trait
        this.chartData.trait.data = this.datTop.trait.map(item => {
          return [item.meta.Trait_ontology_name, item.adjp, item.hits]
        })
        this.chartData.trait.maxDotSize = _.maxBy(this.datTop.trait, "hits")['hits']
        this.chartData.trait.maxPval = _.maxBy(this.datTop.trait, "adjp")['adjp']
        this.chartOption.trait = this.buildChartOption("Trait", "Trait Name", this.chartData.trait)
        this.tableData.trait = this.buildTableData(this.dat.trait, {
          "Trait Ontology ID": "Trait_ontology_id",
          "Trait Ontology": "Trait_ontology_name",
        });

        //disease
        this.chartData.disease.data = this.datTop.disease.map(item => {
          return [item.meta.Disease_type, item.adjp, item.hits]
        })
        this.chartData.disease.maxDotSize = _.maxBy(this.datTop.disease, "hits")['hits']
        this.chartData.disease.maxPval = _.maxBy(this.datTop.disease, "adjp")['adjp']
        this.chartOption.disease = this.buildChartOption("Disease", "Disease Name", this.chartData.disease)
        this.tableData.disease = this.buildTableData(this.dat.disease, {
          "Disease Ontology ID": "Disease_onto_id",
          "Disease": "Disease_type",
        });
        //tissue
        this.chartData.tissue.data = this.datTop.tissue.map(item => {
          return [item.meta.Tissue, item.adjp, item.hits]
        })
        this.chartData.tissue.maxDotSize = _.maxBy(this.datTop.tissue, "hits")['hits']
        this.chartData.tissue.maxPval = _.maxBy(this.datTop.tissue, "adjp")['adjp']
        this.chartOption.tissue = this.buildChartOption("Tissue", "Tissue Name", this.chartData.tissue)
        this.tableData.tissue = this.buildTableData(this.dat.tissue, {
          "Tissue Ontology ID": "Tissue_onto_id",
          "Tissue": "Tissue",
        });

        // this.pagination.totalPage = this.dat && this.dat.length || 10
        // this.setChartOption(); // 生成作图的配置文件

        // console.log("Enrichment Sub Cancer Running...")

      })
    },
    sortData(dat, by = "p", desc = false) {
      return dat.sort((x, y) => {
        if (desc == false) {
          return x[by] - y[by]
        } else {
          return y[by] - x[by]
        }
      })
    },
    /**
     *
     * @param 图的名字
     * @param 横坐标轴的名称
     * @param chartData
     * @returns {{yAxis: {axisLabel: {color: string}, min: number, max: number, name: string, nameGap: number, nameLocation: string, type: string, nameTextStyle: {color: string, fontSize: number}}, xAxis: {axisLabel: {rotate: number, padding: number[], color: string, interval: number, align: string}, inverse: boolean, splitArea: {show: boolean}, name, splitLine: {show: boolean}, nameLocation: string, type: string, nameTextStyle: {color: string, fontSize: number}}, grid: {top: string, left: string, bottom: string, right: string}, series: [{encode: {x: number[], y: number[]}, data, symbolSize: (function(*): *), type: string}], toolbox: {feature: {saveAsImage: {pixelRatio: number, name: string, title: string}}}, tooltip: {formatter: (function(*): string), show: boolean}}}
     */
    buildChartOption(name, xName, chartData) {

      let remapping = function (k, inmax, outmin = 5, outmax = 30) {
        let inmin = 0
        return ((k - inmin) * (outmax - outmin) / (inmax - inmin) + outmin)
      }
      let that = this
      return {
        // color:"rgba(12,217,151,0.8)",

        toolbox: {
          feature: {
            saveAsImage: {
              // type:"svg",
              title: "save",
              name: "MACdb_Enrichment_" + name,
              pixelRatio: 4,
            }
          }
        },

        // color: ['#61a0a8'],
        grid: {
          top: '5%',
          left: "10%",
          right: "10%",
          bottom: "30%"

        },
        yAxis: {
          name: "Adjust P value(-log10)",
          nameLocation: "middle",

          type: "value",
          min: -0.1,
          max: Math.ceil(chartData.max_logp),
          nameGap: 25,
          nameTextStyle: {
            fontSize: 12,
            color: "black",
          },
          axisLabel: {
            color: "black",
          },


        },
        xAxis: {
          name: xName,
          nameLocation: "end",
          // nameGap:"10%",
          nameTextStyle: {
            fontSize: 12,
            color: "black",
          },
          inverse: false,
          type: "category",
          splitArea: {
            show: true,
          },
          splitLine: {
            show: true,
          },
          axisLabel: {
            // width: 120,
            rotate: 45,
            color: "black",
            align: "right",
            // overflow: "break",
            padding: [1, 6, 1, 1],
            // hideOverlap:false,
            // showMinLabel:true,
            // showMaxLabel:true,
            // fontSize: 110,
            interval: 0,
          }
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            return `<div style="text-align: start" >Name: &nbsp; ${params.data[0]} </div><div style="text-align: start">Adjust Pval: &nbsp; ${params.data[3]}</div><div style="text-align: start">Hits: &nbsp; ${params.data[2]}</div>`
          }

        },

        series: [
          {
            symbolSize: function (val) {
              return remapping(val[2], chartData.maxDotSize);
            },
            data: chartData.data,
            type: 'scatter',
            encode: {
              x: [0],
              y: [1],

            },

          }
        ]

      }


    },

    /**
     *
     * @param 后台请求回来的enrichment数据
     * @param 后台每个数据中meta中那些需要展示到表格中，表头名字是什么
     * @returns {{header: [{text: string, value: string},{text: string, value: string},{text: string, value: string}], items: *}}
     */
    buildTableData(dat, propertyMapping = {}) {

      let header = [
        {text: 'Hits', value: 'hits'},
        {text: 'Adjust P-value', value: 'adjp'},
        {text: 'Count', value: 'each_count'},
      ]
      for (let k in propertyMapping) {
        header.unshift({
          text: k, value: propertyMapping[k]
        });
      }
      header.unshift({text: '', value: 'data-table-expand'})

      let items = dat.map(item => {
        let newitem = {}
        for (let [k, v] of Object.entries(item)) {
          if (k != 'meta') {
            newitem[k] = v
          } else {
            // console.log(v)
            for (let [metak, metav] of Object.entries(v)) {
              if (Object.values(propertyMapping).includes(metak)) {
                newitem[metak] = metav
              }
            }
          }
        }
        return newitem
      });

      return {
        header: header,
        items: items
      }


    },

    resetAll() {
      this.input_ID_list = ""
      this.taskid = null;
      this.task_status = null;
      this.is.RunDemo = false;
      this.is.uploading = false;
      this.is.submiting = false;
      this.is.isCheckingStatus = false;
      this.is.isShowCopy = false;
      this.msg = "";
      this.IDType = true;
      // this.resetEnrichStatus(null)
      window.clearInterval(this.checkTaskTimer);
    }
  },
  beforeDestroy() {
    window.clearInterval(this.checkTaskTimer)
  },

}
</script>

<style scoped>

</style>
