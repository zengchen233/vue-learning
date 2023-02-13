import Vue from "vue";
import Router from "vue-router";

import Main from "../views/Main.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";

import List from "../views/user/List.vue";
import Profile from "../views/user/Profile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/main",
      props: true,
      component: Main,
      //嵌套路由
      children: [
        {
          path: "/user/profile/:id",
          name: 'Profile',
          component: Profile,
          props: true
        },
        {
          path: "/user/list",
          name: 'List',
          component: List
        }
      ]
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/go",
      redirect: "/login"
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
