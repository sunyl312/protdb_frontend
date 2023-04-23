<template>
  <div ref="echart" style="width:100%;height:500px;"></div>
</template>

<script>

export default {
  name: "commonEcharts",
  props: {
    chartOption: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      count: 1,
    }
  },
  mounted() {
    const vm = this
    vm.$nextTick(() => {
      vm.drawChart()
    });

  },
  methods: {
    /*
    参考这个链接的第二种方式：
    http://t.csdn.cn/xHfhd
    */
    drawChart() {
      let that = this
      that.myChart = this.$echarts.init(
          this.$refs.echart
      );
      this.chartOption && that.myChart.setOption(this.chartOption);

      this.chartOption && window.addEventListener("resize", () => {
        // 第六步，执行echarts自带的resize方法，即可做到让echarts图表自适应
        that.myChart.resize();
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