import Vue from "vue";

/* 获取组件渲染的Dom的根元素 */
export default function(comp, props) {
    const vm = new Vue({
        // render: h => h(comp, {props:props})
        render: h => h(comp, {props})
    })
    vm.$mount();
    return vm.$el;
}