import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { routes } from "./routes";
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.use(ElementUI);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router
}).$mount('#app');
