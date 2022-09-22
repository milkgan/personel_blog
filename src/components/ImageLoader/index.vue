<template>
    <div class="image-loader-container">
        <!-- 占位图 -->
        <img v-if="!isAllDone" class="placeholder" :src="placeholder" alt="占位图">
        <!-- 透明度过渡展现原图 -->
        <img :style="{opacity:originOpacity, transition: `${duration}ms`} " @load="handleLoad" :src="src" :alt="alt">
    </div>
</template>

<script>
export default {
    props: {
        // 原始图片的路径
        src: {
            type: String,
            required: true
        },
        // 原始图片加载完成前的占位图片
        placeholder: {
            type: String,
            required: true
        },
        // 原始图片加载完成后，切换到原始图经过的毫秒数
        duration: {
            type: Number,
            default: 500
        },
        alt: {
            type: String,
            default: '背景图'
        }
    },
    data() {
        return {
            originLoaded: false,// 原图是否加载完
            isAllDone: false,// 是否所有（原图加载、过渡）都已经结束
        }
    },
    computed: {
        // 控制原图透明度
        originOpacity() {
            return this.originLoaded ? 1 : 0;
        }
    },
    methods: {
        handleLoad() {
            this.originLoaded = true;
            setTimeout(() => {
                this.isAllDone = true;
                // 所有都加载完毕，通知父组件
                this.$emit("load");
            }, this.duration)
        }
    }
}
</script>

<style lang="less" scoped>
/* 
图片加载过程中，会从上到下渲染，渲染完毕，渲染完毕也就加载完毕，渲染的过程观感不是很好
因为原图使用了定位，所以是在占位图的上方
设置过渡时间的目的是，等图片加载完毕之后，控制图片的透明度以渐进的方式显示出来
过渡的时候，原图透明度从0到1变化，底色是占位图，这时候整个图片的显示就不至于那么突兀
等到原图已经完全展现（即透明度为1）出来了，然后再把占位图给去了
 */
@import "~@/styles/mixin.less";
.image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img {
        .self-fill();
        object-fit: cover;
    }
}
.placeholder {
    filter: blur(2vw);
}
</style>