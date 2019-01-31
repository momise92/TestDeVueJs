import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
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
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/comprendrevuejs",
      name: "comprendrevuejs",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "ComprendreVueJs" */ "./views//ComprendreVueJs.vue")
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
    },
    {
      path: "/Cafe1euro",
      name: "GetAjax",
      component: () => import("./views/getAjax.vue")
    },
    {
      path: "/first-crud",
      name: "first-crud",
      component: () => import("./views/Crud.vue"),
      children: [
        {
          path: "view-users",
          name: "view-users",
          props: { title: "List user" },
          component: () => import("./components/users/TablerUser.vue")
        },
        {
          path: "createUser",
          name: "createUser",
          props: { title: "Create user" },
          component: () => import("./components/users/FormUser.vue")
        },
        {
          path: "update-user/:id",
          name: "update-user",
          props: { title: "Update user" },
          component: () => import("./components/users/FormUser.vue")
        }
      ]
    },
    {
      path: "",
      name: "404",
      props: { title: "update user" },
      component: () => import("./views/404.vue")
    }
  ]
});
