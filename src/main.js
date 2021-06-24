import { createApp } from "vue";
import axios from 'axios';
import App from "@/App.vue";
import router from "@/router";
import todolist from "@/components/Todo_list_tbl"
import "@/css/todo.css";

const app = createApp(App).use(router);

app.config.globalProperties.$axios = axios.create({
	baseURL: 'http://127.0.0.1:3000',
});

app.component('todolist-table', todolist);
app.mount("#app");
