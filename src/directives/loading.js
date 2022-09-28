import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 得到el中loading效果的img元素
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]")
}

// 创建加载图片元素
function createLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

export default function(el, binding) {
    const curImg = getLoadingImg(el);
    if(binding.value) {
        if(!curImg) {
            const img = createLoadingImg();
            el.appendChild(img);
        }  
    }else {
        if(curImg) {
            curImg.remove();
        }
    }
}