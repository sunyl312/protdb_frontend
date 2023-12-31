import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import i18n from './i18n'
import commonfunc from "./plugins/commonfunc";
// import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
// import enUS from 'vxe-table/lib/locale/lang/en-US'
import echarts from './plugins/echarts'
// import _ from 'lodash'
import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);
VXETable.setup({
  // 对组件内置的提示语进行国际化翻译
  i18n: (key, args) => i18n.t(key, args)
})


window.ResizeObserver = undefined

router.afterEach((to,from, next) => {
  window.scrollTo(0,0)
})


Vue.prototype.$commonfunc = commonfunc
Vue.prototype.$echarts = echarts;
// Vue.prototype.$_ = _;/**/
Vue.config.productionTip = false
window.baseURL = '/protdb';
Vue.use(VXETable)
export default  new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
