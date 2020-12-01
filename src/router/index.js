import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "show"
    }
  },
  {
    path: "/home",
    name: "home",
    meta: {
      info: "统计"
    },
    component: Home,
    children: [
      {
        path: "show",
        name: "show",
        meta: {
          info: "统计"
        },
        component: () => import("../views/Home.vue")
      },
      {
        path: "add",
        name: "add",
        meta: {
          info: "添加商品"
        },
        component: () => import("../views/Add.vue")
      },
      {
        path: "list",
        name: "list",
        meta: {
          info: "商品列表"
        },
        component: () => import("../views/List.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/login" && to.path !== "/register") {
    if (store.state.userName) {
      return next();
    }
    return next("/login");
  }
  return next();
});

export default router;
