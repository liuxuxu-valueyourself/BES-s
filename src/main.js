import Vue from "vue";

import VCharts from "v-charts";

import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";

import router from "./router";
import store from "./store";

import "./assets/assets.css";

Vue.config.productionTip = false;

Vue.use(VCharts);
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
