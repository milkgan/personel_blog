import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import "./mock";
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false


import getComp from "../src/utils/getComponentRootDom";
Vue.prototype.$getComp = getComp;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
