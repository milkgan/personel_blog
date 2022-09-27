import getComponentRootDom from '@/utils/getComponentRootDom';
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
//  options = {}
export default function(options = {}) {
    const contant = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    
    // 创建消息元素
    const div = document.createElement("div");
    div.className = `${styles.message} ${styles[`message-${type}`]}`;
    // 获取Icon元素
    const iconDom = getComponentRootDom(Icon, {type});

    // 注意要使用iconDom转换成字符串
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${contant}</div>`;

    // 处理容器的position
    if(options.container) {
        console.log('container')
        if(getComputedStyle(container).position === 'static') {
            container.style.position = 'relative'
        }
    }
    // 挂载元素
    container.appendChild(div);

    // 浏览器强行渲染
    div.clientHeight; // 导致reflow

    // 处理显示动画效果
    div.style.opacity = 1;
    // 不能写分号！！！
    // div.style.transform = "translate(-50%, -50%);"
    div.style.transform = "translate(-50%, -50%)";

    // 一段时间后，处理消失效果
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = "translate(-50%, -50%) translateY(-25px)";
        div.addEventListener("transitionend", function() {
            div.remove();
            // 运行回调函数
            options.callback && options.callback();
        }, {once: true})
    }, duration)

    return div;
    

    




}