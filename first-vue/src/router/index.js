import Vue from "vue";
import VueRouter from "vue-router";

import Hello from "../components/Hello.vue";
import Main from "../components/Main.vue";
import Zcc from "../components/Zcc.vue";

//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
  routes: [
    {
      //路由路径
      path: '/hello',
      name: 'hello',
      //跳转的组件
      component: Hello
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/Zcc',
      name: 'Zcc',
      component: Zcc
    }
  ]
});
