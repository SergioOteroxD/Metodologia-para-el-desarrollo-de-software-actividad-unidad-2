import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import AuthViewVue from "../views/AuthView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AuthViewVue,
    },
    {
      path: "/caja",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CajaView.vue"),
    },
  ],
});

export default router;
