import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from "axios";
import VueAxios from "vue-axios";

import router from "./router";

Vue.use(router);
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  render: h => h(App) //ElementUI
})
