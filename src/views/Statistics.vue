<template>
  <v-sheet class="mx-4">
    <bread-crumb :breadcrumb-data="breadcrumbData"></bread-crumb>
    <v-sheet>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="11"
        >
          <v-row>
            <v-col cols="6" lg="6" md="12" sm="12" xl="6">
              <v-card outlined>
                <v-card-subtitle class="font-weight-bold">
                  3D mol
                </v-card-subtitle>
                <v-card-text>
<!--                  <component   src="https://3Dmol.org/build/3Dmol-min.js" async ></component>-->
                  <div style="height: 400px; width: 400px; position: relative;" class='viewer_3Dmoljs' data-pdb='2POR' data-backgroundcolor='0xffffff' data-style='stick' ></div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" lg="6" md="12" sm="12" xl="6">
              <v-card outlined>
                <v-card-subtitle class="font-weight-bold">
                  Number of Publications
                </v-card-subtitle>
                <v-card-text>
                  <common-echarts :chart-option="chartOptionPubTimeLine"></common-echarts>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" lg="6" md="12" sm="12" xl="6">
              <v-card outlined>
                <v-card-subtitle class="font-weight-bold">
                  Disease Type
                </v-card-subtitle>
                <v-card-text>
                  <common-echarts :chart-option="chartOptionDiseaseType"></common-echarts>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" lg="6" md="12" sm="12" xl="6">
              <v-card outlined>
                <v-card-subtitle class="font-weight-bold">
                  Tissue Type
                </v-card-subtitle>
                <v-card-text>
                  <common-echarts :chart-option="chartOptionTissueType"></common-echarts>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6" lg="6" md="12" sm="12" xl="6">
              <v-card outlined>
                <v-card-subtitle class="font-weight-bold">
                  Top 10 Trait
                </v-card-subtitle>
                <v-card-text>
                  <common-echarts :chart-option="chartOptionTop10Trait"  ></common-echarts>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="12" md="12" sm="12" xl="12">
              <v-card outlined>
                <v-card-subtitle class="font-weight-bold">
                  Top Protein(Biomarker)
                </v-card-subtitle>
                <v-card-text>
                  <common-echarts :chart-option="chartOptionTopProtein"  ></common-echarts>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="12" md="12" sm="12" xl="12">
              <v-card outlined>
                <v-card-subtitle class="font-weight-bold">
                  Top Protein By Disease
                </v-card-subtitle>
                <v-card-text>
                  <top-protein-by :dat="tableTopProteinByDisease" ></top-protein-by>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="12" md="12" sm="12" xl="12">
              <v-card outlined>
                <v-card-subtitle class="font-weight-bold">
                  Top Protein By Tissue
                </v-card-subtitle>
                <v-card-text>
                  <top-protein-by :dat="tableTopProteinByTissue" ></top-protein-by>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>

    </v-sheet>
  </v-sheet>
</template>

<script>
import BreadCrumb from "@/components/breadCrumb";
import Axios from "axios";
import CommonEcharts from "@/components/commonEcharts";
import AggrDatasetPlot from "@/components/aggrDatasetPlot";
import commonfunc from "@/plugins/commonfunc";
import TopProteinBy from "@/components/topProteinBy";
import VisualizeGenomeBrowser from "@/components/visualizeGenomeBrowser";
export default {
  name: "Statistics",
  components: {VisualizeGenomeBrowser, TopProteinBy, AggrDatasetPlot, CommonEcharts, BreadCrumb},
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
          text: "statistic",
          disabled: true,
        },
      ],
      statsData: {},
      isLoading: false,
    }
  },
  mounted() {
    this.loadData();
  },
  computed: {
    chartOptionPubTimeLine() {
      if (Object.keys(this.statsData).includes("pub_timeline")) {
        return {
          animationDuration: 2000,
          // 设置为下载图片
          toolbox: {
            feature: {
              saveAsImage: {
                // type:"svg",
                title: "save",
                name: "Publications_Count_Timeline",
                pixelRatio: 4,
              }
            }
          },
          tooltip: {
            trigger: 'item'
          },
          dataset: [
            {
              id: 'dataset_total_count',
              source: this.statsData.pub_timeline,
              sourceHeader: true,
            },
          ],
          xAxis: {
            type: 'category',
            nameLocation: 'middle',
            nameGap: 25,
            name: "Year"
          },
          yAxis: {
            name: "Number of Accumulated Publications",
            nameLocation: "middle",
            nameGap: 35,
          },
          series: [
            {
              datasetIndex: 0,
              type: 'line',
              smooth: true,
              label: {
                show: true,
              },
              encode: {
                // 将 "amount" 列映射到 X 轴。
                x: 'year',
                // 将 "product" 列映射到 Y 轴。
                y: 'accumulated_count'
              },
              symbolSize: 12,
            },
          ]
        };
      } else {
        return null;
      }
    },
    chartOptionDiseaseType() {
      if (Object.keys(this.statsData).includes("disease_type")) {

        let data_sort = this.statsData.disease_type.sort((a, b) => {
          return b[1] - a[1]
        })
        return {
          animationDuration: 2000,
          // 设置为下载图片
          toolbox: {
            feature: {
              saveAsImage: {
                // type:"svg",
                title: "save",
                name: "Disease_Type_Count_by_Protein",
                pixelRatio: 4,
              }
            }
          },
          // legend: {
          //   orient: 'vertical',
          // },
          tooltip: {
            trigger: 'item'
          },
          dataset: [
            {
              id: 'dataset_cancertype_count',
              source: data_sort,
              sourceHeader: true,
            },
          ],
          series: [
            {
              tooltip: {
                formatter: '{c0}',
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'bold',
                }
              },
              name: "Disease Type",
              datasetIndex: 0,
              type: 'pie',
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: true,
                formatter: '{c}',
                position: "outside"
              },
              emphasis: {},
              radius: ["50%", '70%'],
              center: ['50%', '50%'],
              // encode: {
              //   name: ['Cancer_type',"count"],
              //   value: "count",
              //   tooltip: ['Cancer_type',"count"]
              // }
            },
          ]
        }
      } else {
        return null;
      }
    },
    chartOptionTissueType() {
      if (Object.keys(this.statsData).includes("tissue_type")) {

        let data_sort = this.statsData.tissue_type.sort((a, b) => {
          return b[1] - a[1]
        })
        console.log(data_sort)
        return {
          animationDuration: 2000,
          // 设置为下载图片
          toolbox: {
            feature: {
              saveAsImage: {
                // type:"svg",
                title: "save",
                name: "Tissue_Type_Count_by_Protein",
                pixelRatio: 4,
              }
            }
          },
          // legend: {
          //   orient: 'vertical',
          // },
          tooltip: {
            trigger: 'item'
          },
          dataset: [
            {
              id: 'dataset_cancertype_count',
              source: data_sort,
              sourceHeader: true,
            },
          ],
          series: [
            {
              tooltip: {
                formatter: '{c0}',
                textStyle: {
                  fontSize: '10',
                  fontWeight: 'bold',
                }
              },
              name: "Disease Type",
              datasetIndex: 0,
              type: 'pie',
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: true,
                formatter: '{c}',
                position: "outside"
              },
              emphasis: {},
              radius: ["50%", '70%'],
              center: ['50%', '50%'],
              // encode: {
              //   name: ['Cancer_type',"count"],
              //   value: "count",
              //   tooltip: ['Cancer_type',"count"]
              // }
            },
          ]
        }
      } else {
        return null;
      }
    },
    chartOptionTop10Trait() {
      if (Object.keys(this.statsData).includes("top10_trait")) {
        return {
          animationDuration: 2000,

          // 设置为下载图片
          toolbox: {
            feature: {
              saveAsImage: {
                // type:"svg",
                title: "save",
                name: "Top10_traits",
                pixelRatio: 4,
              }
            }
          },
          grid: {

            bottom: "35%"
          },
          tooltip: {
            trigger: 'item'
          },
          dataset: [
            {
              id: 'dataset_cancertype_count',
              source: this.statsData.top10_trait,
              sourceHeader: true,
            },
          ],
          xAxis: {

            inverse: false,
            type: 'category',
            nameLocation: 'middle',
            axisTick: {
              show: false,
            },
            axisLabel: {
              inside: false,
              align: 'right',
              vertical: 'middle',
              fontsize: 10,
              rotate: 45,
              overflow: 'break',
              width: 220,
              padding: [5, 0, 5, 0],
            }
          },
          yAxis: {
            name: "Number of Study",
            nameLocation: "middle",
            nameGap: 35,
          },
          series: [
            {
              datasetIndex: 0,
              type: 'bar',
              smooth: true,
              label: {
                show: true,
                position: 'top'
              },
              encode: {
                x: 'Trait_Ontology',
                y: 'count'
              },
            },
          ],
          /*
          * 定义zxcCallbak函数，用于echart对象点击后的callback，通过zxc前缀避免echarts的错误识别这个函数。
          * */
          zxcCallback:function(params){
            console.log(params)
            commonfunc.openAtNewPageTraitDetail(params.data[1])
          }
        }
      } else {
        return null;
      }
    },
    chartOptionTopProtein() {
      if (Object.keys(this.statsData).includes("top_protein")) {
        return {
          animationDuration: 2000,

          // 设置为下载图片
          toolbox: {
            feature: {
              saveAsImage: {
                // type:"svg",
                title: "save",
                name: "Top_Protein",
                pixelRatio: 4,
              }
            }
          },
          grid: {

            bottom: "35%"
          },
          tooltip: {
            trigger: 'item'
          },
          dataset: [
            {
              id: 'dataset_cancertype_count',
              source: this.statsData.top_protein,
              sourceHeader: true,
            },
          ],
          xAxis: {

            inverse: false,
            type: 'category',
            nameLocation: 'middle',
            axisTick: {
              show: false,
            },
            axisLabel: {
              inside: false,
              align: 'right',
              vertical: 'middle',
              fontsize: 10,
              rotate: 45,
              overflow: 'break',
              width: 220,
              padding: [5, 0, 5, 0],
            }
          },
          yAxis: {
            name: "Number of Biomarker",
            nameLocation: "middle",
            nameGap: 35,
          },
          series: [
            {
              datasetIndex: 0,
              type: 'bar',
              smooth: true,
              label: {
                show: true,
                position: 'top'
              },
              encode: {
                x: 'Trait_Ontology',
                y: 'count'
              },
            },
          ],
          /*
          * 定义zxcCallbak函数，用于echart对象点击后的callback，通过zxc前缀避免echarts的错误识别这个函数。
          * */
          zxcCallback:function(params){
            console.log(params)
            commonfunc.openAtNewPageProteinDetail(params.data[1])
          }
        }
      } else {
        return null;
      }
    },
    tableTopProteinByDisease() {
      if (Object.keys(this.statsData).includes("top_protein_by_disease")) {
        return this.statsData.top_protein_by_disease
      } else {
        return [];
      }
    },
    tableTopProteinByTissue() {
      if (Object.keys(this.statsData).includes("top_protein_by_tissue")) {
        return this.statsData.top_protein_by_tissue
      } else {
        return [];
      }
    },
  },
  methods: {
    loadData() {
      this.isLoading = true;
      Axios.get(
          baseURL + "/api/get_stats"
      ).then(res => {
        this.isLoading = false;
        this.statsData = JSON.parse(res.data);
      }).catch(err => {
        this.isLoading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>