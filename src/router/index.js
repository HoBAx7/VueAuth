import { createRouter, createWebHistory } from "vue-router";

import Home from '../view/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("../view/Login.vue"),

    },
    {
        path: '/register',
        name: 'register',
        component: () => import("../view/Register.vue"),
    },
    {
        path: '/forget-pass',
        name: 'forget-pass',
        component: () => import("../view/forgotpassword.vue"),
    },
    {
        path: '/password-reset/:token',
        name: 'password-reset',
        component: () => import("../view/resetpassword.vue"),
    },
    //--------- crud routes ---------------//
    {
        path: '/skills',
        name: 'SkillIndex',
        component: () => import("../view/skills/SkillIndex.vue"),
    },
    {
        path: '/skills/create',
        name: 'SkillCreate',
        component: () => import("../view/skills/SkillCreate.vue"),
    },
    {
        path: '/skills/:id/edit',
        name: 'SkillEdit',
        component: () => import("../view/skills/SkillEdit.vue"),
        props: true,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;