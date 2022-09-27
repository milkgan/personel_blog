<template>
    <div class="home-container" ref="container">
        <!-- <div @click="test">首页</div> -->
        <!-- <div class="message message-info">
            <span class="icon">
                <Icon :type="'success'"/>
            </span>
            <div>测试测试测试</div>
        </div> -->
        <ul class="carousel" :style="{marginTop}">
            <li v-for="item in banners" :key="item.id">
                <Carouselitem :carousel="item"/>
            </li>
        </ul>
        <div v-show="index > 0" class="arrow-up" @click="switchTo(index - 1)" >
            <Icon type="arrowUp"/>
        </div>
        <div v-show="index < banners.length - 1" class="arrow-down" @click="switchTo(index + 1)">
            <Icon type="arrowDown"/>
        </div>
        <ul class="carousel-dots">
            <li v-for="(item, i) in banners" :key="item.id" :class="{active: i === index}" @click="switchTo(i)"></li>
        </ul>

        
    </div>
    
</template>

<script>
// import axios from "axios";
import {getBanners} from "@/api/banner";
import Icon from "@/components/Icon";
import Carouselitem from '@/views/Home/Carouselitem';
// import showMessage from '@/utils/showMessage';

export default {
    components: {
        Icon,
        Carouselitem
    },
    data() {
        return {
            banners: [], // 轮播图
            index: 0, // 当前第几张轮播图
            containerHeight: 0 // home-container整个容器高度
        }
    },
    async created() {
        this.banners = await getBanners();
        console.log(this.banners)
    },
    mounted() {
        this.containerHeight = this.$refs.container.clientHeight;
        console.log(this.$refs.container.clientHeight)
    },
    computed: {
        // carousel移动距离
        marginTop() {
            return -(this.index * this.containerHeight) + 'px';
        }
    },
    methods: {
        /* 切换轮播图 */
        switchTo(i) {
            this.index = i;
        }
    }
}
</script>

<style lang="less" scoped>
// @import "~@/styles/mixin.less";
@import "~@/styles/var.less";
// .home-container {
//     border: 1px solid #000;
//     margin: 100px;
//     height: 400px;
//     position: relative;
// }

// 整个容器
.home-container {
    margin: 60px;
    border: 1px solid #000;
    width: 400px;
    height: 300px;
    overflow: hidden;
    color: @lightWords;
    position: relative;
}
// 轮播图
.carousel {
    width: 100%;
    height: 100%;
    li {
        width: 100%;
        height: 100%;
    }
}
// 向上箭头
.arrow-up {
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    animation: jump-up 2s infinite;
    cursor: pointer;
    padding: 4px;
}
// 向下箭头
.arrow-down {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    animation: jump-up 2s infinite;
    cursor: pointer;
    padding: 4px;
}
// 轮播图标志点
.carousel-dots {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    li {
        width: 10px;
        height: 10px;
        border: 1px solid @lightWords;
        box-sizing: border-box;
        border-radius: 50%;
        margin-top: 10px;
        cursor: pointer;
        &.active {
            background-color: @lightWords;
        }
        &:first-of-type {
            margin-top: 0;
        }
    }
    
}
@jump: 3px;
@keyframes jump-up {
    0% {
        transform: translate(-50%, @jump);
    }
    50% {
        transform: translate(-50%, -@jump);
    }
    100% {
        transform: translate(-50%, @jump);
    }
}
@keyframes jump-down {
    0% {
        transform: translate(-50%, -@jump);
    }
    50% {
        transform: translate(-50%, @jump);
    }
    100% {
        transform: translate(-50%, -@jump);
    }
}

</style>