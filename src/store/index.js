import Vue from "vue";
// 引入vuex
import Vuex from "vuex"; 
import setting from "./setting";
import banner from './banner';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        setting,
        banner
    }

})