import Vue from "vue";
import Router from "vue-router";
import JDIndex from "../home/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "JDIndex",
      component: JDIndex
    }
  ]
});
