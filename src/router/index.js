import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";
import CreativeItem from "../components/CreativeItem.vue";
import Vernacular from "../components/Vernacular.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import("../views/index/index.vue")
    component: Index,
    redirect: '/creative',
  },
  {
    // 创意工坊 默认展示
    path: "/creative",
    name: "Creative",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreativeItem,
  },
  {
    // 白话
    path: "/talk",
    name: "Talk",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Vernacular,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
