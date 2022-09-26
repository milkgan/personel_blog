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
    // const contant = options.content || "";
    const type = options.type || "info";
    // const duration = options.duration || 2000;
    // const container = options.container || document.body;
    
    // 创建消息元素
    const div = document.createElement("div");
    div.className = `${styles.message} ${styles[`message-${type}`]}`;
    console.log(styles);
    return div;
    

    




}