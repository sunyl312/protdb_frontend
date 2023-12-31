import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import '@fortawesome/fontawesome-free/css/all.css' // 确保您正在使用 css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // 默认值 - 仅用于展示目的
  },
});
