import { createRouter, createWebHistory } from "vue-router";
import Todo from "../views/Todo_list.vue";

const routes = [
	{
		path: "/",
		name: "Todo",
		component: Todo,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
