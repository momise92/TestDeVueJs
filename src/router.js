import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/comprendrevuejs",
      name: "comprendrevuejs",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "ComprendreVueJs" */ "./views//ComprendreVueJs.vue")
    },
    {
      path: "/tp",
      name: "tp",
      component: () => import("./views/Tp.vue")
    },
    {
      path: "/simplante",
      name: "simplante",
      component: () => import("./views/Simplante.vue")
    }
  ]
});