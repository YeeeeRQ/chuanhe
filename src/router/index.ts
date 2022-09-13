import Vue from "vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import Gallery from "../components/Gallery.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/gallery",
  },
  {
    path: "/gallery",
    component: Gallery,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
