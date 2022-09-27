<template>
    <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="carousel-img" ref="image" :style="imgPosition">
            <ImageLoader :src="carousel.bigImg" :placeholder="carousel.smallImg"/>
        </div>
        
    </div>
</template>


<script>
import ImageLoader from "@/components/ImageLoader";
export default {
    components: {
        ImageLoader
    },
    props: {
        carousel: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            containerSize: null, // 容器宽高
            innerSize: null, // 图片宽高
            mouseX: 0, // 鼠标横坐标
            mouseY: 0, // 鼠标纵坐标
            containerReact: null
        }
    },
    computed: {
        // 容器中心点位置
        center() {
            return {
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2,
            }
        },
        // 图片定位
        imgPosition() {
            if(!this.containerSize || !this.innerSize) {
                return;
            }
            const extraWidth = this.innerSize.width - this.containerSize.width;
            const extraHeight = this.innerSize.height - this.containerSize.height;
            const left = -(extraWidth / this.containerSize.width) * this.mouseX;
            const top = -(extraHeight / this.containerSize.height) * this.mouseY;
            return {transform: `translate(${left}px, ${top}px)`}
        }
    },
    mounted() {
        // 获取容器宽高
        this.containerSize = {
            width:this.$refs.container.clientWidth,
            height:this.$refs.container.clientHeight
        }
        // 获取图片宽高
        this.innerSize = {
            width:this.$refs.image.clientWidth,
            height:this.$refs.image.clientHeight
        }
        // 获取容器相对于视口等信息
        this.containerReact = this.$refs.container.getBoundingClientRect()
        // 设置中心点
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
    },
    methods: {
        // 鼠标移入时获取鼠标位置
        handleMouseMove(e) {
            this.mouseX = e.clientX - this.containerReact.left;
            this.mouseY = e.clientY - this.containerReact.top;
        },
        // 鼠标移出时，归位
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        }
    }
}
/* 
先是放大图片容器，获取到容器尺寸以及图片尺寸
获取到中心点的位置
获取到鼠标的位置
根据鼠标移动对应比例的距离
*/
</script>

<style lang="less" scoped>
.carousel-item-container {
    // width: 100px;
    // height: 200px;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
    
}
</style>