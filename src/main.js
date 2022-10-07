import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import "./mock";
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import showMessage from "@/utils/showMessage";
Vue.prototype.$showMessage = showMessage;
Vue.prototype.$bus = new Vue({});

Vue.use(ElementUI);

Vue.config.productionTip = false


// import getComp from "../src/utils/getComponentRootDom";
// Vue.prototype.$getComp = getComp;

// 注册全局指令
import vLoading from "@/directives/loading";
Vue.directive("loading", vLoading)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// import {getBlogCategories} from "@/api/blog";
// async function test() {
//   const a = await getBlogCategories();
//   console.log(a)
// }
// test()
