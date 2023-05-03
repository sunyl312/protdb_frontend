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
                              <div class="text-h5 font-weight-bold text-center">Batch Annotation
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
                      <browse-protein-table :protein="protein"  ></browse-protein-table>
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
import BrowseProteinTable from "@/components/browseProteinTable";


export default {
  name: "ToolsBatchAnnotation",
  components: {BrowseProteinTable, CommonEcharts, BreadCrumb, HelpMsg},
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
          text: "Batch Annotation",
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
      protein: {
        tableData: [],
        tableDataAll: [],
        currentPage: 1,
        pageSize: 10,
        totalPage: 10,
        pageLoading: false,
      },
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
            baseURL + "/api/tool_batchanno",
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
          baseURL + "/api/tool_batchanno_task_status",
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
      this.protein.pageLoading = true;
      Axios.get(baseURL + "/api/tool_batchanno_get_data", {
        params: {
          taskid: this.taskid,
          type: this.IDType,
        }
      }).then(res => {

        this.protein.tableData = res.data.protein[0];
        this.protein.totalPage = res.data.protein[1];
        this.protein.pageLoading = false;

      })
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
