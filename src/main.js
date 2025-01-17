// 定义 Vue 3 的特性标志
window.__VUE_OPTIONS_API__ = true; // 启用 Options API
window.__VUE_PROD_DEVTOOLS__ = false; // 禁用生产环境 DevTools
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false; // 禁用 hydration 不匹配的详细信息

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // 引入 Vuetify 样式
import '@mdi/font/css/materialdesignicons.css'; // 引入 Material Design 图标
import { createHead } from '@vueuse/head';
import './styles/global.css';

const app = createApp(App);
const vuetify = createVuetify(); // 创建 Vuetify 实例
const head = createHead();

app.use(router);
app.use(vuetify); // 使用 Vuetify
app.use(head);
app.mount('#app');