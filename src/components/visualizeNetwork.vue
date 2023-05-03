<template>
  <div>
    <div :id="chartid" style="width: 100%;height: 800px;margin: 0 auto;"></div>
  </div>
</template>

<script>

import Axios from 'axios'
import _ from 'lodash'
import * as d3 from 'd3-force'

export default {
  name: "visualizeNetwork",
  props: {
      selectedType:{
        default:"protein"
      },
      selectedValue:{
          default:"P10643"
      },
    redraw:{
        type:Number,
    }
  },
  data() {
    return {
      chartid: _.uniqueId("network"),
      isLoading: false,
      plotData: {
        category: [],
        nodes: [],
        links: []
      },
      myChart: null,
      uniprot_id: "P10643",
      ensembl_id:null,
      tissue_id: null,
      trait_id: null,
      disease_id: null
    }
  },
  mounted() {
    let chartDom = document.getElementById(this.chartid);
    this.myChart = this.$echarts.init(chartDom, );

    this.loadData();
    // this.drawPlot();
  },
  watch: {
    plotData: {
      handler: function () {
        this.myChart && this.drawPlot();
      },
      immediate: true,
      deep: true,
    },
    selectedValue(newval){

      this.clearIDs();
      if (this.selectedType == 'protein'){

        this.uniprot_id = newval;

      }else if (this.selectedType == 'disease'){
        this.disease_id = newval;

      }else if (this.selectedType == 'trait'){
        this.trait_id = newval;

      }else if (this.selectedType == 'tissue'){
        this.tissue_id = newval;
      }
      // this.loadData();
    },
    redraw(){
      this.loadData();
      this.drawPlot();
    }
  },
  methods: {
    clearIDs() {
      this.uniprot_id = null;
      this.ensembl_id = null;
      this.disease_id = null;
      this.tissue_id  = null;
      this.trait_id = null;
    },
    layout(data) {
      // console.log("layput")

      let data2 = _.cloneDeep(data)

      const simulation = d3.forceSimulation(data2.nodes)
          .force("charge", d3.forceManyBody().strength(-100))
          .force("link", d3.forceLink(data2.links).id(d => d.id).strength(0.5))
          // .force("center", d3.forceCenter()).stop()
          .force("collide", d3.forceCollide().radius(d => d.symbolSize).iterations(10))
          .force("x", d3.forceX())
          .force("y", d3.forceY())
          .tick(50);

      data.nodes = _.cloneDeep(data2.nodes)
      return data


    },
    loadData() {
      this.isLoading = true;
      Axios.post(
          baseURL + "/api/calculate_network",
          {},
          {
            params: {
              uniprot_id: this.uniprot_id,
              tissue_ontology_id: this.tissue_id,
              trait_ontology_id: this.trait_id,
              disease_ontology_id: this.disease_id,
            }
          }
      ).then(res => {
        this.isLoading = false;
        let data = JSON.parse(res.data);
        console.log(data)
        this.plotData.nodes = data.nodes;
        this.plotData.links = data.links;
        this.plotData.category = data.category;
        // this.drawPlot();
      }).catch(err => {
        this.isLoading = false;
      })
    },
    drawPlot() {

      // let that = this;

      this.myChart.showLoading();

      let nodeWithID = {};
      this.plotData && this.plotData.nodes && this.plotData.nodes.forEach(item => {
        nodeWithID[item.id] = item.name;
      })

      // console.log(this.plotData)
      let plotDataLocal = _.cloneDeep(this.plotData);
      plotDataLocal = this.layout(plotDataLocal);
      console.log(this.plotData)


      let option = {
        theme: "light",
        toolbox: {
          feature: {
            saveAsImage: {
              // type:"svg",
              title: "save",
              name: "MACdb_Network_visualization",
              pixelRatio: 4,
            }
          }
        },

        title: {
          text: 'Protdb association network',
          subtext: 'Default layout',
          top: 'bottom',
          left: 'right'
        },
        tooltip: {
          formatter: function (params) {
            // console.log(params)
            if (params.dataType == "edge") {
              //使用that来获得当前的this 因为eachart里边的this进行了切换
              return `${nodeWithID[params.data.source]} > ${nodeWithID[params.data.target]} : <b> ${params.data.count} </b>`
            } else if (params.dataType == "node") {
              return `${params.data.name}<br/>count:${params.data.count}`
            }
          }
        },
        legend: [
          {
            // selectedMode: 'single',
            orient: "vertical",
            left: "10",
            top: "10",
            itemGap: 25,
            data: plotDataLocal.category.map(function (a) {
              return a.name
            })
          }
        ],
        series: [
          {
            cursor: "pointer",
            // animation: false,
            // animationThreshold: 1,
            // animationDurationUpdate: 1,
            name: 'knowledge graph',
            type: 'graph',
            layout: 'none',
            // layout: 'none',
            // layout: 'none',
            // layout: 'circular',
            data: plotDataLocal.nodes,
            links: plotDataLocal.links,
            categories: plotDataLocal.category,
            roam: true,
            label: {
              show: true,
              position: 'middle',
              formatter: '{b}'
            },
            labelLayout: {
              hideOverlap: true
            },
            draggable: true,
            lineStyle: {
              color: 'source',
              curveness: 0.0
            },
            // animationEasing:"linear",
            zoom: 1,
            // force: {
            //   edgeLength: 15,
            //   repulsion: 20,
            //   gravity: 0.1,
            //   friction: 0.1,
            //
            // }
          }
        ]
      };


      this.myChart.clear()
      option && this.myChart.setOption(option);


      this.myChart.hideLoading();


      let that = this
      this.myChart.off('click')
      this.myChart.on('click', function (params) {
        // console.log("clicking....")
        if (params.dataType == "node") {
          let data = params.data

          if (data.type == "Entry_Name") {
            that.$commonfunc.openAtNewPageProteinDetail(data.id)
          } else if (data.type == "Trait_ontology_name") {

            that.$commonfunc.openAtNewPageTraitDetail(data.id)
          }
        }
      });

      window.addEventListener("resize", () => {
        // 第六步，执行echarts自带的resize方法，即可做到让echarts图表自适应
        that.myChart && that.myChart.resize();
        // 如果有多个echarts，就在这里执行多个echarts实例的resize方法,不过一般要做组件化开发，即一个.vue文件只会放置一个echarts实例
        /*
        this.myChart2.resize();
        this.myChart3.resize();
        ......
        */
      });

    }

  },
  beforeDestroy() {
    /* 页面组件销毁的时候，别忘了移除绑定的监听resize事件，否则的话，多渲染几次
    容易导致内存泄漏和额外CPU或GPU占用哦*/
    window.removeEventListener("resize", () => {
      this.myChart.resize();
    });
  },

}


</script>

<style scoped>

</style>