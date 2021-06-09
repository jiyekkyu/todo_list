import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';

const app = createApp(App).use(router)

app.config.globalProperties.$axios = axios.create({
	baseURL: 'http://127.0.0.1:3000',
});

app.mount("#app");
