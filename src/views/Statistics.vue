<template>
  <v-sheet class="mx-4">
    <bread-crumb :breadcrumb-data="breadcrumbData"></bread-crumb>
    <v-sheet>

      <v-row>
        <v-col cols="6">
          <common-echarts :chart-option="chartOptionPubTimeLine" ></common-echarts>
        </v-col>
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<script>
import BreadCrumb from "@/components/breadCrumb";
import Axios from "axios";
import CommonEcharts from "@/components/commonEcharts";
export default {
  name: "Statistics",
  components: {CommonEcharts, BreadCrumb},
  data(){
    return{
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
      statsData:{},
      isLoading:false,
    }
  },
  mounted() {
    this.loadData();
  },
  computed:{
    chartOptionPubTimeLine(){
      if( Object.keys(this.statsData).includes("pub_timeline")){
        return {
          animationDuration: 2000,
          // 设置为下载图片
          toolbox: {
            feature: {
              saveAsImage: {
                // type:"svg",
                title: "save",
                name:"Publications_Count_Timeline",
                pixelRatio: 4,
              }
            }
          },
          tooltip:{
            trigger:'item'
          },
          dataset: [
            {
              id: 'dataset_total_count',
              source: this.statsData.pub_timeline,
              sourceHeader:true,
            },
          ],
          xAxis: {
            type: 'category',
            nameLocation: 'middle',
            nameGap: 25,
            name:"Year"
          },
          yAxis: {
            name:"Number of Accumulated Publications",
            nameLocation:"middle",
            nameGap:35,
          },
          series: [
            {
              datasetIndex:0,
              type: 'line',
              smooth:true,
              label:{
                show:true,
              },
              encode: {
                // 将 "amount" 列映射到 X 轴。
                x: 'year',
                // 将 "product" 列映射到 Y 轴。
                y: 'accumulated_count'
              },
              symbolSize:12,
            },
          ]
        };
      }else{
        return null;
      }
    }
  },
  methods:{
    loadData(){
      this.isLoading = true;
      Axios.get(
          baseURL+"/api/get_stats"
      ).then(res=>{
        this.isLoading = false;
        this.statsData = JSON.parse(res.data);
      }).catch(err=>{
        this.isLoading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>