import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
	{ path: "/", component: () => import(/*webpackChunkName: "MainPage" */ "@/modules/MainPage") },
	{ path: "/atomos", component: () => import(/*webpackChunkName: "AtomosPage" */ "@/modules/atomos/pages/Atomos") },
	{ path: "/snippets", component: () => import(/*webpackChunkName: "SnippetsPage" */ "@/modules/snippets/pages/Snippets") },
	{ path: "/:pathMatch(.*)*", component: () => import(/*webpackChunkName: "NoPageFound" */ "@/modules/shared/pages/NoPageFound") },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router