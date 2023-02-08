import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/flight-details/:id",
      name: "flight-details",
      component: () => import("@/views/FlightDetailsView.vue"),
    },
    {
      path: "/flight-confirmation/:id",
      name: "flightConfirmation",
      component: () => import("@/views/FlightConfirmationView.vue"),
    },
    {
      path: "/flight-confirmed",
      name: "flightConfirmed",
      component: () => import("@/views/FlightConfirmedView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

export default router;
