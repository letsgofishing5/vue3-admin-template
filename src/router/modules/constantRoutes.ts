import { RouteRecordRaw } from "vue-router";
export const ConstantRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: import.meta.env.VITE_ROOT_ROUTE_NAME,
        component: () => import("@/layouts/index.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/index.vue"),
    },
];
export const NotFoundRoutes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import("@/views/system/notFound/404.vue")
    }
]