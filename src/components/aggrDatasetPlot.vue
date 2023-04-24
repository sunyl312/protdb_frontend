<template>
  <v-sheet>
    <common-echarts   :chart-option="chartOption" ></common-echarts>
  </v-sheet>
</template>

<script>

import Axios from "axios";
import CommonEcharts from "@/components/commonEcharts";
import _ from 'lodash'
export default {
  name: "aggrDatasetPlot",
  components: {CommonEcharts},
  props:{
    title: {
      default:""
    },
    dbname:{
      default:null,
    },
    ontology_id:{
      default:null,
    },
    ensembl_id:{
      default:null,
    },
    uniprot_id:{
      default:null,
    },
  },
  data(){
    return {
      isLoading:false,
      items:null,
      numberOffset:1.0000
    }
  },
  mounted(){
    this.loadData();
  },
  computed:{
    chartOption(){

      if (this.items == null){
        return null
      }else  {
        let header = [["min",  "Q1",  "median",  "Q3",  "max","category"]];
        let out = []
        this.items && this.items.forEach(item=>{
          out.push([
              Math.log10(item.min + this.numberOffset) ,
              Math.log10(item.down_quantile+this.numberOffset),
              Math.log10(item.median+this.numberOffset),
              Math.log10(item.up_quantile+this.numberOffset),
              Math.log10(item.max+this.numberOffset),
              item.name,
          ])
        });
        out.sort((a,b)=>{
          // console.log(a)
          // console.log(b)
          if ( (b[2] - a[2]) < 0.00001 ){
            return b[4] - a[4]
          }else{
            return b[2] - a[2]
          }
          // return a[2] - b[2]
        });
        console.log(out)
        let _chartOption = {
          animationDuration: 2000,
          // 设置为下载图片
          toolbox: {
            feature: {
              saveAsImage: {
                // type:"svg",
                title: "save",
                name:"aggregated_database"+this.title+".png",
                pixelRatio: 4,
              }
            }
          },
          tooltip:{
            trigger: 'axis',
            formatter:(params)=>{
              return `<b>Name: </b>${params[0].data[5]}<br/>
                      <b>Max: </b>${params[0].data[4]} <br/>
                      <b>Q3: </b>${params[0].data[3]} <br/>
                      <b>Median: </b>${params[0].data[2]} <br/>
                      <b>Q1: </b>${params[0].data[1]} <br/>
                      <b>Min: </b>${params[0].data[0]} <br/>
                      `
            }
          },
          grid:{
            bottom:150,
            left:150,
          },
          dataset: [
            {
              id: 'datasets',
              source: out,
              sourceHeader:true,
            },
          ],
          yAxis: {
            nameLocation: 'middle',
            nameGap: 35,
            name:"FPKM (Log10(x+1))"
          },
          xAxis: {
            type: 'category',
            name:"Cancer Type",
            nameLocation:"middle",
            nameGap:135,
            axisTick:{
              show:false,
            },
            axisLabel:{
              inside:false,
              align:'right',
              verticalAlign:'middle',
              interval:0,
              margin:24,
              fontsize:10,
              rotate: 30,
              overflow:'break',
              width:200,
              padding:[5,0,5,0],
              // lineHeight:25,
              // borderWidth:5,
              // borderColor:'black'
            }
          },
          series: [
            {
              // datasetIndex: 0,
              name: 'boxplot',
              type: 'boxplot',
              // itemStyle: {
              //   color: '#b8c5f2'
              // },
              // dataGroupId:"category",
              // data:out,
              encode: {
                y: [0,1,2,3,4],
                x: 5,
                // itemName: ['category'],
                // tooltip: ['min', 'Q1', 'median', 'Q3', 'max']
              }
            }
          ]
        };
        return _chartOption;
      }
    }
  },
  methods:{
    loadData(){
      this.isLoading = true;
      Axios.post(
          baseURL+"/api/aggrds_get_one_dataset",
          {},
          {
            params:{
              dbname:this.dbname,
              ontology_id:this.ontology_id,
              ensembl_id:this.ensembl_id,
              uniprot_id:this.uniprot_id,
            }
          }
      ).then(res=>{
        this.isLoading = false;
        this.items = JSON.parse(res.data);
      }).catch(err=>{
        this.isLoading = false;
      })
    }
  },

}
</script>

<style scoped>

</style>