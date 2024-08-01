import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/AddressRegistration",
    name: "AddressRegistration",
    children: [
      {
        path: "Create",
        name: "AddressRegistrationCreate",

        component: () => import("@/Modules/AddressRegistration/Pages/index.vue"),

      },
      {
        path: "SelectedAddress",
        name: "AddressRegistrationSelectedAddress",

        component: () => import("@/Modules/AddressRegistration/Pages/selected-address.vue"),

      },
      {
        path: "Addresses",
        name: "AddressRegistrationAddresses",

        component: () => import("@/Modules/AddressRegistration/Pages/addresses.vue"),

      },
    ]

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
